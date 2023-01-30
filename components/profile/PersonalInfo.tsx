import React from 'react'
import Dropdown from "react-dropdown";
import Edit from '../SVGComponents/profile/Edit';
import { useState } from 'react';
import { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";


import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import {

  ArrowDownTrayIcon,
} from "@heroicons/react/20/solid";

const PersonalInfo = () => {
  const options = ["Mr.", "Mrs.", "Miss."];
  const [prefix, setPrefix] = useState("");
  const [active, setActive] = useState("");
  const Available = ["Mr.", "Mrs.", "Miss."];
  return (

    <>
      <Disclosure as={'div'} className='w-full' id='personal-info'>
        {({ open }) => (
          <>
            <div  className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Personal Info</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className='grid grid-cols-12 gap-x-5 gap-y-2 mb-5'>
                <div className="col-span-12">

                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-20 py-1  ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-sm  text-secondaryLightColor">
                          {active == "" ? "Mr." : active}
                        </span>

                        <span>
                          <FiChevronDown className=" h-3 w-3 " />
                        </span>
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute   mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-sm text-secondaryLightColor cursor-pointer"
                                value={val}
                              >
                                <p>{val}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>

                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>First Name </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1'>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Middle Name </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Last Name </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Email </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Mobile +91 </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Date Of Birth </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Age</p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Designation </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Gender </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Martial Status </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Nationality </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Current Address </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>State </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>City </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Pincode </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Country </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as={'div'} className='w-full' id='kyc-details'>
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">KYC Details</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className='grid grid-cols-12 gap-x-5 gap-y-2 mb-5'>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Name as in PAN </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Name as in AADHAR </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>PAN NO*</p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>AADHAR NO* </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>

              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as={'div'} className='w-full' id='bank-acc-details'>
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-sm font-bold">Bank Account Details</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className='grid grid-cols-12 gap-x-5 gap-y-2 '>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Name as per bank records  </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Bank Name </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Branch Name</p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Bank account number </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>IFSC Code </p>
                  <div className='border border-secondaryLightColor  py-1 px-2 flex items-center mt-1 '>
                    <input type="text" className='w-full  border-none focus:outline-none text-secondaryLightColor text-sm' />
                    <Edit width='10' height='10' color='black' />

                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className='text-xs  text-secondaryLightColor'>Account Type </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-20 py-1  mt-1">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-sm  text-secondaryLightColor">
                          {active == "" ? "Mr." : active}
                        </span>

                        <span>
                          <FiChevronDown className=" h-3 w-3 " />
                        </span>
                      </Listbox.Button>

                      <Transition
                        as={Fragment}
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute   mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-sm text-secondaryLightColor cursor-pointer"
                                value={val}
                              >
                                <p>{val}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
              </div>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className='w-full flex justify-center'>
        <button className='px-5 py-2 text-black  bg-primaryColor rounded-md mt-10 '>Save & Continue</button>
      </div>

    </>
  )
}

export default PersonalInfo