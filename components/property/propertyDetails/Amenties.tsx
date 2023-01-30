import React, { useEffect, useState } from "react";
import { BiCar, BiCycling } from "react-icons/bi";
import { MdPool } from "react-icons/md";
import { BsDoorOpen } from "react-icons/bs";
import { MdOutlineSpa } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { Scooter } from "../../SVGComponents/property/Scooter";
import { Ground } from "../../SVGComponents/property/Ground";
import { Gym } from "../../SVGComponents/property/Gym";
import { Court } from "../../SVGComponents/property/Court";
import { Yoga } from "../../SVGComponents/property/Yoga";
import { Skarting } from "../../SVGComponents/property/Skarting";
import { Flower } from "../../SVGComponents/property/Flower";
import { Browser } from "../../SVGComponents/property/Browser";
import { Store } from "../../SVGComponents/property/Store";
import { Atm } from "../../SVGComponents/property/Atm";
import { Solar } from "../../SVGComponents/property/Solar";
import { useRouter } from "next/router";
import { amenities } from "../../../utilities/amenities";

const Amenties = ({ property }: any) => {
  const router = useRouter();
  console.log(property);
  const [amenties, setAmenties] = useState("");
  useEffect(() => {
    console.log(amenties);

    if (property) {
      setAmenties(property.amenities);
    }
  }, [router.isReady]);
  return (
    <div id="amenties">
      <p className="text-2xl font-bold border-b-4 border-primaryColor inline">
        Amenities
      </p>
      <div className="mt-10 grid grid-cols-3 xl:gap-x-20 gap-x-5 gap-y-4">
        {amenities.map((item: any, index:number) => {
          if (["carParking", "bikeParking"].indexOf(item.value) !== -1) {
            if (item.value === "carParking") {
              if (["car", "both"].indexOf(property?.parking) === -1) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 text-base font-normal">{item.title}</p>
                  </div>
                );
              }
            } else {
              if (["bike", "both"].indexOf(property?.parking) === -1) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 text-base font-normal">{item.title}</p>
                  </div>
                );
              }
            }
          } else {
            if (item.value === "indoorGym") {
              if (
                property?.amenities.indoorGym ||
                property?.amenities.outdoorGym
              ) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 text-base font-normal">{item.title}</p>
                  </div>
                );
              }
            } else {
              if (property?.amenities[item.value]) {
                return (
                  <div key={index} className="w-full flex justify-start items-center">
                    {item.icon}
                    <p className="ml-4 text-base font-normal">{item.title}</p>
                  </div>
                );
              }
            }
          }
        })}
      </div>
    </div>
  );
};
export default Amenties;
