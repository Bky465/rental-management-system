import React from 'react'
import Edit from '../SVGComponents/profile/Edit';
import { useState } from 'react';
import { useEffect } from "react";
import { Fragment } from "react";
import { Listbox } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { FiMinus } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const MenuBarDropDown = () => {

//     <div>
//     <Link href='/'>My profile</Link>
//    </div>
//    <div>
//     <Link href='/profile/seller-owner/my-listings'>Buyer/Tenant</Link>
//    </div>
//    <div>
//     <Link href=''>Seller/Owner</Link>
//    </div>
    const ref=useRef(null)
    const [active, setActive] = useState("");
    const Available = ["My Profile", "Buyer/Tenant", "Seller/Owner"];
    const path=[
        {
            path_name:"Personal Info",
            path:'personal-info'
        },
        {
            path_name:"KYC Details",
            path:"kyc-details"
        },
        {
            path_name:"Bank Account Details",
            path:"bank-acc-details"
        }
    ]
    const router=useRouter()

    const handleClick=(id:any)=>{
   
        
        // link.path.current?.scrollIntoView({
        //     behavior: "smooth",
        //     block: "center",
        //     inline: "nearest",
        //   }); 
        const doc=document.getElementById(id)
        console.log(doc);
        
        doc?.scrollIntoView({
                    behavior: "smooth",
            block: "center",
            inline: "nearest",
        })
    }
  return (
    <div className='mb-5 z-10'>
{
 router.route != "/profile/myprofile"  ? <div className='bg-primaryColor w-fit px-5 py-2   rounded-md text-base font-semibold'>Details</div>:

<Listbox value={active} onChange={(val) => setActive(val)}>
                    <div className="relative flex border border-secondaryLightColor w-60 py-1  ">
                      <Listbox.Button className="cursor-pointer focus:outline-none w-full flex justify-between items-center px-2">
                        <span className="text-sm  text-secondaryLightColor">
                          {active == "" ? "My Profile" : active}
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
                          {path.map((val, key) => {
                            return (
                              <Listbox.Option
                                key={key}
                                className="relative select-none p-2   text-sm text-secondaryLightColor cursor-pointer"
                                value={val.path_name}
                              >
                               <p 
                               onClick={()=>{
                                  handleClick(val.path)
                               }}
                               >{val.path_name}</p>
                              </Listbox.Option>
                            );
                          })}
                        </Listbox.Options>
                      </Transition>
                    </div>
</Listbox>}
    </div>
  )
}

export default MenuBarDropDown