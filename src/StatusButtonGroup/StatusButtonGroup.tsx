import React from 'react';
import classNames from "classnames";
import {StatusButtonGroupProps} from "./StatusButtonGroup.types";

const StatusButtonGroup = ({checked, enabledText, disabledText, onChange}: StatusButtonGroupProps) => {
    const btnEnabled = {
        'btn-success': checked,
        'btn-outline-success': !checked,
    };
    const btnDisabled = {
        'btn-danger': !checked,
        'btn-outline-danger': checked,
    };

    return (
        <div className="btn-group btn-group-sm" role="group">
            <button type="button" onClick={() => onChange(true)}
                    className={classNames('btn btn-sm', btnEnabled)}>
                {enabledText ?? 'Enabled'}
            </button>
            <button type="button" onClick={() => onChange(false)}
                    className={classNames('btn btn-sm', btnDisabled)}>
                {disabledText ?? 'Disabled'}
            </button>
        </div>
    )
};

export default StatusButtonGroup;
