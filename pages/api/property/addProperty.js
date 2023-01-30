import addProperty from "../../../controllers/property/addProperty";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = addProperty;

export default fetchUser(grantAccess("createOwn", "property", handler));
