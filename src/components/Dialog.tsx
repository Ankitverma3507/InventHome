// Dialog.tsx
import React, { ReactNode } from 'react';
// import './Dialog.css'; // Assuming you will create some basic styles

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-overlay mb-64">
            <div className="dialog-content">
                <button className="dialog-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default Dialog;
