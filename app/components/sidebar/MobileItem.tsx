'use client'

import Link from 'next/link';
import React from 'react'
import { IconType } from 'react-icons';
import classnames from 'classnames';

interface MobileItemProps {
    label: string;
    icon: IconType;
    active?: boolean;
    onClick?: () => void;
    href: string;
}


const MobileItem: React.FC<MobileItemProps> = ({
    label, icon: Icon, active, onClick, href
}) => {

    const handleClick = () => {
        if (onClick) return onClick();
    }

    return (
        <Link href={href} className={classnames('group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray hover:text-black hover:bg-gray-100', { 'bg-gray-100 text-black': active })} onClick={handleClick}>
            <Icon className='h-6 w-6' />
        </Link>
    )
}

export default MobileItem
