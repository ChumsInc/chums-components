import React from 'react';
import classNames from 'classnames';
import {v4 as uuid4} from 'uuid';

export interface FormCheckProps extends React.HTMLAttributes<HTMLInputElement> {
    id?: string,
    label: string,
    checked: boolean,
    inline?: boolean,
    type: 'radio' | 'checkbox',
}

const FormCheck: React.FC<FormCheckProps> = ({
                                                 id,
                                                 label,
                                                 checked,
                                                 onChange,
                                                 inline = false,
                                                 className,
                                                 type = "checkbox",
                                                 ...props
                                             }) => {
    const inputId = id || ('form-check-' + uuid4());

    return (
        <div className={classNames("form-check", className, {"form-check-inline": inline})}>
            <input type={type} className="form-check-input"
                   id={inputId} checked={checked}
                   onChange={onChange} {...props}/>
            <label className="form-check-label" htmlFor={inputId}>
                {label}
            </label>
        </div>
    )
};

export default FormCheck;
