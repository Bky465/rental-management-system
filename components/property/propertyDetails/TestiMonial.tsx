import React from "react";
import { Star } from "../../SVGComponents/property/Star";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import Review from "../../Modal/Review/ReviewModal";
import { reviews } from "../../../utilities/amenities";

const TestiMonial = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [viewAll, setviewAll] = useState(false);
  const [nextEl, setNextel] = useState<HTMLElement | null>(null);
  const [isOpen, setisOpen] = useState(false);
  const reduxData = useSelector((state: any) => {
    return state.getReviewsData;
  });

  const [review, setReview] = useState(undefined);

  console.log("reduxData: ", reduxData);

  return (
    <>
      <Review isOpen={isOpen} setIsOpen={setisOpen} review={review} setReview={setReview} />
      {reduxData.reviews?.length > 0 && (
        <div className="mt-10 mb-20 relative">
          <button
            onClick={() => setviewAll(!viewAll)}
            className="text-base absolute right-0 "
          >
            {" "}
            {viewAll ? "View Less" : "View All"}
          </button>
        </div>
      )}
      {viewAll ? (
        <div
          id="review"
          className="mt-24 bg-white relative h-[45rem] overflow-y-auto overflow-x-hidden  grid grid-cols-12  lg:gap-10  gap-5 lg1:p-32 xxs:p-16 p-4"
        >
          {reduxData.reviews?.map((review: any, index: number) => {
            // console.log("review: ", review);
            let avgRating: Number =
              (review?.overall +
                review?.amenitiesAndFacilities +
                review?.constructionQuality +
                review?.greenSpaces +
                review?.connectivity +
                review?.rwa) /
              6;
            return (
              <div
                key={review?._id}
                className="base:col-span-6 col-span-12 lg1:py-4 lg1:px-10 p-2 border-2 border-secondaryColor  bg-[#F3F3F3] rounded-md flex flex-col z-10"
              >
                <div className="flex items-center ">
                  <div className="rounded-full bg-[#D9D9D9] capitalize text-[#757575] xs:text-3xl text-xl xs:w-16 w-10 xs:h-16 h-10 flex justify-center items-center">
                    {review.name.substring(0, 1)}
                  </div>
                  <p className=" text-xl ml-2">{review.name}</p>
                  <div className=" ml-auto">
                    <div className="flex gap-1">
                      <Star
                        width="1.5rem"
                        height="1.5rem"
                        index={0}
                        onStarClick={() => {}}
                        onStarHover={() => {}}
                        onStarBlur={() => {}}
                        ratings={avgRating}
                      />
                      <Star
                        width="1.5rem"
                        height="1.5rem"
                        index={1}
                        onStarClick={() => {}}
                        onStarHover={() => {}}
                        onStarBlur={() => {}}
                        ratings={avgRating}
                      />
                      <Star
                        width="1.5rem"
                        height="1.5rem"
                        index={2}
                        onStarClick={() => {}}
                        onStarHover={() => {}}
                        onStarBlur={() => {}}
                        ratings={avgRating}
                      />
                      <Star
                        width="1.5rem"
                        height="1.5rem"
                        index={3}
                        onStarClick={() => {}}
                        onStarHover={() => {}}
                        onStarBlur={() => {}}
                        ratings={avgRating}
                      />
                      <Star
                        width="1.5rem"
                        height="1.5rem"
                        index={4}
                        onStarClick={() => {}}
                        onStarHover={() => {}}
                        onStarBlur={() => {}}
                        ratings={avgRating}
                      />
                    </div>
                    <p className=" text-start mt-2 text-secondaryColor font-semibold ">
                      Day/Month/Year
                    </p>
                  </div>
                </div>
                <div
                  className="mt-5 font-medium  xs:text-base text-sm capitalize cursor-pointer"
                  onClick={() => {
                    setisOpen(true);
                    setReview(review);
                  }}
                >
                  {review.likes.substring(0, 200)}...
                  <span className="font-[600]">Read More</span>
                </div>
                <div className=" mt-5  font-medium  text-base capitalize">
                  <p>{review.name}</p>
                  <p>{review.role}</p>
                </div>
              </div>
            );
          })}
          <div className="bg-star_bg bg-cover bg-no-repeat w-[40%] h-[26%]  absolute right-0 top-0 z-0"></div>
        </div>
      ) : reduxData.reviews?.length === 0 ? (
        // <div className="text-red-400">No Reviews</div>
        <></>
      ) : (
        <div id="review" className="mt-24 relative ">
          <Swiper
            breakpoints={{
              1350: {
                slidesPerView: 3,
              },

              900: {
                slidesPerView: 2,
              },
            }}
            modules={[Navigation]}
            spaceBetween={10}
            navigation={{ prevEl, nextEl }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {reduxData.reviews?.map((review: any) => {
              let avgRating: Number =
                (review?.overall +
                  review?.amenitiesAndFacilities +
                  review?.constructionQuality +
                  review?.greenSpaces +
                  review?.connectivity +
                  review?.rwa) /
                6;
              return (
                <SwiperSlide key={review?._id}>
                  <div className="xs:py-4 xs:px-6 py-2 px-5 border-2 border-secondaryColor  bg-[#F3F3F3] w-fit rounded-md flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full bg-[#D9D9D9] capitalize text-[#757575] xs:text-3xl text-xl xs:w-12 w-10 xs:h-12 h-10 flex justify-center items-center">
                        {review.name.substring(0, 1)}
                      </div>
                      <p className=" text-xl ml-2 mr-16">{review.name}</p>
                      <div className=" ml-auto">
                        <div className="flex gap-1">
                          <Star
                            width="1.5rem"
                            height="1.5rem"
                            index={0}
                            onStarClick={() => {}}
                            onStarHover={() => {}}
                            onStarBlur={() => {}}
                            ratings={avgRating}
                          />
                          <Star
                            width="1.5rem"
                            height="1.5rem"
                            index={1}
                            onStarClick={() => {}}
                            onStarHover={() => {}}
                            onStarBlur={() => {}}
                            ratings={avgRating}
                          />
                          <Star
                            width="1.5rem"
                            height="1.5rem"
                            index={2}
                            onStarClick={() => {}}
                            onStarHover={() => {}}
                            onStarBlur={() => {}}
                            ratings={avgRating}
                          />
                          <Star
                            width="1.5rem"
                            height="1.5rem"
                            index={3}
                            onStarClick={() => {}}
                            onStarHover={() => {}}
                            onStarBlur={() => {}}
                            ratings={avgRating}
                          />
                          <Star
                            width="1.5rem"
                            height="1.5rem"
                            index={4}
                            onStarClick={() => {}}
                            onStarHover={() => {}}
                            onStarBlur={() => {}}
                            ratings={avgRating}
                          />
                        </div>
                        <p className=" text-start mt-2 text-secondaryColor font-semibold ">
                          Day/Month/Year
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-5 font-medium  xs:text-base text-sm capitalize cursor-pointer"
                      onClick={() => {
                        setisOpen(true);
                        setReview(review);
                      }}
                    >
                      {review.likes.substring(0, 200)}...
                      <span className="font-[600]">Read More</span>
                    </div>
                    <div className=" mt-5  font-medium  text-base capitalize">
                      <p>{review.name}</p>
                      <p>{review.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="absolute p-3 left-[-23px] top-[43%] first-letter: z-10 rounded-full bg-[#D9D9D9]"
            ref={(node) => setPrevEl(node)}
          >
            <ChevronLeftIcon className="w-6 h-6 text-[#757575] " />
          </button>
          <button
            className="absolute p-3  top-[43%]  right-[-24px] z-10 rounded-full bg-black"
            ref={(node) => setNextel(node)}
          >
            <ChevronRightIcon className="w-6 h-6 text-white " />
          </button>
        </div>
      )}

      {viewAll && (
        <div className="bg-star_bg bg-contain bg-no-repeat w-[40%] h-[26%]  absolute left-0 z-0"></div>
      )}
    </>
  );
};
export default TestiMonial;
