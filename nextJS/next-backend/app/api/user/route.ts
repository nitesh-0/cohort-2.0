import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest){

    const firstUser = await prisma.user.findFirst()

    console.log(firstUser)

    return NextResponse.json({
        email: firstUser?.email
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()

    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get("name"))

    const userExists = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if(userExists){
        return NextResponse.json({
            msg: "user already exists"
        })
    }

    try{
        const newUser = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        })

        return NextResponse.json({
            newUser
        })
    }
    catch(e){
        return NextResponse.json({
            msg: "Error signing up",
            error: e
        })
    }

    

}
