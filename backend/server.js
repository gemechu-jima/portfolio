import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors"

dotenv.config(); 

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors())
const ke="aeqa ismc yrtm pvij"
app.get("/", (req, res)=>{
  res.json({message:"Server is running"})
})
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from:email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission Test",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n Phone number: ${phone}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});



