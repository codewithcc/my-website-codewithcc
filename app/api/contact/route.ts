import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const accessKey = process.env.W3_ACCESS_KEY;
  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: 'Server configuration error: Access key is missing.' },
      { status: 500 }
    );
  }
  formData.append('access_key', accessKey);

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while submitting the form.' },
      { status: 500 }
    );
  }
}