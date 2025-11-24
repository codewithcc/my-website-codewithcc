import { NextResponse } from 'next/server'
import { Resend } from "resend";

interface RequestBody {
    email: string;
    name: string;
    message: string;
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY

        if (!apiKey) {
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
        }

        const resend = new Resend(apiKey)
        const body: RequestBody = await req.json()

        const { email, name, message } = body;

        if (!email || !name || !message) {
            return NextResponse.json(
                { message: "Missing required fields: email, name, or message" },
                { status: 400 }
            )
        }

        const { data, error } = await resend.emails.send({
            from: 'support@codewithcc.com',
            to: ['codewithcc.dev@gmail.com'],
            replyTo: body.email,
            subject: `New Message from ${name}`,
            text: message,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        })

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ error: error.message }, { status: 500 })
        }

        return NextResponse.json({ success: true, data }, { status: 200 })

    } catch (e) {
        console.error("Unexpected Error:", e)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}