import { NextRequest, NextResponse } from 'next/server';
import * as brevo from '@getbrevo/brevo';

interface BrevoError {
  status?: number;
  message?: string;
  response?: {
    data?: unknown;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, title, organization, email } = body;

    // Validate required fields
    if (!name || !title || !organization || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Brevo API key is configured
    if (!process.env.BREVO_API_KEY) {
      console.error('BREVO_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    console.log('Brevo API Key configured:', process.env.BREVO_API_KEY ? 'Yes' : 'No');
    console.log('API Key length:', process.env.BREVO_API_KEY?.length);

    // Initialize Brevo API client
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #3399FF; padding-bottom: 10px;">
          NDA Request - AGV Protocol
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #3399FF; margin-top: 0;">Requestor Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #3399FF; margin-top: 0;">Request Details</h3>
          <p style="margin: 0; color: #666; font-size: 14px;">
            <strong>Request Type:</strong> Non-Disclosure Agreement (NDA)
          </p>
          <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString()}
          </p>
        </div>

        <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
          <h4 style="color: #856404; margin-top: 0;">Next Steps</h4>
          <p style="margin: 0; color: #856404; font-size: 14px;">
            Please review this NDA request and send the appropriate NDA document to the requestor at <strong>${email}</strong>.
          </p>
        </div>
      </div>
    `;

    const textContent = `
      NDA Request - AGV Protocol
      
      Requestor Information:
      Name: ${name}
      Title: ${title}
      Organization: ${organization}
      Email: ${email}
      
      Request Details:
      Request Type: Non-Disclosure Agreement (NDA)
      Submitted: ${new Date().toLocaleString()}
      
      Next Steps:
      Please review this NDA request and send the appropriate NDA document to the requestor at ${email}.
    `;

    // Create email data
    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `NDA Request from ${name} (${organization})`;
    sendSmtpEmail.htmlContent = emailContent;
    sendSmtpEmail.textContent = textContent;
    sendSmtpEmail.sender = { 
      name: "AGV Protocol", 
      email: "noreply@agvprotocol.org" 
    };
    sendSmtpEmail.to = [
      { 
        email: "ir@agvprotocol.org", 
        name: "AGV Protocol IR" 
      },
    ];
    sendSmtpEmail.cc = [
      { 
        email: "contact@agvprotocol.org", 
        name: "AGV Protocol Contact" 
      }
    ];
    sendSmtpEmail.replyTo = { 
      email: email, 
      name: `${name}` 
    };

    // Send email using Brevo
    try {
      await apiInstance.sendTransacEmail(sendSmtpEmail);
      console.log('NDA request email sent successfully');
    } catch (brevoError: unknown) {
      console.error('Brevo API error:', brevoError);
      
      // Type-safe error handling
      if (brevoError && typeof brevoError === 'object' && 'status' in brevoError) {
        const error = brevoError as BrevoError;
        console.error('Brevo error details:', {
          status: error.status,
          message: error.message,
          response: error.response?.data
        });
      }
      
      // Return error if email sending fails
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'NDA request submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending NDA request email:', error);
    return NextResponse.json(
      { error: 'Failed to submit NDA request' },
      { status: 500 }
    );
  }
}
