import { defineHandler } from 'nitro/h3';
import { BrevoClient } from "@getbrevo/brevo";
import { useRuntimeConfig } from 'nitro/runtime-config';

export default defineHandler(async (event) => {
    console.log("hi");
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
        }
    });

    return {client_response: client_response, business_response: business_response};
})

