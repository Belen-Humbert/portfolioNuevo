import { Resend } from "resend";


export async function POST(req) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",  
      to: "belenhumbert69@gmail.com",   
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      replyTo: email, 
    });

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
