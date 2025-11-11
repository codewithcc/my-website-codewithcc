import connectToDB from "@/app/lib/mongoose"
import Service from "@/app/models/Service"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        await connectToDB()
        const services = await Service.find({ $and: [{ show: true }, { private: false }] }).sort({ createdAt: 1 })
        return NextResponse.json({ services }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}