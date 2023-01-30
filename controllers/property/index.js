// Controller for getting property details, fetching properties of a particular category.

const connectToMongo = require("../../db");
const Gallery = require("../../models/Gallery");
const Property = require("../../models/Property");

const getProperties = async (req, res) => {
  if (req.method === "GET") {
    // Connection to mongodb
    connectToMongo();

    let success = false;
    try {
      const pid = req.query.id;
      const id = req.query.property;
      const category = req.query.category;

      if(id) {
        const property = await Property.findById(id);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }
        let properties = await Property.find({category: property.category, configuration: property.configuration, _id: {$ne: id}});
        for(let i=0; i<properties.length; i++) {
          const gallery = await Gallery.find({property: properties[i]._id.toString()});
          properties[i] = {...properties[i]._doc, gallery: gallery};
        }
        success = true;
        return res.status(200).json({success, properties});
      }

      // Checking if the user wants the details of a particular property
      if (pid) {
        const property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }
        const gallery = await Gallery.find({property: pid});
        success = true;
        return res.status(200).json({ success, property, gallery });
      }

      // Checking if the user wants the details of properties with valid categories
      if (category && ["resale", "rental"].indexOf(category) !== -1) {
        let properties = await Property.find({ category });
        for(let i=0; i<properties.length; i++) {
          const gallery = await Gallery.find({property: properties[i]._id.toString()});
          properties[i] = {...properties[i]._doc, gallery: gallery};
        }
        success = true;
        return res.status(200).json({ success, properties });
      }

      let properties = await Property.find();
      for(let i=0; i<properties.length; i++) {
        const gallery = await Gallery.find({property: properties[i]._id.toString()});
        properties[i] = {...properties[i]._doc, gallery: gallery};
      }
      success = true;
      return res.status(200).json({ success, properties });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = getProperties;
