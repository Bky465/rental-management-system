import fetchUser from "../../../middlewares/fetchUser";
import grantAccess from "../../../middlewares/grantAccess";
import Property from "../../../models/Property";
import { properties } from "../../../utils";

const handler = async (req, res)=> {
    if(req.method === "POST") {
        const userId = req.user.id;
        for (let property of properties) {
            await Property.create({...property, owner: userId});
        }
        return res.status(200).json({success: true});
    }
    else {
        return res.status(405).json({error: "Method not allowed!"});
    }
}

export default fetchUser(grantAccess("createOwn","property",handler));