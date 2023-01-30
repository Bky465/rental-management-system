import axios from "axios";
export const changePassword = async ({password, confirmPassword, email}:any) => {
  const url =
    process.env.NEXT_PUBLIC_NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_INVESTAY_LINK_LOCAL
      : process.env.NEXT_PUBLIC_INVESTAY_LINK_PROD;

  const { data } = await axios.put(`${url}/api/auth/resetPassword`, {confirmPassword, password, email});
  return data;
};
