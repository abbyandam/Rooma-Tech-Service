import { defineHandler } from 'nitro/h3';
import { BrevoClient } from "@getbrevo/brevo";
import { useRuntimeConfig } from 'nitro/runtime-config';

export default defineHandler(async (event) => {
    const formData = await event.req.formData()

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const city = formData.get('city') as string
    const state = formData.get('state') as string
    const zipcode = formData.get('zipcode') as string
    const service = formData.get('service') as string
    const message = formData.get('message') as string
    const photos = formData.getAll('photos') as File[]

    const attachments = await Promise.all(photos.map(async (file) => {
        console.log(file.constructor.name, file instanceof File, file instanceof Blob);
        return {
            name: file.name,
            content: Buffer.from(await file.arrayBuffer()).toString('base64')
        }
    }))

    const client = new BrevoClient({
        apiKey: useRuntimeConfig().brevoApiKey,
    });

    // send email to client confirming form submission
    const client_response = await client.transactionalEmails.sendTransacEmail({
        to: [
            {
                email: email,
                name: name,
            },
        ],
        templateId: 1,
    });

    // send email to business alerting new submission
    const business_response = await client.transactionalEmails.sendTransacEmail({
        to: [
            {
                email: useRuntimeConfig().email,
                name: "Quote Form"
            },
        ],
        templateId: 2,
        params: {
            "NAME": name,
            "PHONE": phone,
            "EMAIL": email,
            "ADDRESS": address,
            "CITY": city,
            "STATE": state,
            "ZIPCODE": zipcode,
            "SERVICE": service,
            "MESSAGE": message
        },
        attachment: attachments
    });

    return {client_response: client_response, business_response: business_response};
})

