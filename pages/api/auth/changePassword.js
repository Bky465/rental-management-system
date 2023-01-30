import changePassword from "../../../controllers/auth/changePassword";

// API route for changing the password after clicking the link received via email
// For un-authenticated users
const handler = changePassword;

export default handler;
