import forgotPassword from "../../../controllers/auth/forgotPassword";

// API route for sending email to the requested email if a user exists with that email
// For un-authenticated users
const handler = forgotPassword;

export default handler;
