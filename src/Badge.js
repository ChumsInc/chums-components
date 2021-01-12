import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {colorPropType} from "./commonPropTypes";

export default class Badge extends Component {
    static propTypes = {
        type: PropTypes.oneOf(colorPropType),
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
        const {type, text, className, children, description} = this.props;
        const styleClassName = `bg-${type}`;

        const badgeClassNames = classNames('badge badge-pill', styleClassName, className);
        return (
            <span className={badgeClassNames}>
                {text || children || ''}
                {!!description && (<span className="visually-hidden">{description}</span>)}
            </span>
        )
    }
}


