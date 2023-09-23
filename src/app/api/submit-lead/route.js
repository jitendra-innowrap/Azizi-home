import { NextResponse } from "next/server"



export async function POST(request) {
    const data = await request.json()
    try {
        const res = await fetch('https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8E000000IEka', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        })
        const d = JSON.stringify(data)
        console.log(d)
        if (res.ok) {
            // Successful submission
            console.log(res)
            return NextResponse.json({ message: 'Lead submitted successfully', data });
        } else {
            // Handle errors
            return NextResponse.json({ message: 'Failed to submit lead' });
        }
    } catch (error) {
        // Handle network or other errors
        return NextResponse.json({ message: 'An error occurred' });
    }
}