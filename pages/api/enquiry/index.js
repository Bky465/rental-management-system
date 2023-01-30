import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const allVisits = require("../../../controllers/enquiry");

const handler = allVisits;

export default fetchUser(grantAccess("readAny", "visit", handler));
