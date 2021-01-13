import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {colorPropType} from "./commonPropTypes";

class ProgressBar extends Component {
    static propTypes = {
        color: PropTypes.oneOf([...colorPropType]),
        value: PropTypes.number,
        valueMin: PropTypes.number,
        valueMax: PropTypes.number,
        striped: PropTypes.bool,
        animated: PropTypes.bool,
        className: PropTypes.number,
        bgClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    }

    static defaultProps = {
        color: 'primary',
        value: 100,
        valueMin: 0,
        valueMax: 100,
        striped: false,
        animated: false,
        className: '',
        bgClassName: '',
    }

    render() {
        const {color, value, valueMin, valueMax, striped, animated, className, bgClassName, children} = this.props;
        let width = 1 - ((valueMax - value) / (valueMax - valueMin));
        if (width < 0) {
            width = 0;
        } else if (width > 1) {
            width = 1;
        }
        const progressBarClassName = {
            'progress-bar': true,
            'progress-bar-striped': striped,
            'progress-bar-animated': animated,
        }
        return (
            <div className={classNames('progress', className)}>
                <div className={classNames(`bg-${color}`, bgClassName, {...progressBarClassName})}
                     role="progressbar" style={{width: `${width * 100}%`}} >
                    {children || null}
                </div>
            </div>
        );
    }
}

export default ProgressBar;
