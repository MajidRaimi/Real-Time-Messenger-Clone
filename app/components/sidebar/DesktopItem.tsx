'use client'
import React from 'react'
import Link from 'next/link'
import { IconType } from 'react-icons';
import classnames from 'classnames';

interface DeskTopItemProps {
    label: string;
    icon: IconType;
    href: string;
    active?: boolean;
    onClick?: () => void;
}


const DesktopItem: React.FC<DeskTopItemProps> = ({
    label, icon: Icon, href, active, onClick
}) => {

    const handleClick = () => {
        if (onClick) return onClick();
    }

    return (
        <li onClick={handleClick}>
            <Link href={href} className={classnames('group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100', { 'bg-gray-100 text-black': active })}>
                <Icon className='h-6 w-6 shrink-0' />
                <span className='sr-only'>{label}</span>
            </Link>
        </li >
    )
}

export default DesktopItem
