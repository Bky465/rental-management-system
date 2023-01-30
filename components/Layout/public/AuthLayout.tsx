import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
type TProps = {
  buttonMode: boolean;
  shadow: boolean;
  children: React.ReactElement;
};

const AuthLayout = (props: TProps) => {
  const router = useRouter();
  const reduxData = useSelector((state: any) => {
    return state.getUserData;
  });

  // useEffect(()=> {
  //   console.log(router.pathname)
  //   if(!reduxData?.token) {
  //     router.push("/signin");
  //   }
  // }, [reduxData]);
  return (
    <>
      {props.children}
    </>
  );
};

export default AuthLayout;
