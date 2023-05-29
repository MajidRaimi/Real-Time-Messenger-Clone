'use client'

import classnames from 'classnames';


interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

import React from 'react'

const Button: React.FC<ButtonProps> = ({
    type, fullWidth, children, onClick, secondary, danger, disabled
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={classnames('btn btn-primary', { 'btn-secondary': secondary, 'btn-error text-white': danger, 'loading': disabled, 'w-full': fullWidth })}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
