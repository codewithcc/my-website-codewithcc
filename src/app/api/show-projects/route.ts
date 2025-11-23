import connectToDB from "@/lib/mongoose"
import Project from "@/models/Project"
import { NextResponse } from "next/server"

await connectToDB()

export async function GET(_req: Request) {
    try {
        const projects = await Project.find({ $and: [{ show: "Yes" }, { privacy: "No" }] }).sort({ createdAt: 1 })
        return NextResponse.json({ projects }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}