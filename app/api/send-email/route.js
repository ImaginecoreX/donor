import nodemailer from 'nodemailer';
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
import { NextResponse } from 'next/server';

export async function POST (request) {


    const emailData = await request.json();

      const oauth2Client = new OAuth2(
        '870284985778-gphacdg741uboloh096gidrmb4vo4huq.apps.googleusercontent.com',//Client ID
        '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',//Client Secret
        'https://developers.google.com/oauthplayground',// Redirect URL for testing
      );
  

      oauth2Client.setCredentials({
        refresh_token:'1//04pDzPdlkfowqCgYIARAAGAQSNwF-L9Ir9d5oCE9ujkCQCsESJIVlAL-YMlwAXJ2Wnu692IFOyVsTEaElowc_2WVV-D-tvRn6Xdw',
      });
  
      const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
          type: 'OAuth2',
          user: 'nethminas42@gmail.com',
          clientId:'870284985778-gphacdg741uboloh096gidrmb4vo4huq.apps.googleusercontent.com',
          clientSecret:'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',
          refreshToken:'1//04pDzPdlkfowqCgYIARAAGAQSNwF-L9Ir9d5oCE9ujkCQCsESJIVlAL-YMlwAXJ2Wnu692IFOyVsTEaElowc_2WVV-D-tvRn6Xdw',
          accessToken: oauth2Client.getAccessToken(),
        },
      });


  
      try {
        // Send mail with defined transport object
        await transporter.sendMail({
          from:'nethminas42@gmail.com',
          to:emailData.to,
          subject:emailData.subject,
          text:emailData.text,
        });
        
  
        return NextResponse.json({ "msg":"sucess", "data":emailData })
        
      } catch (error) {
        console.log('Error sending email:', error);
        return NextResponse.json({ "msg":"Error Sending Email" , "data":emailData });

      }


}
