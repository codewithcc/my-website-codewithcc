import connectDB from "@/app/lib/mongoose"
import Service from "@/app/models/Service"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        await connectDB()
        const services = await Service.find({ private: false }).sort({ createdAt: -1 })
        return NextResponse.json({ services }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        await connectDB()
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