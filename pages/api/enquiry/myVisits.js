import myVisits from "../../../controllers/enquiry/myVisits";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = myVisits;

export default fetchUser(grantAccess("readOwn", "visit", handler));
