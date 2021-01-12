import PropTypes from "prop-types";

export const colorPropType = [
    'primary',
    'secondary',
    'success',
    'info',
    'danger',
    'warning',
    'light',
    'dark'
];

export const buttonColorPropType = [
    ...colorPropType,
    'outline-primary',
    'outline-secondary',
    'outline-success',
    'outline-danger',
    'outline-warning',
    'outline-info',
    'outline-dark',
    'outline-light',
];

export const textColorPropType = [
    ...colorPropType,
    'white',
    'muted',
];

export const propTypeAlert = {
    id: PropTypes.number,
    type: PropTypes.oneOf(colorPropType),
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
    message: PropTypes.string,
    context: PropTypes.string,
    count: PropTypes.number,
    canDismiss: PropTypes.bool,
    onDismiss: PropTypes.func,
}
