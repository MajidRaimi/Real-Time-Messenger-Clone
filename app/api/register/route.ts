import bcrypt from "bcrypt";

import prisma from '@/app/libs/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request,
    response: Response
) {
    try {
        const body = await request.json();
        const { email, name, password } = body;

        if (!email || !name || !password) {
            return NextResponse.json({ message: "Please fill all the fields" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email, name, hashedPassword
            }
        })


        return NextResponse.json({
            message: 'Registration successful',
            user
        });
    } catch (error: any) {
        console.log(error, 'REGISTRATION_ERROR')
        return NextResponse.json({
            message: 'Registration failed',
        }, { status: 500 });
    }
}

