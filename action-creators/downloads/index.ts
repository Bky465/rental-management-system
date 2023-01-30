import axios from "axios"

export const downLoadFile = async ({name,email,mobile,action,propertyId}:any)=> {
    const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

    const {data} = await axios.post(`${url}/api/downloads/`,{name,email,mobile,action,propertyId});
    return data;
}