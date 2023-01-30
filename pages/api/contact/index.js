import { sendEmail } from "../../../services/email";

const adminEmail = "enquiry@investayrealty.com";

const handler = async (req, res)=> {
    if(req.method === "POST") {
        const {name, email, mobile, message} = req.body;
        await sendEmail({
            subject: "Welcome to Investay! This OTP is valid for 5 minutes only!",
            // text: `Contacted by user!`,
            text: `Name: ${name}, email: ${email}, mobile:${mobile}, message:${message}`,
            // html: `<div><p>USER ID: ${user.userId}</p><a href="${url}/signup/change-password?token=${token._id.toString()}">Set Password</a></div>`,
            email: adminEmail,
          });

          return res.status(200).json({success: true})
    }
    else {
        return res.status(405).json({error: "Method not allowed!"});
    }
}

export default handler;