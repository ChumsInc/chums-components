import React, {Component} from "react";
import Alert from "./Alert";
import PropTypes from 'prop-types';
import {propTypeAlert} from "./commonPropTypes";

export default class AlertList extends Component {
    static propTypes = {
        alerts: PropTypes.arrayOf(PropTypes.shape({...propTypeAlert})),
        onDismiss: PropTypes.func,
    }
    static defaultProps = {
        alert: [],
        onDismiss: () => {},
    }

    render() {
        const {alerts, onDismiss} = this.props;
        return (
            <div>
                {alerts.map(alert => (<Alert key={alert.id} {...alert} onDismiss={onDismiss} />))}
            </div>
        )
    }
}
