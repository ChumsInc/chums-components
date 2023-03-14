import React, {useId} from 'react';
import classNames from 'classnames';

export interface FormCheckProps extends React.ComponentProps<"input"> {
    type: 'radio' | 'checkbox';
    id?: string;
    label?: string;
    checked: boolean;
    inline?: boolean;
    children?: React.ReactNode;
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
                                                 title,
                                                 children,
                                                 ...props
                                             }) => {
    const inputId = id || useId();
    return (
        <div className={classNames("form-check", className, {"form-check-inline": inline})}>
            <input type={type} className="form-check-input"
                   id={inputId} checked={checked} disabled={disabled}
                   title={title}
                   onChange={onChange} {...props}/>
            <label className="form-check-label" htmlFor={inputId} title={title}>
                {children ?? label ?? 'Label Missing'}
            </label>
        </div>
    )
};

export default FormCheck;
