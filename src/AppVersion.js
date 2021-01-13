import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Alert from "./Alert";

export default class AppVersion extends Component {
    static propTypes = {
        version: PropTypes.string,
        updateInterval: PropTypes.number,
        fetchVersion: PropTypes.func.isRequired,
    };
    static defaultProps = {
        version: '',
        updateInterval: 1800000,
        fetchVersion: () => {
        },
    };

    state = {
        updateAvailable: false,
        dismissed: false,
    }

    timer = null;

    constructor(props) {
        super(props);
        this.onClickUpdate = this.onClickUpdate.bind(this);
        this.onDismissUpdates = this.onDismissUpdates.bind(this);
        if (global.document) {
            document.addEventListener('visibilitychange', this.props.fetchVersion);
        }
    }

    componentDidMount() {
        this.props.fetchVersion();
        this.timer = setInterval(this.props.fetchVersion, this.props.updateInterval);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.version !== prevProps.version && !!prevProps.version && !this.state.updateAvailable) {
            this.setState({updateAvailable: true});
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        if (global.document) {
            document.removeEventListener('visibilitychange', this.props.fetchVersion);
        }
    }

    onClickUpdate(ev) {
        ev.preventDefault();
        if (global.document) {
            document.location.reload(true);
        }
    }

    onDismissUpdates() {
        this.props.setState({dismissed: true});
    }

    render() {
        const {version} = this.props;
        const {updateAvailable, dismissed} = this.state;
        return (
            <div>
                <span onClick={this.props.fetchVersion} className="app__version">Version: {version}</span>
                {!!updateAvailable && !dismissed && (
                    <div onClick={this.onClickUpdate} className="app__version-popup">
                        <Alert type="info" onDismiss={this.onDismissUpdates} title="Update Available">
                            Click Here to refresh,
                        </Alert>
                    </div>
                )}
            </div>
        );
    }
}
