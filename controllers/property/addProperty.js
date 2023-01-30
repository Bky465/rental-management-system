// Controller for adding a property. Requires login

import joi from "joi";
import PaymentDetails from "../../models/PaymentDetails";
import Property from "../../models/Property";
import User from "../../models/User";
import { sendEmail } from "../../services/email";
import fs from "fs";

const schema = joi.object({
  category: joi.string().valid("resale", "rental").optional(),
  name: joi.string().optional(),
  projectName: joi.string().optional(),
  builderName: joi.string().optional(),
  availableFrom: joi.number().optional(),
  waterSupply: joi.string().optional(),
  visitorParking: joi.boolean().optional(),
  unitName: joi.string().optional(),
  propertyType: joi
    .string()
    .valid(
      "apartment",
      "banglow",
      "independent-house",
      "villa",
      "gated-community",
      "plot"
    )
    .optional(),
  configuration: joi.string().optional(),
  plotConfiguration: joi.string().optional(),
  totalArea: joi.number().allow(null).optional(),
  carpetArea: joi.number().allow(null).optional(),
  directionFacing: joi
    .string()
    .valid(
      "north",
      "south",
      "east",
      "west",
      "north-west",
      "north-east",
      "south-east",
      "south-west"
    )
    .optional(),
  floor: joi.number().optional(),
  parking: joi.string().valid("car", "bike", "both", "none").optional(),
  parkingType: joi.string().optional(),
  noOfParking: joi.number().optional(),
  towerName: joi.string().optional(),
  phase: joi.string().optional(),
  mobile: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .length(10)
    .optional(),
  alternateNumber: joi
    .string()
    .regex(/^[0-9]{10}$/)
    .length(10)
    .optional(),
  addressLine1: joi.string().optional(),
  addressLine2: joi.string().optional(),
  landmarks: joi.string().optional(),
  city: joi.string().optional(),
  state: joi.string().optional(),
  country: joi.string().optional(),
  pincode: joi.number().optional(),
  nearbyPlaces: joi.string().optional(),
  googleMapLocation: joi.string().optional(),
  furnishingStatus: joi.string().optional(),
  bathrooms: joi.number().optional(),
  gatedCommunity: joi.boolean().optional(),
  propertyAge: joi.string().optional(),
  constructionStatus: joi
    .string()
    .valid("under-construction", "nearing-completion", "RTMI")
    .optional(),
  tenancyStatus: joi
    .string()
    .valid("vaccant", "immediate", "unavailable", ">30", null)
    .optional(),
  siteInspectionStatus: joi
    .string()
    .valid("pending", "completed", null)
    .optional(),
  registration: joi.boolean().optional(),
  saleDeed: joi.boolean().optional(),
  khata: joi.boolean().optional(),
  ec: joi.boolean().optional(),
  propertyTax: joi.boolean().optional(),
  documents: joi
    .object()
    .keys({
      registrationForm: joi.string().optional(),
      resaleForm: joi.string().optional(),
      rentalForm: joi.string().optional(),
      propertyInspectionForm: joi.string().optional(),
      rentalAgreement: joi.string().optional(),
      mou: joi.string().optional(),
    })
    .optional(),
  description: joi.string().optional(),
  floorPlan: joi.string().optional(),
  masterPlan: joi.string().optional(),
  walkthroughVideo: joi.string().optional(),
  vastu: joi.string().optional(),
  bookingPricing: joi
    .object()
    .keys({
      expectedPrice: joi.number().optional(),
      negotiatedPrice: joi.number().optional(),
      closedPrice: joi.number().optional(),
      deposit: joi.number().optional(),
      maintenanceCharges1: joi.number().optional(),
      expectedPropertyValue: joi.number().optional(),
      negotiatedPropertyValue: joi.number().optional(),
      closedPropertyValue: joi.number().optional(),
      monthlyRental: joi.number().optional(),
      maintenanceCharges2: joi.number().optional(),
      leaseAmount: joi.number().optional(),
      isNegotiable: joi.boolean().optional(),
      leaseDuration: joi.number().optional(),
      dateOfBooking: joi.number().optional(),
      lenderName: joi.string().optional(),
      agreementStatus: joi.boolean().optional(),
      mortgaged: joi.boolean().optional(),
      outstandingLoan: joi.number().optional(),
      totalLoan: joi.number().optional(),
      interestRate: joi.number().optional(),
    })
    .optional(),
  paymentDetails: joi
    .object()
    .keys({
      name: joi.string().optional(),
      mobile: joi.string().optional(),
      bankName: joi.string().optional(),
      accountNumber: joi.string().optional(),
      branch: joi.string().optional(),
      ifscCode: joi.string().optional(),
      upi: joi.string().optional(),
      aadhar: joi.string().length(12).optional(),
      pan: joi.string().length(10).optional(),
    })
    .optional(),
});

