import { json } from '@sveltejs/kit';
import {
	AMZ_REGION,
	AMZ_ACCESS_KEY_ID,
	AMZ_SECRET_ACCESS_KEY,
	AMZ_SENDER_EMAIL,
	AMZ_RECIPIENT_EMAIL,
	AMZ_CC_EMAIL
} from '$env/static/private';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import type { RequestEvent } from '../../$types';

//Configure AWS SES client
const region = AMZ_REGION || 'eu-central-1';
let sesClient: SESClient | undefined;

try {
	sesClient = new SESClient({ region });
	if (AMZ_ACCESS_KEY_ID && AMZ_SECRET_ACCESS_KEY) {
		console.log('Using env credentials');
		sesClient = new SESClient({
			region,
			credentials: {
				accessKeyId: AMZ_ACCESS_KEY_ID as string,
				secretAccessKey: AMZ_SECRET_ACCESS_KEY as string
			}
		});
	} else {
		console.log('Using IAM role-based authentication');
	}
} catch (error) {
	console.error('Failed to initialize SES client:', error);
}

export async function POST({ request }: RequestEvent) {
	try {
		// Check if SES client is configured
		if (!sesClient) {
			return json(
				{
					success: false,
					message: 'E-Mail-Service ist nicht konfiguriert. Bitte kontaktieren Sie uns direkt.'
				},
				{ status: 500 }
			);
		}

		const formData = await request.formData();
		const name = (formData.get('name') as string)?.trim();
		const street = (formData.get('street') as string)?.trim();
		const zip = (formData.get('zip') as string)?.trim();
		const state = (formData.get('state') as string)?.trim();
		const city = (formData.get('city') as string)?.trim();
		const email = (formData.get('email') as string)?.trim();
		const phone = (formData.get('phone') as string)?.trim();
		const honeypot = formData.get('website');

		if (honeypot) {
			return json({ success: true });
		}

		if (!name || !street || !city || !zip || !state || !email || !phone) {
			return json(
				{ success: false, message: 'All fields marked with an * are required.' },
				{ status: 400 }
			);
		}

		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if (!emailRegex.test(email)) {
			return json(
				{ success: false, message: 'Please enter a valid email address' },
				{ status: 400 }
			);
		}

		const emailParams = {
			Source: (AMZ_SENDER_EMAIL as string) || 'noreply@activate-your-business.com',
			Destination: {
				ToAddresses: [(AMZ_RECIPIENT_EMAIL as string) || 'info@miha-bodytec.us'],
				CcAddresses: [(AMZ_CC_EMAIL as string) || 'leads@miha-bodytec.de']
			},
			ReplyToAddresses: [email],
			Message: {
				Subject: {
					Data: 'New Activate Your Business Inquiry',
					Charset: 'UTF-8'
				},
				Body: {
					Text: {
						Data: `
Name: ${name}
Address: ${street}, ${city}, ${zip}, ${state}
Email: ${email}
Phone: ${phone}
                
You have received a new inquiry from activate-your-business.com.
                    `,
						Charset: 'UTF-8'
					},
					Html: {
						Data: `
<h3>New Inquiry from activate-your-business.co.uk</h3>
<hr style="width:50%;text-align:left;margin-left:0">
<p><strong>Name:</strong> ${name}</p>
<p><strong>Street:</strong> ${street}</p>
<p><strong>City:</strong> ${city}</p>
<p><strong>ZIP:</strong> ${zip}</p>
<p><strong>State:</strong> ${state}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Email:</strong> ${email}</p>
                `,
						Charset: 'UTF-8'
					}
				}
			}
		};

		const sendCommand = new SendEmailCommand(emailParams);
		await sesClient.send(sendCommand);
		return json({ success: true, message: 'Success! We have received your request.' });
	} catch (error) {
		console.error('Error sending email:', error);
		return json(
			{
				success: false,
				message: 'Something went wrong. Please try again later.'
			},
			{ status: 500 }
		);
	}
}
