const joi = require("joi");
const connectToMongo = require("../../db");
const Token = require("../../models/Token");

const schema = joi.object({
  prefix: joi.string().optional().valid("Mr.", "Mrs.", "Miss", ""),
  firstName: joi.string().min(4).required().messages({
    "string.min": "{#label} must be minimum 6 characters long!",
    "string.required": "{#label} cannot be empty!",
  }),
  middleName: joi.string().optional().allow(""),
  lastName: joi.string().optional().allow(""),
  email: joi.string().email().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  mobile: joi
  .number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  dob: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  nationality: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  city: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  address: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  state: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
  pincode: joi.number().required().messages({
    "number.required": "{#label} cannot be empty!",
  }),
  country: joi.string().required().messages({
    "string.required": "{#label} cannot be empty!",
  }),
});

const User = require("../../models/User");
const { sendEmail } = require("../../services/email");
const { sendSms } = require("../../services/mobile");

// Controller for registering a new user
const register = async (req, res) => {
  if (req.method === "POST") {
    // Connection to mongodb
    await connectToMongo();

    let success = false;
    try {
      let {
        prefix,
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
      } = req.body;

      if (middleName?.replace(/\s/, "").trim() === "") {
        middleName = "";
      }

      if (lastName?.replace(/\s/, "").trim() === "") {
        lastName = "";
      }

      if (prefix?.replace(/\s/, "").trim() === "") {
        prefix = "";
      }

      // Validating req.body
      const { error } = schema.validate({
        prefix,
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
      });
      if (error) {
        success = false;
        return res
          .status(422)
          .json({ success, error: error.details[0].message });
      }

      // Checking if user exists with the same email
      let user = await User.findOne({ email });
      if (user) {
        success = false;
        return res.status(403).json({
          success,
          error: "This email is associated to another account!",
        });
      }

      // Checking if user exists with the same mobile number
      user = await User.findOne({ mobile });
      if (user) {
        success = false;
        return res.status(403).json({
          success,
          error: "This mobile number is associated to another account!",
        });
      }

      let name = "";

      if (
        middleName &&
        middleName.replace(/\s/, "").trim() !== "" &&
        lastName &&
        lastName.replace(/\s/, "").trim() !== ""
      ) {
        name = firstName + middleName + lastName;
      } else {
        name = firstName;
      }

      if (middleName && middleName.replace(/\s/, "").trim() !== "") {
        name = firstName + middleName;
      }

      if (lastName && lastName.replace(/\s/, "").trim() !== "") {
        name = firstName + lastName;
      }

      if (
        middleName &&
        middleName.replace(/\s/, "").trim() !== "" &&
        lastName &&
        lastName.replace(/\s/, "").trim() !== ""
      ) {
        name = firstName + middleName + lastName;
      }

      if (!middleName && !lastName) {
        name = firstName;
      }

      // Generating userId
      const userId =
        name.toUpperCase().substring(0, 3) +
        mobile.toString().substring(6, 9) +
        name.toUpperCase().substring(0, 3);

      user = await User.create({
        prefix,
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        dob,
        nationality,
        city,
        state,
        address,
        pincode,
        country,
        userId,
      });

      const otp = Math.floor(1000+Math.random()* 9000);

      // Creating the token
      const token = await Token.create({
        email: user.email,
        otp,
      });

      const url =
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

      // Sending OTP to the user's email
      await sendEmail({
        subject: "Welcome to Investay! This OTP is valid for 5 minutes only!",
        text: `OTP: ${token.otp}`,
        // html: `<div><p>USER ID: ${user.userId}</p><a href="${url}/signup/change-password?token=${token._id.toString()}">Set Password</a></div>`,
        email,
      });

      // Sending OTP to the user's mobile number
      await sendSms({
        body: `OTP for login! This OTP is valid for 5 minutes only! OTP: ${token.otp}`,
        mobile,
      });
      success = true;
      return res.status(201).json({ success, otp: token._id.toString() });
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(403).json({ error: "Method not allowed!" });
  }
};

module.exports = register;
