import React from "react";

// icons
import { BuildingOffice2Icon } from "@heroicons/react/20/solid";
import { VscCompass } from "react-icons/vsc";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiCar } from "react-icons/bi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Compass } from "../../SVGComponents/property/Compass";
import { Table } from "../../SVGComponents/property/Table";
import { Police } from "../../SVGComponents/property/Police";
import { Jar } from "../../SVGComponents/property/Jar";
import { WaterDrop } from "../../SVGComponents/property/WaterDrop";

const OverView = ({property}:any) => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const month = months[new Date(property?.createdAt).getMonth()];
  const day = new Date(property?.createdAt).getDate();
  const year = new Date(property?.createdAt).getFullYear();

  return (
    <div id="overview">
      <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
        Overview
      </p>

      <div className="mt-10 grid base:grid-cols-12 grid-cols-6 xl:gap-20 gap-5">
        <div className="col-span-6 space-y-4 ">
          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Property Type
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.propertyType}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <span>
                <Compass width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline">
                Direction Facing
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.directionFacing}</p>
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Construction Status
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.constructionStatus === "RTMI" ? "Done" : property?.constructionStatus}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <Table width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Furnishing Status
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.furnishingStatus}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tenancy Status
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.tenancyStatus}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Available From
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{property?.availableFrom}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <Police width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Gated Security
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{!property?.gatedCommunity ? "No" : "Yes"}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <BiCar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Parking
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{["none",""].indexOf(property?.parking) !== -1 ? "No" : "Yes"}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <Jar width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Non-Veg Allowed
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{!property?.nonVegAllowed ? "No" : "Yes"}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <WaterDrop width="2rem" height="2rem" color="#FDB813" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Water Supply
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{!property?.waterSupply ? "N/A" : property?.waterSupply}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Age of Building
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{!property?.propertyAge ? "No" : "Yes"}</p>
          </div>
        </div>
        <div className="col-span-6  space-y-4 ">
          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <AiOutlineCalendar className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Posted on date
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{day} {month} {year}</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Configuration
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{`${property?.configuration[0]} ${property?.configuration.substring(1,)}`}</p>
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Carpet Area
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{property?.carpetArea || property?.totalArea} sq.ft</p>
          </div>

          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Tower/Wing
              </span>
            </div>
            <p className="xxs:text-lg text-sm capitalize">{property?.towerName !== "N/A" ? `${property?.towerName} Wing` : "N/A"}</p>
          </div>
          <div className="flex justify-between  items-center">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Pets
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{property?.pets ? "Allowed" : "Not allowed"}</p>
          </div>
          <div className="flex justify-between  items-center ">
            <div className="flex gap-4 items-center">
              <span>
                <HiOutlineBuildingOffice2 className="w-8 h-8 text-primaryColor" />
              </span>
              <span className="font-semibold xxs:text-lg text-sm inline ">
                Launch Date
              </span>
            </div>
            <p className="xxs:text-lg text-sm">{property?.launchDate || "N/A"}</p>
          </div>
        </div>
        <div className="bg-star_bg bg-contain bg-no-repeat w-[50%] h-[150px] absolute z-[1] right-0 mt-64"></div>
      </div>
    </div>
  );
};
export default OverView;
