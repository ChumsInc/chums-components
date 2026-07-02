import {useVersion} from "./useVersion";
import {Toast, ToastContainer} from "react-bootstrap";
import {startTransition, useEffect, useState} from "react";


export default function VersionUpdateToast() {
    const {hasUpdate} = useVersion();
    const [show, setShow] = useState(false);

    useEffect(() => {
        startTransition(() => {
            if (hasUpdate) {
                setShow(true);
            }
        })
    }, [hasUpdate]);

    const closeHandler = () => {
        setShow(false);
    }

    const nextVersion = typeof hasUpdate === 'string' ? hasUpdate : null;

    return (
        <ToastContainer position="bottom-end">
            <Toast show={show} onClose={closeHandler} bg="warning" className="text-dark">
                <Toast.Header closeButton>
                    <strong className="me-auto">
                        Update Available
                    </strong>
                </Toast.Header>
                <Toast.Body>
                    <span className="me-2">
                        {`Version ${nextVersion} is available.`}
                    </span>
                    <span>Please refresh the page to update.</span>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
