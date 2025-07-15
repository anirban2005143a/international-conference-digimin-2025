import { NextResponse } from "next/server";
import { sendMail } from "./sendmail";

export async function POST(request) {

    try {
        const data = await request.json()
        console.log(process.env.SEND_MAIL_TO.split(","))
        await sendMail( process.env.SEND_MAIL_TO.split(","), data.formData )
        
        return new NextResponse(JSON.stringify({ msg: "Mail send successfully" }), {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ msg: error.message || "Some error occured" }), {
            status: 500
        })
    }
}