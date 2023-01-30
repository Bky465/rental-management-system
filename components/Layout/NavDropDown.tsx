import React, { useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuButton } from "../SVGComponents/MenuButton";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { set_getProperties } from "../../redux/property/propertyReducer";
import { set_user } from "../../redux/user/userReducer";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
type TProps = {
  buttonMode: boolean;
};

// buttonMode
export default function NavDropDown({ buttonMode }: TProps) {

  const [isFaq,setIsFaq]=useState(false)
  const dispatch = useDispatch();
  const reduxUser = useSelector((state: any) => {
    return state.getUserData;
  });

  const onLogout = (e: any) => {
    e.preventDefault();
    localStorage.clear();
    deleteCookie("authorization");
    dispatch(set_getProperties(null));
    dispatch(set_user({ user: null }));
  };
  const router = useRouter();

    useEffect(()=>{
  if(router.isReady){
    const faq=document.getElementById("faq")
    faq ? setIsFaq(true) : setIsFaq(false)
  }
    },[router.isReady , router.route])
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open, close }) => (
        <>
          <div>
            <Menu.Button className="flex items-center text-webPrimaryColor  xs:ml-4 cursor-pointer ">
              <MenuButton
                color={`${open ? "white" : "black"}`}
                height="40"
                width="40"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 max-h-[350px] sm:max-h-[450px] overflow-y-auto w-60 origin-top-right divide-y divide-gray-100  bg-white inset shadow-dropdown_shadow  focus:outline-none p-1">
              <div className="px-1 py-1 flex flex-col ">
                {buttonMode && reduxUser?.user ? (
                  <>
                    <Menu.Item>
                      <Link href="/profile">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Profile
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-shortlists">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Shortlists
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-properties">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Properties
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Dashboard
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/post-property">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Post a Property
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={(e: any) => {
                          close();
                          onLogout(e);
                        }}
                        className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </>
                ) : (
                  buttonMode && (
                    <>
                      {/* <Menu.Item>
                        <Link href="/signin">
                          <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                            Sign In
                          </button>
                        </Link>
                      </Menu.Item>

                      <Menu.Item>
                        <Link href="/signup">
                          <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                            Sign Up
                          </button>
                        </Link>
                      </Menu.Item> */}
                    </>
                  )
                )}

                {!buttonMode && reduxUser?.user && (
                  <>
                    <Menu.Item>
                      <Link href="/profile">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Profile
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-shortlists">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Shortlists
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard/my-properties">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          My Properties
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/dashboard">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Dashboard
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link href="/post-property">
                        <button className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start">
                          Post a Property
                        </button>
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={(e: any) => {
                          close();
                          onLogout(e);
                        }}
                        className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                      >
                        Logout
                      </button>
                    </Menu.Item>
                  </>
                )}

                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Home
                  </button>
                </Menu.Item>

                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/property?Rental=false");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Resale
                  </button>
                </Menu.Item>
                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/property?Rental=true");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Rental
                  </button>
                </Menu.Item>
                {
                 isFaq ?   <Menu.Item>
                 <button
                   onClick={() => {
                     const doc = document.getElementById("faq");
                     doc?.scrollIntoView({
                       behavior: "smooth",
                       block: "center",
                       inline: "nearest",
                     });
                   }}
                   className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                 >
                       {/* <Link href={{ pathname: "/property", query: { Rental: false } }}>
            <button
              className={`${
                isResale ? "translate-x-[-15rem]" : "translate-x-0"
              } transition-all duration-[0.8s]  absolute hover:shadow-resale_shadow bg-primaryColor lg1:px-12 px-5 lg1:py-3 py-2 rounded-lg bottom-1 left-10 text-lg font-semibold`}
            >
              Resale
            </button>
          </Link> */}
                   FAQs
                 </button>
               </Menu.Item> :
               <Menu.Item>
                <Link href={{ pathname: "/property", query: { Rental: false  , Faq:true} }}> 
                <button
                    // onClick={() => {
                    //   router.push("/contactus");
                    // }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    FAQs
                  </button></Link>

                    

               </Menu.Item>
                }
              
                <Menu.Item>
                  <button
                    onClick={() => {
                      router.push("/contactus");
                    }}
                    className="w-full font-inter p-2 rounded-md hover:bg-black hover:text-primaryColor mt-2 text-start"
                  >
                    Contact Us
                  </button>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
