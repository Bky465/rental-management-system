import resetPassword from "../../../controllers/auth/resetPassword";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

// API route for resetting the password of the logged-in user after clicking the
// link received via email
const handler = resetPassword;

export default handler;
