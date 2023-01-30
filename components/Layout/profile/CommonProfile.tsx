import React from "react";
import { ArrowLeftIcon, Bars3Icon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import MenuBarDropDown from "../../profile/MenuBarDropDown";
import Link from "next/link";

type TProps = {
  children: React.ReactElement;
};
const CommonProfile = (props: TProps) => {
  const router = useRouter();
  const [buttonMode, setButtonMode] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [path, setPath] = useState([
    {
      path_name: "Personal Info",
      path: "personal-info",
      active: true,
    },
    {
      path_name: "KYC Details",
      path: "kyc-details",
      active: false,
    },
    {
      path_name: "Bank Account Details",
      path: "bank-acc-details",
      active: false,
    },
  ]);

  const [active, setActive] = useState([true, false, false]);

  const handleClick = (id: any, index: any) => {
    if (index == 0) {
      setActive([true, false, false]);
    } else if (index == 1) {
      setActive([false, true, false]);
    } else {
      setActive([false, false, true]);
    }
    const doc = document.getElementById(id);
    doc?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  useEffect(() => {
    console.log(router);

    if (router.isReady) {
      // console.log(router.route.slice(11).replace("_"," "));
      // console.log(router.route.split("/"));

      //TODO: for real time window resize
      window.addEventListener("resize", function (event) {
        if (window.innerWidth < 1273) {
          setButtonMode(true);
        } else {
          setButtonMode(false);
        }
      });
      //TODO: for the first time when window is rendered
      if (window.innerWidth < 1273) {
        setButtonMode(true);
      } else {
        setButtonMode(false);
      }
    }
  }, [router.isReady]);
  return (
    <div className=" md_link:px-20 px-4 mt-6">
      <button
        onClick={() => router.back()}
        className="absolute left-3 top-[5rem] sm:left-5 sm:top-20 cursor-pointer z-[10]"
      >
        <ArrowLeftIcon className="h-8 w-8 text-black" />
      </button>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mt-5 mb-10  border-b-4 pb-3 xxs:px-8 border-black  flex items-center gap-5  ">
          <div
            className={`${
              router.route === "/profile/myprofile" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/myprofile">My profile</Link>
          </div>
          <div
            className={`${
              router.route === "/profile/buyer-tenant" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/seller-owner">Buyer/Tenant</Link>
          </div>
          <div
            className={`${
              router.route === "/profile/seller-owner" ? "bg-primaryColor" : ""
            } px-2 py-1`}
          >
            <Link href="/profile/seller-owner">Seller/Owner</Link>
          </div>
        </div>

        {buttonMode ? (
          <MenuBarDropDown />
        ) : (
          <div
            className={`col-span-2 h-40  border-black  border-r-4 gap-y-5 flex flex-col py-5`}
          >
            {router.route != "/profile/myprofile" ? (
              <div className={`bg-primaryColor pl-10  cursor-pointer  py-1`}>
                <p>Details</p>
              </div>
            ) : (
              path.map((val, key) => {
                return (
                  <div
                    key={key}
                    onClick={() => handleClick(val.path, key)}
                    className={`${
                      active[key] ? "bg-primaryColor" : ""
                    } pl-10  cursor-pointer  py-1`}
                  >
                    <p>{val.path_name}</p>
                  </div>
                );
              })
            )}
          </div>
        )}

        <div
          className={`${
            buttonMode ? "col-span-12" : "col-span-10 pl-10"
          } h-full `}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CommonProfile;
