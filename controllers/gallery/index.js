const Gallery = require("../../models/Gallery");
const Property = require("../../models/Property");

const getGallery = async (req, res)=> {
    if(req.method === "GET") {
        let success = false;
        try {
            const pid = req.query.id;

            const property = await Property.findById(pid);
            if(!property) {
                success = false;
                return res.status(404).json({success, error: "Property does not exist!"});
            }

            const gallery = await Gallery.find({property: pid});
            success = true;
            return res.status(200).json({success, gallery});
        } catch (error) {
            success = false;
            return res.status(500).json({success, error: error.message});
        }
    } 
    else {
        return res.status(405).json({error: "Method not allowed!"});
    }
}

module.exports = getGallery;