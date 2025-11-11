import connectDB from "@/app/lib/mongoose"
import Project from "@/app/models/Project"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    try {
        await connectDB()
        const projects = await Project.find({ private: false }).sort({ createdAt: -1 })
        return NextResponse.json({ projects }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        await connectDB();
        const body = await req.json();
        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { message: "Provide valid params" },
                { status: 400 }
            )
        }
        const project = await Project.create(body)
        return NextResponse.json({ project }, { status: 201 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}