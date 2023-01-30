import React from 'react'
import Dropdown from "react-dropdown";
import Edit from '../SVGComponents/profile/Edit';
import { useState } from 'react';
import  { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Disclosure } from "@headlessui/react";
import { RightArrow } from '../SVGComponents/RightArrow';
import Image from "next/image";
import { useRouter } from 'next/router';
import { ChevronUpIcon , ChevronDownIcon , PlusIcon } from '@heroicons/react/20/solid';
const MyListing = () => {
  const router=useRouter()
  return (
    <div>
             <Disclosure as={'div'} className='w-full'>
   {({ open }) => (
    <>
      <div className="flex justify-between items-end bg-gray-100 p-2 mb-5">
        <p className="text-sm font-bold">My Listings</p>
        <Disclosure.Button>
          {open ? (
            <ChevronUpIcon className="font-semibold  w-5 h-5 cursor-pointer" />
          ) : (
            <ChevronDownIcon className="font-semibold  w-5 h-5 cursor-pointer" />
          )}
        </Disclosure.Button>
      </div>

      <Disclosure.Panel>
      <p className='my-2'>Edit</p>
  <div className="grid grid-cols-12 gap-5 ">

  <div className="lg:col-span-5 sm:col-span-6 col-span-12 h-full  shadow-md flex flex-col rounded-lg">
        <div className="h-48 xxs:h-[15.2rem] w-full relative ">
          <p className="bg-red-600 text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
            Pending
          </p>
          <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
            <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
              <img src={'/assets/images/CardImage.png'} alt="No Image" className="w-full h-full" />
            </div>
          </div>
   
        </div>

        <div className=" mt-1 xxs:mt-4 mb-8">
          <div className="px-2 ">
            <p className="text-base font-semibold  tracking-wide">
              Modern and quikry flat
            </p>
            <p className="font-normal text-xs ">
              bbsr,infocity , flat 6
            </p>
            <p className="text-base font-semibold text-primaryColor mt-1">
              
  10000 Lac + 1000 K  Maintaince Monthly
 
              
            </p>
          </div>

          <div className="px-2  mt-2 flex items-start ">
            <div className="flex gap-x-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold">Project Name</p>
                <p className="text-xs font-semibold">Direction Facing</p>
                <p className="text-xs font-semibold">Property Type</p>
                <p className="text-xs font-semibold">Construction Status</p>
                <p className="text-xs font-semibold">Tenancy Status</p>
              </div>
              <div className="space-y-2">
                {/* <p className="text-xs font-normal">{property?.projectName ? property?.projectName : "N/A"}</p> */}
                <p className="text-xs font-normal">Modern</p>
                <p className="text-xs font-normal">
                  {/* {property?.directionFacing} */}
                  North
                </p>
                <p className="text-xs font-normal">building</p>
                <p className="text-xs font-normal">
                  {/* {property?.constructionStatus} */}
                  Completed
                </p>
                <p className="text-xs font-normal">
                  {/* {property?.tenancyStatus ? property?.tenancyStatus : "N/A"} */}
                  Pending
                </p>
              </div>
            </div>

            <div className="col-span-6 gap-2 flex flex-col ">
              <div className="flex justify-between items-center">
                <p className=" text-xs font-semibold">Area</p>
                <p className=" text-xs">
                  {/* {property?.carpetArea
                    ? `${property?.carpetArea} sq.ft`
                    : "N/A"} */}
                    100 sq.ft
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p className=" text-xs font-semibold">Furnishing</p>
                <p className=" text-xs ml-10">
                  {/* {property?.furnishingStatus
                    ? property?.furnishingStatus
                    : "N/A"} */}
                    {/* onGoing */}
                    Completed

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full flex justify-between">
          <button
            onClick={() => setOpen(true)}
            className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center"
          >
            ENQUIRE NOW
          </button>
          <button className="bg-primaryColor rounded-b-lg rounded-l-lg text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
            Details
            <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
          </button>
        </div>
      </div>
      <div className="lg:col-span-5 sm:col-span-6  col-span-12  h-full  shadow-md flex flex-col rounded-lg">
        <div className="h-48 xxs:h-[15.2rem] w-full relative ">
          <p className="bg-greenBg text-white text-sm absolute px-6 rounded-md py-2 flex justify-center items-center">
            Trending
          </p>
          <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
            <div className="w-full h-full flex justify-center items-center rounded-t-lg bg-[#DCDCDC]">
              <img src={'/assets/images/CardImage.png'} alt="No Image" className="w-full h-full" />
            </div>
          </div>
   
        </div>

        <div className=" mt-1 xxs:mt-4 mb-8">
          <div className="px-2 ">
            <p className="text-base font-semibold  tracking-wide">
              Modern and quikry flat
            </p>
            <p className="font-normal text-xs ">
              bbsr,infocity , flat 6
            </p>
            <p className="text-base font-semibold text-primaryColor mt-1">
              
  10000 Lac + 1000 K  Maintaince Monthly
 
              
            </p>
          </div>

          <div className="px-2  mt-2 flex items-start ">
            <div className="flex gap-x-2">
              <div className="space-y-2">
                <p className="text-xs font-semibold">Project Name</p>
                <p className="text-xs font-semibold">Direction Facing</p>
                <p className="text-xs font-semibold">Property Type</p>
                <p className="text-xs font-semibold">Construction Status</p>
                <p className="text-xs font-semibold">Tenancy Status</p>
              </div>
              <div className="space-y-2">
                {/* <p className="text-xs font-normal">{property?.projectName ? property?.projectName : "N/A"}</p> */}
                <p className="text-xs font-normal">Modern</p>
                <p className="text-xs font-normal">
                  {/* {property?.directionFacing} */}
                  North
                </p>
                <p className="text-xs font-normal">building</p>
                <p className="text-xs font-normal">
                  {/* {property?.constructionStatus} */}
                  Completed
                </p>
                <p className="text-xs font-normal">
                  {/* {property?.tenancyStatus ? property?.tenancyStatus : "N/A"} */}
                  Pending
                </p>
              </div>
            </div>

            <div className="col-span-6 gap-2 flex flex-col ">
              <div className="flex justify-between items-center">
                <p className=" text-xs font-semibold">Area</p>
                <p className=" text-xs">
                  {/* {property?.carpetArea
                    ? `${property?.carpetArea} sq.ft`
                    : "N/A"} */}
                    100 sq.ft
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <p className=" text-xs font-semibold">Furnishing</p>
                <p className=" text-xs ml-10">
                  {/* {property?.furnishingStatus
                    ? property?.furnishingStatus
                    : "N/A"} */}
                    {/* onGoing */}
                    Completed

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto w-full flex justify-between">
          <button
            onClick={() => setOpen(true)}
            className="bg-black rounded-b-lg rounded-r-lg text-primaryColor text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex justify-center items-center"
          >
            ENQUIRE NOW
          </button>
          <button className="bg-primaryColor rounded-b-lg rounded-l-lg text-black text-sm xxs:text-base  py-2 px-3 xxs:px-5 flex items-center justify-center">
            Details
            <RightArrow className="h-4 xxs:h-5 w-4 xxs:w-5 ml-3" />
          </button>
        </div>
      </div>
      
      <div 
      
      onClick={()=>{
        router.push('/profile/seller-owner/details')
      }}
      className='lg:col-span-2 col-span-12 flex justify-center items-center flex-col' >
         <PlusIcon className='w-8 h-8 cursor-pointer ' />
         <p className='text-center'>Add New Property</p>
      </div>
  </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
    </div>
  )
}

export default MyListing