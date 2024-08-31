import React from 'react'

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M20 6L4 6"
                stroke="currentcolor"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                d="M20 12L4 12"
                stroke="currentcolor"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
            <path
                d="M15 18H4"
                stroke="currentcolor"
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default MenuIcon
