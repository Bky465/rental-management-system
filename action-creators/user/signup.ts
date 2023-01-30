import axios from "axios";
export const signup = async ({
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
  country
}: any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.post(`${url}/api/auth/register`, {
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
    pincode,
    country,
    address,
  });
  return data;
};
