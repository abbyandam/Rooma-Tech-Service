import { defineHandler } from 'nitro/h3';
import { BrevoClient } from "@getbrevo/brevo";
import { useRuntimeConfig } from 'nitro/runtime-config';

export default defineHandler(async (event) => {
    console.log("hi");
    const formData = await event.req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string

    const client = new BrevoClient({
        apiKey: useRuntimeConfig().brevoApiKey,
    });

    
    const response = await client.transactionalEmails.sendTransacEmail({
        htmlContent: "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>",
        sender: {
            email: "abbyandam@gmail.com",
            name: "Abby Andam from Rooma Tech",
        },
        subject: "Hello Abby!",
        to: [
            {
                email: email,
                name: name,
            },
        ],
    });

    return response;
})

