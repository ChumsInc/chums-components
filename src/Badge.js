import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {colorPropType} from "./commonPropTypes";

export default class Badge extends Component {
    static propTypes = {
        color: PropTypes.oneOf([...colorPropType]),
        pill: PropTypes.bool,
        text: PropTypes.string,
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        description: PropTypes.string,

    }
    static defaultProps = {
        type: 'primary',
        text: null,
        className: '',
        description: '',
    }

    render() {
        const {color, pill, text, className, children, description} = this.props;
        const styleClassName = `bg-${color}`;

        const badgeClassNames = classNames('badge', {'badge-pill': pill}, styleClassName, className);
        return (
            <span className={badgeClassNames}>
                {text || children || ''}
                {!!description && (<span className="visually-hidden">{description}</span>)}
            </span>
        )
    }
}


