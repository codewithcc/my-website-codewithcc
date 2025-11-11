import connectDB from "@/app/lib/mongoose"
import Project from "@/app/models/Project"
import { NextResponse } from "next/server"
import mongoose from "mongoose"

export async function GET(req: Request, {params}: {params: Promise<{id: string}>}) {
    try {
        await connectDB()

        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const project = await Project.findById(id)
        if (!project || project.private == true) {
            return NextResponse.json({message: 'Project not found or private'}, {status: 404})
        }

        return NextResponse.json({project})
    } catch (error) {
        console.error(error)
        return NextResponse.json({error}, {status: 500})
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB()
        
        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const body = await req.json()
        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { message: "Provide valid params" },
                { status: 400 }
            )
        }

        const project = await Project.findByIdAndUpdate(id, body, { new: true })

        if (!project) {
            return NextResponse.json(
                { message: "Project not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ project }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectDB()
        
        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const project = await Project.findByIdAndDelete(id)
        if (!project) {
            return NextResponse.json(
                { message: "Project not found" },
                { status: 404 }
            )
        }

        return NextResponse.json({ project }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}