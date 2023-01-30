import React from "react";
import Edit from "../SVGComponents/profile/Edit";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";

import {
  ChevronUpIcon,
  ChevronDownIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/20/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Details = () => {
  const options = ["Mr.", "Mrs.", "Miss."];
  const [prefix, setPrefix] = useState("");
  const [active, setActive] = useState("");
  const Available = ["Mr.", "Mrs.", "Miss."];
  return (
    <div className="flex flex-col items-start justify-start">
      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-base font-bold">Property Overview</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Service Availed{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none  rounded-md w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20]  mt-9 w-full bg-white rounded-md  shadow-md border border-secondaryLightColor focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Gated Community{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 mt-1 px-2 flex items-center   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    property Type{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    SBA (In Sq.Ft){" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 mt-1 px-2 flex items-center  rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Plot Area (In Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 mt-1 px-2 flex items-center   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Carpet Area (In Sq.Ft){" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 mt-1 px-2 flex items-center  rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    <Edit width="10" height="10" color="black" />
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Plot Configuration{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Construction Status
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Direction Facing
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Configuration
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Furnishing Type
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Available from Date
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-base font-bold">Project Details</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Age(In Yrs){" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "10 Years" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Project Name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Builder/Developer Name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Water Supply{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "Borewell" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Launch Date{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "10/11/22" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Visitor Parking{" "}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2 ">
                      Yes
                    </div>
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2  ">
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Walkthrough Video{" "}
                  </p>
                  <div className="border border-secondaryLightColor text-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <label
                      htmlFor="inputTag"
                      className="flex justify-center w-full h-full"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Broucher </p>
                  <div className="border border-secondaryLightColor text-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <label
                      htmlFor="inputTag"
                      className="flex justify-center w-full h-full"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden" />
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-base font-bold">Unit Details</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Number of Owners{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Khata in Owner’s name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Last Tax paid date{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Owner/s or GPA holder name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Owner/s or GPA holder contact details{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tower/Wing name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Phase </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Floor </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Unit No/Unit Name{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Door Facing{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    No. of Bathrooms{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Flooring </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor"> Parking </p>
                  <div className="flex items-center justify-between text-secondaryLightColor mt-1">
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2 ">
                      Yes
                    </div>
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2  ">
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Parking Type{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    No. of Parking{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Address Zone{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "10/11/22" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Property Address{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property location{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">City </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center py-1 px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {active == "" ? " " : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">State </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center py-1 px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {active == "" ? " " : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">Pincode </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center py-1 px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {active == "" ? " " : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">Country </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center py-1 px-2">
                        <span className="text-base  text-secondaryLightColor ">
                          {active == "" ? " " : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Nearset Landmark{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Longitude{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">Latitude </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className=" col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Details of snags in property{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className=" col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Repairs/Fixes by owner prior to SD registration{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Property Gallery</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="col-span-12 px-2 ">
                  <p className="text-base font-semibold">Property Plans </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Floor Plan
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Master Plan
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Walkthrough Video
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Vaastu
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Floor Plan
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 px-2 mt-5 ">
                  <p className="text-base font-semibold">Society </p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Elevation
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Common Areas
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Outdoor Amenities
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Indoor Amenities
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-12 px-2 mt-5 ">
                  <p className="text-base font-semibold">Property</p>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Entrance
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Neighbourhood
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #1
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #2
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #3
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Study
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Terrace
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Garden
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Lift
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Staircase
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #1
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #2
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #3
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Bedroom #4
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Balcony #1
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Balcony #2
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Balcony #3
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Balcony #4
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-x-10 gap-y-5 mt-1">
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <label htmlFor="inputTag">
                        <ArrowUpTrayIcon className="h-5 w-5 " />
                        <input id="inputTag" type="file" className="hidden" />
                      </label>

                      <p className="text-base  text-secondaryLightColor">
                        Garage/Parking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Amenties</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-10 mt-5 ">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Health & Wellness</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Studio</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Yoga & Meditation deck</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Outdoor Gym</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Indoor Gym</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Yoga Room</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Spa</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Steam & Sauna</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Kids Pool</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Swimming Pool</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Aerobics Studio</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Sports</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Badminton Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Basketball Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Volleyball Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Squash Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Tennis Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Table Tennis</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Box Cricket</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Golf Putting Greens</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Multipurpose Court</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Billards</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Learning & Games</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Skating Rink</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Children’s Play Area</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Library</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Creche</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Dance Studio</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Video Game Room</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Adventure Sports</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">
                    Leisure & Entertainment
                  </p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Amphitheatre/OAT</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Mini Theatre</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Pre Function Hall</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Banquet Hall</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Cafe</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Nature & Lifestyle</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Barbecue pit</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Parks & Themed gardens</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Senior Citizen corner</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Nature Trail</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Terrace Garden</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Air Conditioner</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Intercom</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Internet Service Provider</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Pet park</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Safety & Security</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Gated Security</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">CCTV</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Visitor Parking</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Fire Alarm</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Fire Extinguisher</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Water Sprinkler</p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Sustainability</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Rainwater Harvesting</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Organic Waste converter</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Solar Heater</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Solar Lighting</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Electric Car Charging </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Sewage Treatment Plant </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-lg font-semibold">Services</p>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">ATM</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Lift</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Super Market</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Co-working Spaces</p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Pharmacy </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Salon </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Business Center/Conference Room </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Laundry Services/Ironing Shop </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Convenience/Grocery Store </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Housekeeping </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Power Backup </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Gas Pipeline </p>
                    </div>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex items-center">
                      <input type="checkbox" className="w-5 h-5" />
                      <p className="ml-2">Garbage Chute </p>
                    </div>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Property Documents</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-10 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Online Registration Form{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Reservation Form - Resale{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    {" "}
                    Rental Agreement{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Property Inspection Report{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">
                    Property Inspection Report{" "}
                  </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-base   text-secondaryLightColor">MOU </p>
                  <div className="mt-2">
                    <label
                      htmlFor="inputTag"
                      className="px-8 py-1 text-gray-600  bg-primaryColor rounded-2xl"
                    >
                      Upload
                      <input id="inputTag" type="file" className="hidden " />
                    </label>
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Tenant Information</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenancy Status
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "10 Years" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Tenant Type
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "10 Years" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Tenant Security Deposit Amount{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Tenancy Exit Status{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == ""
                            ? "To be vacated prior to sale"
                            : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Pets Allowed{" "}
                  </p>
                  <div className="flex items-center gap-10 mt-1">
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2 ">
                      Yes
                    </div>
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2  ">
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Non-Veg Allowed{" "}
                  </p>
                  <div className="flex items-center gap-10 mt-1">
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2 ">
                      Yes
                    </div>
                    <div className="border border-secondaryLightColor rounded-md h-full px-8 py-2  ">
                      No
                    </div>

                    {/* <input type="text" className='w-full  border-none focus:outline-none' /> */}
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Related</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Posted on Date
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Property ID{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Code{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Property Limits{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "BBMP/BDA" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">RERA No. </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">CP name</p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure as={"div"} className="w-full" id="personal-info">
        {({ open }) => (
          <>
            <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
              <p className="text-lg font-bold">Booking & Pricing Information</p>
              <Disclosure.Button>
                {open ? (
                  <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                ) : (
                  <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
                )}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <div className="grid grid-cols-12 gap-x-5 gap-y-2 mb-5">
                <p className="text-lg font-semibold  block col-span-12">
                  Booking Info
                </p>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Lease Duration (In months)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Date of Booking
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem] mt-1  rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base  text-secondaryLightColor">
                          {active == "" ? "" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Sales Agreement Status{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Pending" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Registration{" "}
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Sales Deed
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">Khata</p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">EC</p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Property Tax
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Registrar Office
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <p className="text-lg font-semibold  block col-span-12 mt-5">
                  Pricing Info
                </p>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Expected Price (In Rs/Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Negotiated Price (In Rs/Sq.Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Closed Price (in Rs/Sq,Ft)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Expected Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Negotiated Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Closed Price{" "}
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Deposit (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Maintenance Charges Rs/Sq.Ft
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Maintenance Charges Rs/Month
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Monthly Rental (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Price Negotiation
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Lease Duration (In months)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Lease Amount
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>

                <p className="text-lg font-semibold  block col-span-12 mt-5">
                  Banking Info
                </p>

                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Whether Mortgaged
                  </p>
                  <Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-full py-[0.6rem]   rounded-md">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-base text-center  text-secondaryLightColor">
                          {active == "" ? "Yes" : active}
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
                        <Listbox.Options className="absolute z-[20] border border-secondaryLightColor mt-9 w-full bg-white rounded-md  shadow-md  focus:outline-none">
                          {Available.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2  text-base text-secondaryLightColor cursor-pointer"
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
                  <p className="text-xs  text-secondaryLightColor">
                    Lender Name
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Banker name
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Existing Home Loan on Property
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Outstanding Loan (In Rs.)
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Total Loan amount in Rs.
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
                <div className="md:col-span-4  xxs:col-span-6  col-span-12">
                  <p className="text-xs  text-secondaryLightColor">
                    Interest Rate %
                  </p>
                  <div className="border border-secondaryLightColor  py-2 px-2 flex items-center mt-1   rounded-md">
                    <input
                      type="text"
                      className="w-full  border-none focus:outline-none"
                    />
                    {/* <Edit width='10' height='10' color='black' /> */}
                  </div>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <button className="self-center bg-black text-primaryColor rounded-md py-2 px-4  font-bold">
        SUBMIT
      </button>
    </div>
  );
};

export default Details;
