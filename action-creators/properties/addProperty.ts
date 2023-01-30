import axios from "axios";
export const addProperty = async (
  counter: any,
  {
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
    description,
    foorPlan,
    masterPlan,
    walkthroughVideo,
    propertyDetails,
    pid,
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
    paymentDetails,
  }: any
) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  if (counter === "details") {
    console.log(
      "first: ",
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
      googleMapLocation
    );
    const { data } = await axios.patch(
      `${url}/api/property/addProperty?details=${true}`,
      {
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
      }
    );
    return data;
  } else if (counter === "propertyDetails") {
    console.log(pid);
    const { data } = await axios.patch(
      `${url}/api/property/addProperty?propertyDetails=${true}`,
      {
        description,
        foorPlan,
        masterPlan,
        walkthroughVideo,
        propertyDetails,
        pid,
      }
    );
    return data;
  } else if (counter === "bookingPricing1") {
    const { data } = await axios.patch(
      `${url}/api/property/addProperty?bookingPricing1=${true}`,
      {
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
      }
    );
    return data;
  } else if (counter === "bookingPricing2") {
    console.log(pid)
    const { data } = await axios.patch(
      `${url}/api/property/addProperty?bookingPricing2=${true}`,
      {
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
      }
    );
    return data;
  } else {
    const { data } = await axios.patch(
      `${url}/api/property/addProperty?paymentDetails=${true}`,
      {
        paymentDetails,
      }
    );
    return data;
  }
};
