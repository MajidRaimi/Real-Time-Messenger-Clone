'use client';
import React from 'react'

import { useRoutes, useConversation } from '@/app/hooks';
import MobileItem from './MobileItem';

const MobileFooter = () => {

    const routes = useRoutes();
    const { isOpen } = useConversation();

    if (isOpen) return null;

   

    return (
        <div className='fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden'>
            {routes.map((item) => (<MobileItem
                key={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
                href={item.href}
            />))}
        </div>
    )
}

export default MobileFooter
