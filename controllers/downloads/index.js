import joi from "joi";
import Download from "../../models/Download";

const schema = joi.object({
  name: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi
    .string()
    .required()
    .messages({
      "string.required": "{#label} cannot be empty!",
    }),
  action: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  propertyId: joi.string().length(24).required().messages({
    "string.length": "Invalid {#label}!",
    "string.required": "{#label} cannot be empty!",
  }),
});

const downloadFile = async (req, res) => {
  if (req.method === "POST") {
    let success = false;
    try {
      const { name, email, mobile, action, propertyId } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      await Download.create({
        name,
        email,
        mobile,
        action,
        property: propertyId
      });

      success = true;
      return res.status(200).json({success});
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = downloadFile;