// const detailsSchema = joi.object({
//   pincode: joi.number().optional(),
//   name,
//   mobile,
//   alternateNumber,
//   addressLine1,
//   addressLine2,
//   landmarks,
//   city,
//   state,
//   nearbyPlaces,
//   googleMapLocation,
// });

const addProperty = async (req, res) => {
  if (req.method === "PATCH") {
    let success = false;
    const userId = req.user.id;
    try {
      const query = req.query;
      const {
        details,
        propertyDetails,
        bookingPricing1,
        bookingPricing2,
        paymentDetails,
      } = query;

      if (details) {
        const {
          pincode,
          projectName,
          mobile,
          alternateNumber,
          addressLine1,
          addressLine2,
          landmarks,
          city,
          state,
          nearbyPlaces,
          googleMapLocation,
        } = req.body;

        const property = await Property.create({
          pincode,
          projectName,
          mobile,
          alternateNumber,
          addressLine1,
          addressLine2,
          landmarks,
          city,
          state,
          nearbyPlaces,
          googleMapLocation,
          owner: userId,
        });

        success = true;
        return res.status(201).json({ success, property });
      } else if (propertyDetails) {
        const {
          description,
          foorPlan,
          masterPlan,
          walkthroughVideo,
          vastu,
          pid,
        } = req.body;

        let property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }

        property = await Property.findByIdAndUpdate(
          pid,
          {
            description,
            foorPlan,
            masterPlan,
            walkthroughVideo,
            vastu
          },
          { new: true }
        );

        success = true;
        return res.status(200).json({ success, property });
      } else if (bookingPricing1) {
        const {
          leaseAmount,
          isNegotiable,
          leaseDuration,
          dateOfBooking,
          lenderName,
          agreementStatus,
          mortgaged,
          outstandingLoan,
          totalLoan,
          interestRate,
          pid,
        } = req.body;

        let property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }

        property = await Property.findByIdAndUpdate(
          pid,
          {
            bookingPricing: {
              leaseAmount,
              isNegotiable,
              leaseDuration,
              dateOfBooking,
              lenderName,
              agreementStatus,
              mortgaged,
              outstandingLoan,
              totalLoan,
              interestRate,
            },
          },
          { new: true }
        );

        success = true;
        return res.status(200).json({ success, property });
      } else if (bookingPricing2) {
        const {
          expectedPrice,
          negotiatedPrice,
          closedPrice,
          deposit,
          maintenanceCharges1,
          expectedPropertyValue,
          negotiatedPropertyValue,
          closedPropertyValue,
          monthlyRental,
          maintenanceCharges2,
          pid,
        } = req.body;

        let property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }

        property = await Property.findByIdAndUpdate(
          pid,
          {
            bookingPricing: {
              expectedPrice,
              negotiatedPrice,
              closedPrice,
              deposit,
              maintenanceCharges1,
              expectedPropertyValue,
              negotiatedPropertyValue,
              closedPropertyValue,
              monthlyRental,
              maintenanceCharges2,
            },
          },
          { new: true }
        );

        success = true;
        return res.status(200).json({ success, property });
      } else if (paymentDetails) {
        const {
          paymentDetails
        } = req.body;

        const {name,
          mobile,
          bankName,
          accountNumber,
          branch,
          ifscCode,
          upi,
          aadhar,
          pan,
          pid,} = paymentDetails;

        let property = await Property.findById(pid);
        if (!property) {
          success = false;
          return res
            .status(404)
            .json({ success, error: "Property does not exist!" });
        }

        await PaymentDetails.create({
          name,
          mobile,
          bankName,
          accountNumber,
          branch,
          ifscCode,
          upi,
          aadhar,
          pan,
          property: pid
        });

        success = true;
        return res.status(200).json({ success });
      }
    } catch (error) {
      success = false;
      return res.status(500).json({ success, error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed!" });
  }
};

module.exports = addProperty;
