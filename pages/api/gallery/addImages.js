import addImages from "../../../controllers/gallery/addImages";
import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";

const handler = addImages;

export default fetchUser(grantAccess("createOwn", "gallery", handler));

export const config = {
  api: {
    bodyParser: false,
  },
};
