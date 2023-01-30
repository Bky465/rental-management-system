import generatePasswordResetEmail from "../../../controllers/auth/generatePasswordResetMail";
import fetchUser from "../../../middlewares/fetchUser";

// API route for sending email to the logged-in user's email for resetting password
const handler = generatePasswordResetEmail;

export default fetchUser(handler);
