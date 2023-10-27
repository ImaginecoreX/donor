
import { NextResponse,NextRequest } from "next/server";
 
import { cookies } from 'next/headers'

export async function POST(request){

    const {email,password} = await request.json();



    cookies().set("email", email, { secure: true });
    cookies().set("password", password, { secure: true });

  

    return NextResponse.json({ "msg":"sucess" })

    // return NextResponse.json({ email:email,password:password })

}