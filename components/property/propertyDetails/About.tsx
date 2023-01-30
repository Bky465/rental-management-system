import React, { useState } from "react";
import { ArrowDownTrayIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/legacy/image";
import { IoStarSharp } from "react-icons/io5";
import { Star } from "../../SVGComponents/property/Star";
import TestiMonial from "./TestiMonial";
import ReviewForm from "../../Modal/Property/ReviewForm";
import Broucher from "../../Modal/Property/Broucher";

export const About = ({ property, gallery }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  
  return (
    <>
      <ReviewForm isOpen={open} setIsOpen={setOpen} property={property} />
      <Broucher isOpen={isOpen} setIsOpen={setIsOpen} gallery={gallery} property={property} action="brochure" />

      <div id="about" className="flex gap-2  items-center">
        <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
          About Project
        </p>
        <span>
          <ArrowDownTrayIcon
            onClick={() => setIsOpen(true)}
            className="text-primaryColor w-8 h-8 mt-2 cursor-pointer"
          />
        </span>
      </div>

      <div className="mt-10 flex base:gap-20 gap-5 base:flex-row flex-col">
        <div className="h-[20rem] base:w-[25%] w-full ">
          {gallery.length > 0 ? <img
            src={`/assets/uploads/images/${gallery[gallery.length-1].link}`}
            alt="About Image"
            className="h-full w-full"
          /> : <img
          src={`/assets/images/AboutImage.png`}
          alt="About Image"
          className="h-full w-full"
        />}
          {/* <Image 
            alt="about Image"
            src="/assets/images/AboutImage.png"
            width={800}
            height={300}
            layout="fixed"
          /> */}
        </div>
        <div className="base:w-[75%]">
          <p className="base:text-xl text-base text-justify">
            {property?.description === "N/A" ?
              `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquid veritatis quod molestias obcaecati consequatur?
            Recusandae cupiditate modi expedita, a numquam sunt voluptate harum
            eius assumenda libero accusamus corrupti vel inventore nulla
            consectetur est tempora repudiandae quos facilis cum sed earum
            maiores perferendis! Nam explicabo, repellendus tenetur laborum
            veritatis blanditiis magni natus fugiat! Est ipsum eaque possimus
            hic voluptates blanditiis similique reiciendis sunt quo. Totam porro
            debitis consequuntur. Praesentium ratione placeat a consequuntur
            animi. Deleniti nam blanditiis minus culpa aliquam doloribus omnis
            in laborum fugiat pariatur, labore, aut sunt. Numquam rem, ex alias
            cupiditate consequuntur culpa reiciendis sit recusandae minus!` : property?.description}
          </p>
        </div>
      </div>

      <div className=" mt-20">
        <p className="text-2xl  font-bold border-b-4 border-primaryColor inline">
        {property?.projectName} 

        </p>
      </div>

      <div className="my-10  flex justify-between items-center">
        <div className="flex sm:gap-10 gap-2 items-start">
          <p className=" sm:text-lg text-sm">Overall</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            className="bg-black rounded-lg text-primaryColor text-sm sm:text-base sm:py-2 sm:px-4 xs:px-3 xs:py-2 p-2"
          >
            Write A Review
          </button>
        </div>
      </div>
      <div className="bg-star_bg bg-contain bg-no-repeat w-[40%] h-[100px] absolute right-0  "></div>
      <div className="flex flex-col base:w-[50%] w-full  space-y-4 lg:text-xl sm:text-base text-sm ">
        <div className="flex items-center justify-between ">
          <p>Construction Quality</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>Connectivity & Commute</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <p>Amenities & Facilities</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>Green Spaces & Parks</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
        <div className="flex  items-center justify-between ">
          <p>RWA & Society Management</p>
          <div className="flex gap-2">
          <Star width="1.5rem" height="1.5rem" val={0} index={0} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={1} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={2} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={3} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          <Star width="1.5rem" height="1.5rem" val={0} index={4} onStarClick={()=> {}} onStarHover={()=> {}} onStarBlur={()=> {}} ratings={0} />
          </div>
        </div>
      </div>

      <TestiMonial />
    </>
  );
};
