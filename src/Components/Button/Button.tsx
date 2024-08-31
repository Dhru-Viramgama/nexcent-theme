import { Spinner } from '@nextui-org/react';
import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean
    isLoading?: boolean
    size?: "sm" | "md" | "lg"
    [key: string]: any
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {
        children,
        className,
        onClick,
        disabled = false,
        isLoading = false,
        size = "sm",
        ...rest
    } = props;

    return (
        <button className={`${className} ${isLoading ? "loading" : ""}`} onClick={onClick} disabled={disabled || isLoading} {...rest}>
            {children}
            {isLoading &&
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" fill="none" stroke="currentColor" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
                        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur='1s' values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                    </circle>
                </svg>
            }
        </button>
    )
}

export default Button
