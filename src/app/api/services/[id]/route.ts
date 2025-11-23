import Service from "@/models/Service"
import { NextResponse } from "next/server"
import mongoose from "mongoose"
import connectToDB from "@/lib/mongoose"

await connectToDB()

export async function GET(_req: Request, {params}: {params: Promise<{id: string}>}) {
    try {
        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const service = await Service.findById(id)
        if (!service || service.privacy === "Yes") {
            return NextResponse.json({message: 'Service not found or private'}, {status: 404})
        }

        return NextResponse.json({service})
    } catch (error) {
        console.error(error)
        return NextResponse.json({error}, {status: 500})
    }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const body = await req.json()

        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json({ message: "Provide valid params" }, { status: 400 })
        }

        const service = await Service.findByIdAndUpdate(id, body, { new: true })

        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 })
        }

        return NextResponse.json({ service }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const {id} = await params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return NextResponse.json({message: 'ID is not valid'}, {status: 400})
        }

        const service = await Service.findByIdAndDelete(id)
        if (!service) {
            return NextResponse.json({ message: "Service not found" }, { status: 404 })
        }

        return NextResponse.json({ service }, { status: 200 })
    } catch (e) {
        console.log(e)
        return NextResponse.json({ error: e }, { status: 500 })
    }
}