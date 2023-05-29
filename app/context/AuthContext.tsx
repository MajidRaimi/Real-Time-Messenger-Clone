'use client';

import { SessionProvider } from "next-auth/react";

interface AuthContextProps {
    children: React.ReactNode;
}

import React from 'react'

const AuthContext: React.FC<AuthContextProps> = ({
    children
}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthContext
