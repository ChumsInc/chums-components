import React from 'react';
import classNames from 'classnames';
import {v4 as uuid4} from 'uuid';

export interface FormCheckProps extends React.ComponentProps<"input"> {
    type: 'radio' | 'checkbox',
    id?: string,
    label: string,
    checked: boolean,
    inline?: boolean,
}

const FormCheck: React.FC<FormCheckProps> = ({
                                                 type = "checkbox",
                                                 id,
                                                 label,
                                                 checked,
                                                 onChange,
                                                 inline = false,
                                                 className,
                                                 disabled,
                                                 ...props
                                             }) => {
    const inputId = id || ('form-check-' + uuid4());

    return (
        <div className={classNames("form-check", className, {"form-check-inline": inline})}>
            <input type={type} className="form-check-input"
                   id={inputId} checked={checked} disabled={disabled}
                   onChange={onChange} {...props}/>
            <label className="form-check-label" htmlFor={inputId}>
                {label}
            </label>
        </div>
    )
};

export default FormCheck;
