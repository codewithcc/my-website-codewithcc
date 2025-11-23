import Service from "@/models/Service"
import { NextResponse } from "next/server"
import connectToDB from "@/lib/mongoose"
import {getServerSession} from "next-auth";
import authOptions from "@/auth/auth";

await connectToDB()

export async function GET(_req: Request) {
    try {
        const services = await Service.find({}).sort({ createdAt: -1 })
        return NextResponse.json({ services }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return NextResponse.json({error: 'You are not logged in'}, {status: 401})
        }

        const body = await req.json()
        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json({ message: "Provide valid params" }, { status: 400 })
        }
        const service = await Service.create(body)
        return NextResponse.json({ service }, { status: 201 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}