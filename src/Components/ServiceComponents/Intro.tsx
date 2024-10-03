import React from "react";
import { FaChartLine, FaCheckDouble, FaPaintBrush } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { string } from "yup";

interface Props {
  leftImg: any;
  firstContentRight: {
    slogan: string;
    title: string;
    desc: string;
  };
  rightImg: any;
  secondContentLeft: {
    slogan: string;
    title: string;
    desc: string;
  };
}

function Intro({
  leftImg,
  rightImg,
  firstContentRight,
  secondContentLeft,
}: Props) {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 items-center gap-x-10">
        <div className="">
          <p className="text-pink-500 text-md font-bold capitalize">
            {firstContentRight.slogan}
          </p>

          <h2 className="text-2xl md:ext-4xl font-bold py-2">
            {firstContentRight.title}
          </h2>

          <p className="text-gray-500 pl-20">{firstContentRight.desc}</p>
        </div>
        <div className="">
          <img src={leftImg} className="w-full" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 items-center gap-x-20 mt-20">
        <div className="p-20">
          <img src={rightImg} className="w-full" alt="" />
        </div>

        <div className="">
          <p className="text-pink-500 text-md font-bold capitalize">
            {secondContentLeft.slogan}
          </p>

          <h2 className="text-2xl md:ext-4xl font-bold py-2">
            {secondContentLeft.title}
          </h2>

          <p className="text-gray-500 pl-20">{secondContentLeft.desc}</p>
          <div className="px-20 mt-5">
            <div className="flex items-center justify-center">
              <div className="p-4 flex flex-col gap-1 items-center">
                <span className="font-bold">التحليل</span>
                <FaChartLine size={25} className="text-theme" />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold">التصميم</span>
                <FaPaintBrush className="text-theme" size={25} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="font-bold">الاختبار</span>
                <FaCheckDouble className="text-theme" size={25} />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-bold">الدعم السريع</span>

                <RiCustomerService2Fill size={25} className="text-theme" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
