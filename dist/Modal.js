import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useEffect, useState } from "react";
import classNames from "classnames";
import { noop } from "./utils";
const Modal = ({ title, size = 'md', header, footer, canClose = true, scrollable, centered, staticBackdrop, dialogClassName, visible = true, onClose = noop, children, }) => {
    const modalRef = createRef();
    let fadeTimer = 0;
    const [showModal, setShowModal] = useState(false);
    const [display, setDisplay] = useState(visible ? 'block' : 'none');
    useEffect(() => {
        if (visible) {
            delayShowingModal();
        }
        else {
            delayClose();
        }
    }, [visible]);
    const showBackdrop = (state) => {
        document.querySelector('.modal-backdrop')?.classList.toggle('show', state);
    };
    const closeHandler = (ev) => {
        if (!canClose) {
            return;
        }
        if (ev) {
            ev.preventDefault();
        }
        delayClose();
    };
    const onClickBackdrop = (ev) => {
        const target = ev.target;
        if (!staticBackdrop && target && target.classList.contains('modal')) {
            closeHandler();
        }
    };
    const onEscape = (ev) => {
        if (ev.key === 'Escape') {
            closeHandler();
        }
    };
    const delayShowingModal = () => {
        setDisplay('block');
        document.querySelectorAll('body').forEach(body => {
            body.classList.toggle('modal-open', true);
            const div = document.createElement('div');
            div.className = 'modal-backdrop fade';
            body.appendChild(div);
        });
        clearTimeout(fadeTimer);
        fadeTimer = window.setTimeout(() => {
            showBackdrop(true);
            setShowModal(true);
        }, 300);
    };
    const delayClose = () => {
        clearTimeout(fadeTimer);
        setShowModal(false);
        showBackdrop(false);
        fadeTimer = window.setTimeout(() => {
            document.querySelector('.modal-backdrop')?.remove();
            document.querySelector('body')?.classList.toggle('modal-open', false);
            setDisplay('none');
            onClose();
        }, 300);
    };
    useEffect(() => {
        return () => {
            clearTimeout(fadeTimer);
            document.querySelector('body')?.classList.toggle('modal-open', false);
            document.querySelector('.modal-backdrop')?.remove();
        };
    }, []);
    useEffect(() => {
        if (showModal) {
            modalRef.current?.focus();
        }
    }, [showModal]);
    const className = {
        'modal-dialog-scrollable': scrollable,
        'modal-dialog-centered': centered,
    };
    return (_jsx("div", { className: classNames("modal fade", { show: showModal }), tabIndex: -1, ref: modalRef, style: { display: display }, onClick: onClickBackdrop, onKeyDown: onEscape, children: _jsx("div", { className: classNames("modal-dialog", `modal-${size}`, className, dialogClassName), children: _jsxs("div", { className: "modal-content", children: [!!header && header, !header && (!!title || canClose) && (_jsxs("div", { className: "modal-header", children: [_jsx("h5", { className: "modal-title", children: title || 'Modal Title' }), canClose && (_jsx("button", { type: "button", className: "btn-close", onClick: closeHandler, "aria-label": "Close" }))] })), _jsx("div", { className: "modal-body", children: children || 'modal body goes here' }), !!footer && footer] }) }) }));
};
export default Modal;
//# sourceMappingURL=Modal.js.map