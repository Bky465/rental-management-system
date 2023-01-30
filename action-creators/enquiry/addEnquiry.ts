import axios from "axios";

export const addEnquiry = async ({name,email,countryCode,mobile,role,serviceNeeded,source,query}:any)=> {
  const url =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
    : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.post(`${url}/api/enquiry/addEnquiry`, {name,email,countryCode,mobile,role,serviceNeeded,source,query});
  return data;
}