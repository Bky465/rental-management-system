// Controller for fetching all visits. ONLY for ADMIN.

const Enquiry = require("../../models/Enquiry");

const allVisits = async (req, res) => {
  if (req.method === "GET") {
    let success = false;
    try {
      const visits = await Enquiry.find().sort("-createdAt");

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

module.exports = allVisits;
