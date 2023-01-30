import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const addDp = require("../../../controllers/auth/addDp");

const handler = addDp;

export default fetchUser(grantAccess("updateOwn", "profile", handler));
