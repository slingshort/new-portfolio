const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a nodemailer transporter with your email provider details
  const transporter = nodemailer.createTransport({
    // Configure your email provider settings here
    service: 'Gmail',
    auth: {
      user: 'salina.myat@gmail.com',
      pass: 'Look2CsM',
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: 'your-email@gmail.com',
      to: 'salina.myat@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.sendStatus(200); // Email sent successfully
  } catch (error) {
    console.log('Error sending email:', error);
    res.sendStatus(500); // Error sending email
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
