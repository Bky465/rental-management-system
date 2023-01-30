const joi = require("joi");
const connectToMongo = require("../../db");

const User = require("../../models/User");

const schema = joi.object({
  name: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  email: joi.string().email().required().messages({
    "string.email": "Enter a valid email!",
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi
    .object()
    .keys({
      country_code: joi.string().required().messages({
        "string.required": "{#label} cannot be empty!",
      }),
      number: joi.number().required().messages({
        "number.required": "{#label} cannot be empty!",
      }),
    })
    .required()
    .messages({
      "object.required": "{#label} cannot be empty!",
    }),
  //   address: joi
  //     .object()
  //     .keys({
  //       house_no: joi.string().optional(),
  //       street: joi.string().optional(),
  //       city: joi.string().optional(),
  //       state: joi.string().optional(),
  //       pincode: joi.number().optional(),
  //     })
  //     .optional(),
  get_updates: joi.boolean().required().messages({
    "boolean.required": "{#label} cannot be empty!",
  }),
});

const editProfile = async (req, res) => {
  // Controller for editing the logged-in user details
  if (req.method === "PUT") {
    let success = false;
    try {
      const userId = req.user.id;
      //   const { name, email, mobile, get_updates, address } = req.body;
      const { name, email, mobile, get_updates } = req.body;

      // Validating req.body
      const { error } = schema.validate(req.body);
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking if user exists with the same email
      let user = await User.findOne({ email });
      if (user) {
        // Checking if the user found and the logged-in user are same
        if (user._id.toString() !== userId) {
          success = false;
          return res.status(403).json({
            success,
            error: "This email is associated to another account!",
          });
        }
      }

      // Checking if user exists with the same mobile number
      user = await User.findOne({ mobile });
      if (user) {
        // Checking if the user found and the logged-in user are same
        if (user._id.toString() !== userId) {
          success = false;
          return res.status(403).json({
            success,
            error: "This mobile number is associated to another account!",
          });
        }
      }

      // Updating the user details only if there are any changes in the values
      if (
        name !== user.name ||
        email !== user.email ||
        mobile.country_code !== user.mobile.country_code ||
        mobile.number !== user.mobile.number ||
        get_updates !== user.get_updates
        // address.house_no !== user.address.house_no ||
        // address.street !== user.address.street ||
        // address.city !== user.address.city ||
        // address.state !== user.address.state ||
        // address.pincode !== user.address.pincode
      ) {
        // console.log("Values changed!");
        // user = await User.findByIdAndUpdate(
        //   userId,
        //   { name, email, mobile, get_updates, address },
        //   { new: true }
        // ).select("-password");
        user = await User.findByIdAndUpdate(
          userId,
          { name, email, mobile, get_updates },
          { new: true }
        ).select("-password");
      } else {
        // console.log("No change!");
        user = await User.findById(user._id.toString()).select("-password");
      }
      success = true;
      return res.status(200).json({ success, user });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method Not allowed!" });
  }
};

module.exports = editProfile;
