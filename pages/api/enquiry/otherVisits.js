import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";
const otherVisits = require("../../../controllers/enquiry/otherVisits");

const handler = otherVisits;

export default fetchUser(grantAccess("readOwn", "visit", handler));
