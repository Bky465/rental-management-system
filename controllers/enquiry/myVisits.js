// Controller for fetching the user's visits to others' property

const Enquiry = require("../../models/Enquiry");
const Property = require("../../models/Property");
const User = require("../../models/User");

const myVisits = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);
      const visits = await Enquiry.find({ email: user.email })
        .populate("owner", "_id first_name middle_name last_name email mobile")
        .populate(
          "property",
          "_id address_line_1 address_line_2 city state pincode"
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

module.exports = myVisits;
