// Controller for fetching the others visits to user's property

const Property = require("../../models/Property");
const Enquiry = require("../../models/Enquiry");

const otherVisits = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;
      let visits = await Enquiry.find({ owner: userId }).populate(
        "property",
        "address_line_1 address_line_2 city state pincode"
      );

      success = true;
      return res.status(200).json({ success, visits });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = otherVisits;
