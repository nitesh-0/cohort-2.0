import { PrismaClient } from "@/app/generated/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient({} as any)

export function GET(req: NextRequest){
    return NextResponse.json({
        name: "Harkirat Signh",
        email: "harkirat@gmail.com"

    })
}

export async function POST(req: NextRequest){
    const body = await req.json()

    console.log(body.username)
    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get("name"))

    const newUser = await prisma.user.create({
        data: {
            email: body.username,
            password: body.password
        }
    })

    return NextResponse.json({
        newUser
    })

}
