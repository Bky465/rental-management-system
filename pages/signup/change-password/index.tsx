import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getToken } from "../../../action-creators/token/index";
import { toast } from "react-toastify";
import HeaderTitle from "../../../components/Layout/HeaderTitle";
import { changePassword } from "../../../action-creators/user/changePassword";

const ChangePassword = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [passwordDetails, setPasswordDetails] = useState({password: "", confirmPassword: ""});

  const handleChange = (e:any)=> {
    e.preventDefault();
    const {name, value} = e.target;
    setPasswordDetails({...passwordDetails, [name]: value});
  }

  const onChangePassword = async (e:any)=> {
    e.preventDefault();
    const {password, confirmPassword} = passwordDetails;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if(!passwordRegex.test(password)) {
      toast.error("Enter a valid password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else if(password !== confirmPassword) {
      toast.error("Password and Confirm password mismatch!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      try {
        const response = await changePassword({...passwordDetails, email: token});
        if(response.success) {
          router.replace("/signin");
        }
      } catch (error:any) {
        toast.error(error.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  useEffect(() => {
    if(router.isReady) {
      if(router.query.token) {
        getToken({ id: router.query.token})
          .then((response) => {
            if (response.error) {
              router.replace("/");
              toast.error(response.error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
            else {
              setToken(response.token.email)
            }
          })
          .catch((error: any) => {
            router.replace("/");
            toast.error(error.response.data.error, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
      else {
        router.replace("/");
      }
    }
  }, [router.isReady, router.query.token]);

  return (
    <div className="min-h-[90vh]">
      <HeaderTitle pageName={"Change Password"} />
      <form
        onSubmit={onChangePassword}
        className="min-h-[90vh] w-full flex justify-between bg-Signin_bg bg-cover"
      >
        <div className="h-[320px] xs:h-[60vh] w-[300px] xxs:w-[350px] m-auto px-8 py-4 flex flex-col bg-white">
          <h1 className="mb-6 text-center text-2xl font-[700] text-black">
            Change Password
          </h1>

          <div className="mb-4 flex flex-col justify-start items-start">
            <label htmlFor="password" className="text-[#00000080]">New Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={passwordDetails.password}
              onChange={handleChange}
              className="w-full border-[1px] border-black p-[0.3rem] outline-none"
            />
          </div>

          <div className="mb-6 flex flex-col justify-start items-start">
            <label htmlFor="confirmPassword" className="text-[#00000080]">Re-Type Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={passwordDetails.confirmPassword}
              onChange={handleChange}
              className="w-full border-[1px] border-black p-[0.3rem] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-[7rem] my-2 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
ChangePassword.public = (page: React.ReactElement) => {
  return { page };
};
