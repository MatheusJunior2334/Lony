import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    const { name, lastName, email, password } = await req.json();

    if (!name || !lastName || !email || !password) {
        return NextResponse.json({ message: 'Preencha todos os campos' }, { status: 400 });
    }

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
    
        if (existingUser) {
            return NextResponse.json({ message: 'Usuário já existente. \n Escolha fazer o Login.' }, { status: 400 })
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                name,
                lastName,
                email,
                password: hashedPassword,
            }
        })

        const sessionUser = { id: newUser.id, name: newUser.name, lastName: newUser.lastName, email: newUser.email }

        return NextResponse.json(sessionUser, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: 'Error ao registrar usuário. \n Tente novamente mais tarde.', error }, { status: 500 })
    }
}