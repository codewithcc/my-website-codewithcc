import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const formData = await req.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: "Missing required fields: email and message.",
      },
      { status: 400 }
    )
  }

  const accessKey = process.env.W3_ACCESS_KEY
  if (!accessKey) {
    return NextResponse.json(
      { message: 'Server configuration error: Access key is missing.' },
      { status: 500 }
    )
  }
  formData.append('access_key', accessKey)

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await res.json()

    if (res.ok && data.success) {
      return NextResponse.json(data, { status: 200 })
    } else {
      return NextResponse.json(
        {
          message: data.message || "Web3Forms submission failed.",
        },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { message: 'An error occurred while submitting the form.' },
      { status: 500 }
    )
  }
}