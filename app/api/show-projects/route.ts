import connectToDB from "@/app/lib/mongoose"
import Project from "@/app/models/Project"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        await connectToDB()
        const projects = await Project.find({ $and: [{ show: true }, { private: false }] }).sort({ createdAt: 1 })
        return NextResponse.json({ projects }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}