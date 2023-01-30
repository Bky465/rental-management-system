import React, { useEffect, useRef, useState } from "react";
import HeaderTitle from "../../components/Layout/HeaderTitle";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { signup } from "../../action-creators/user/signup";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { verifyOtp } from "../../action-creators/token/verifyOtp";
import { useDispatch } from "react-redux";
import { set_user } from "../../redux/user/userReducer";
import { login } from "../../action-creators/user/login";
import { getToken } from "../../action-creators/token";
import LoadingSpinner from "../../components/LoadingSpinner";

const initialUserDetails = {
  prefix: "Mr.",
  firstName: "",
  middleName: "",
  lastName: "",
  email: "",
  mobile: "",
  dob: "",
  nationality: "",
  city: "",
  state: "",
  address: "",
  pincode: "",
  country: "",
};

const otpRegex = /^[0-9]$/;

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [tokenId, setTokenId] = useState(false);
  const [userDetails, setUserDetails] = useState(initialUserDetails);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const [error, setError]: any = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const handleKeyPress = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      handleChange(e);
    } else {
      if (name === "fourth") {
        if (token.fourth === "" && value === "") {
          thirdRef?.current.focus();
        }
      } else if (name === "third") {
        if (token.third === "" && value === "") {
          secondRef?.current.focus();
        }
      } else if (name === "second") {
        if (token.second === "" && value === "") {
          firstRef?.current.focus();
        }
      }
    }
  };

  const handleOnChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (otpRegex.test(value) || value === "") {
      setToken({ ...token, [name]: value });
      if (name === "first" && otpRegex.test(value)) {
        secondRef.current.focus();
      } else if (name === "second" && otpRegex.test(value)) {
        thirdRef.current.focus();
      } else if (name === "third" && otpRegex.test(value)) {
        fourthRef.current.focus();
      }
    }
  };

  const verify = async (e: any) => {
    e.preventDefault();
    const otp = `${token.first}${token.second}${token.third}${token.fourth}`;
    try {
      setIsLoading(true);
      const resp = await getToken({ id: tokenId });
      if (resp.success) {
        const res = await verifyOtp({ id: tokenId, otp });
        if (res.success) {
          dispatch(set_user({ user: res.user }));
          if(error) {
            setError(undefined);
          }
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const options = ["Mr.", "Mrs.", "Miss"];

  const isDate = (date: any) => {
    const parsedDate: any = Date.parse(date);
    return isNaN(date) && !isNaN(parsedDate);
  };

  // const defaultOption = options[0];

  const onRegister = async (e: any) => {
    e.preventDefault();
    const {
      firstName,
      email,
      mobile,
      dob,
      nationality,
      city,
      state,
      address,
      pincode,
      country,
    } = userDetails;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName.replace(/\s/, "").trim().length < 4) {
      toast.error("First name must be minimum 4 characters long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!emailRegex.test(email)) {
      toast.error("Enter a valid email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (mobile.length !== 10) {
      toast.error("Enter a valid phone number!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!isDate(dob)) {
      toast.error("DOB cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (nationality.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (city.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (state.replace(/\s/, "").trim() === "") {
      toast.error("State cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (address.replace(/\s/, "").trim() === "") {
      toast.error("Address cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (pincode.length !== 6) {
      toast.error("Pincode must be 6 digits long!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (country.replace(/\s/, "").trim() === "") {
      toast.error("Nationality cannot be empty!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      try {
        setIsLoading(true);
        const response = await signup({ ...userDetails, prefix });
        if (response.success) {
          setIsSubmit(true);
          // setUserDetails(initialUserDetails);
          setIsChecked(false);
          setTokenId(response.otp._id);
          if(error) {
            setError(undefined);
          }
          setIsLoading(false);
          // router.replace(`/verifyOtp/${response.otp}`);
        }
      } catch (error: any) {
        // toast.error(error.response.data.error, {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
        setError(error.response.data.error);
        setIsLoading(false);
      }
    }
  };

  const resendOtp = async () => {
    try {
      // console.log(userDetails.email);
      setIsLoading(true);
      const response = await login({ identifier: userDetails.email });
      if (response.success) {
        setTokenId(response.token._id);
        toast.success("OTP sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        if(error) {
          setError(undefined);
        }
        setIsLoading(false);
      }
    } catch (error: any) {
      setError(error.response.data.error);
      setIsLoading(false);
    }
  };

  // useEffect(()=> {
  //   if(router.isReady) {

  //   }
  // }, []);

  return (
    <>
      <HeaderTitle pageName={"Signup"} />

      {isLoading && <LoadingSpinner />}

      <form
        onSubmit={!isSubmit ? onRegister : verify}
        className="min-h-[90vh] w-full p-4 sm:p-6 flex justify-between bg-Signin_bg bg-cover"
      >
        {!isSubmit ? (
          <div className="min-h-[80%] w-[100%] xxs:w-[90%] sm:w-[75%] base:w-[60%] lg:w-[50%] m-auto px-4 lg:px-6 lg1:px-8 py-4 flex flex-col bg-white">
            <h1 className="mb-6 text-center text-2xl font-[700] text-black">
              Let&apos;s get started
            </h1>
            <p className="text-base mb-2">What property you are looking for?</p>

            <div className="text-sm mb-4 flex justify-start items-center">
              <div className="w-[5rem] text-center border-[1px] border-black px-2 py-[0.3rem] mr-4">
                Resale
              </div>
              <div className="w-[5rem] text-center border-[1px] border-black px-2 py-[0.3rem]">
                Rental
              </div>
            </div>

            <Dropdown
              options={options}
              value={prefix}
              onChange={(e) => setPrefix(e.value)}
              placeholder="Mr."
              className="w-[80px] text-sm text-[#00000080] border-[1px] border-black mb-4 "
            />

            <div className="text-sm grid grid-cols-1 xs:grid-cols-2 gap-4">
              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="firstName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userDetails.firstName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="middleName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Middle Name:
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={userDetails.middleName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="lastName"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userDetails.lastName}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem]  outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="email" className="pl-[0.2rem] text-[#00000080]">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="mobile"
                  className="pl-[0.2rem] flex justify-start items-center text-[#00000080]"
                >
                  Mobile
                  <select
                    name="countryCode"
                    id="countryCode"
                    className="outline-none bg-transparent"
                  >
                    <option value="+91">+91</option>
                  </select>
                </label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={userDetails.mobile}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="dob" className="pl-[0.2rem] text-[#00000080]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={userDetails.dob}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="nationality"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Nationality :
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  value={userDetails.nationality}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="city" className="pl-[0.2rem] text-[#00000080]">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={userDetails.city}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label htmlFor="state" className="pl-[0.2rem] text-[#00000080]">
                  State* :
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={userDetails.state}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="address"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Address* :
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={userDetails.address}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="country"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Country* :
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={userDetails.country}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-start">
                <label
                  htmlFor="pincode"
                  className="pl-[0.2rem] text-[#00000080]"
                >
                  Pincode* :
                </label>
                <input
                  type="number"
                  name="pincode"
                  id="pincode"
                  value={userDetails.pincode}
                  onChange={handleChange}
                  className="w-full border-[1px] border-black p-[0.3rem] outline-none"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-start items-center">
              <input
                type="checkbox"
                name="t&c"
                id="t&c"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                className="h-[1rem] w-[1rem] outline-none"
              />
              <label htmlFor="t&c" className="ml-2 text-sm font-[700]">
                TERMS AND CONDITIONS
              </label>
            </div>

            {error && (
              <p className="mt-4 text-xs text-center font-[600] text-red-600">
                {error}
              </p>
            )}
            
            <button
              type="submit"
              disabled={!isChecked}
              className="w-[7rem] my-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="h-auto w-[80%] mx-auto xxs:w-[70%] xs:w-[60%] sm:w-[50%] md:w-[45%] md_link:w-[40%] lg1:w-[35%] px-[0.2rem] py-6 xxs:px-2 sm:px-4 sm:py-6 lg1:p-6 flex flex-col items-center bg-white">
            <h1 className="text-black text-xl font-[700]">OTP verification</h1>
            <p className="w-[95%] mt-3 text-xs text-center text-gray-400">
              A 4-digit OTP has been sent to your Mobile number/Email
            </p>

            <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-start rounded-md bg-yellow-300">
              OTP has been sent successfully.
            </div>

            <div className="w-[90%] md:w-[80%] md_link:w-[70%] lg1:w-[65%] mt-4 py-2 px-3 text-black text-sm text-start rounded-md bg-yellow-300">
              <p>Your mobile number:</p>
              <div className="w-full flex justify-between items-center">
                <p>+91 {userDetails.mobile}</p>
                {/* <BiEdit className="text-xl text-gray-600" /> */}
              </div>
            </div>

            <div className="w-[90%] md:w-[85%] md_link:w-[75%] lg1:w-[65%] mt-6 flex flex-col items-start justify-start">
              <div className="w-full text-sm text-gray-400 font-[600] flex justify-between items-center">
                <p>Enter OTP</p>
                <p className="cursor-pointer" onClick={resendOtp}>
                  Resend OTP
                </p>
              </div>

              <div className="w-full text-sm flex justify-between items-center">
                <input
                  ref={firstRef}
                  type="text"
                  name="first"
                  value={token.first}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={secondRef}
                  type="text"
                  name="second"
                  value={token.second}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={thirdRef}
                  type="text"
                  name="third"
                  value={token.third}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
                <input
                  ref={fourthRef}
                  type="text"
                  name="fourth"
                  value={token.fourth}
                  onChange={handleOnChange}
                  onKeyUp={handleKeyPress}
                  className="w-[20%] p-2 border-[1px] border-gray-400 outline-none"
                />
              </div>
            </div>

            {error && (
              <p className="mt-2 text-xs text-center font-[600] text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-[7rem] mt-6 mx-auto py-[0.3rem] px-2 text-black font-[700] rounded-md bg-[#FDB813]"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  );
};

export default Signup;
Signup.public = (page: React.ReactElement) => {
  return { page };
};
