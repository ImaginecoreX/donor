import React, { useEffect, useState } from 'react';
import nodemailer from 'nodemailer';
import {google} from 'googleapis';
import {OAuth2} from 'google-auth-library';

const EmailForm = ({to, subject, text, btnText, btnStyles}) => {


  const [emailData, setEmailData] = useState({
    to: '',
    subject:'',
    text:'',
  });

  const sendEmail = async ()=>{

    const oauth2Client = new OAuth2(
      '870284985778-se2a1clr0e2k880rtjso63vtpmco5t9j.apps.googleusercontent.com',//Client ID
      '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',//Client Secret
      'https://developers.google.com/oauthplayground',// Redirect URL for testing
    );

    oauth2Client.setCredentials({
      refresh_token:'1//04QWP_jfPvo-mCgYIARAAGAQSNwF-L9IrWabbVFsd8zrkp3akhYb6mnkELps3EqUgj-VZ342NyXyH-owF2UigtBGNYH1emUBYW50',
    });

    const transporter = nodemailer.createTransport({
      service:'Gmail',
      auth:{
        type: 'OAuth2',
        user: 'icx-gmail-provider@imaginecorex-cloud-hub.iam.gserviceaccount.com',
        clientId:'870284985778-se2a1clr0e2k880rtjso63vtpmco5t9j.apps.googleusercontent.com',
        clientSecret:'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',
        refreshToken:'1//04QWP_jfPvo-mCgYIARAAGAQSNwF-L9IrWabbVFsd8zrkp3akhYb6mnkELps3EqUgj-VZ342NyXyH-owF2UigtBGNYH1emUBYW50',
        accessToken: oauth2Client.getAccessToken(),
      },
    });

    try {
      // Send mail with defined transport object
      await transporter.sendMail({
        from:'icx-gmail-provider@imaginecorex-cloud-hub.iam.gserviceaccount.com',
        to:emailData.to,
        subject:emailData.subject,
        text:emailData.text
      });
      

      console.log('Email sent');
    } catch (error) {
      console.log('Error sending email:', error);
    }
  };

  const handleChange = ()=>{

    setEmailData({
    to: to,
    subject:subject,
    text:text,
    });

  }

  useEffect(()=>{handleChange},[to,subject,text]);


  return (
    <>
    <button onClick={sendEmail} className={`${btnStyles}`}>{btnText}</button>
    </>
  )

}

export default EmailForm;