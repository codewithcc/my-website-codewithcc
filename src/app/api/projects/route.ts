import Project from "@/models/Project"
import { NextResponse } from "next/server"
import connectToDB from "@/lib/mongoose"

await connectToDB()

export async function GET(_req: Request) {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 })
        return NextResponse.json({ projects }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
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