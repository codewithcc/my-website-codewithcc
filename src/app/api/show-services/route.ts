import connectToDB from "@/lib/mongoose"
import Service from "@/models/Service"
import { NextResponse } from "next/server"

await connectToDB()

export async function GET(_req: Request) {
    try {
        const services = await Service.find({ $and: [{ show: "Yes" }, { privacy: "No" }] }).sort({ createdAt: 1 })
        return NextResponse.json({ services }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}