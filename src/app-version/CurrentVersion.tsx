import {useVersion} from "./useVersion";
import {type HTMLAttributes} from "react";
import {Button, type ButtonProps, Spinner, type SpinnerProps} from "react-bootstrap";

export interface CurrentVersionProps extends ButtonProps {
    versionContainerProps?: HTMLAttributes<HTMLSpanElement>;
    spinnerProps?: SpinnerProps;
}

export default function CurrentVersion({versionContainerProps, spinnerProps, ...alertProps}: CurrentVersionProps) {
    const {version, status, onClick, hasUpdate} = useVersion();

    return (
        <Button variant={hasUpdate ? 'warning' : 'link'} className="d-flex" onClick={onClick}
                aria-description="check for updates"
                style={{cursor: 'pointer'}} {...alertProps}>
            <div className="d-flex gap-2 align-items-center">
                <span className="bi-info-circle"/>
                <span>Version:</span>
                <span {...versionContainerProps}>{version ?? (status === 'loading' ? 'loading' : 'unknown')}</span>
                {status === 'loading' && <Spinner animation="border" size="sm" className="ms-2" {...spinnerProps}/>}
            </div>
        </Button>
    )
}
