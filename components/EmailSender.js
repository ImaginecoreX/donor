'use client'
import React from 'react';
import axios from 'axios';


const sendEmail = async (emailData)=>{
    
  await axios.post('http://localhost:3000/api/send-email', emailData).then((res)=>{
    console.log(res.data);
  }).catch((err)=>{
    console.log('Error sending email',err);
  });

}

const EmailSender = () => {

  

    const handleSendEmail = ()=>{
      const emailData = {
        to:'nethminasandaruwan74@gmail.com',
        subject:'Test',
        text:'This is a test email sent using Nodemailer with Gmail and OAuth2.',
      }

      sendEmail(emailData);
    }

  return (
    <div>
      <button onClick={handleSendEmail}>Sent</button>
    </div>
  )
}

export default EmailSender