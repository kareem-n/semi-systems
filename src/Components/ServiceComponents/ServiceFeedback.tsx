import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";

interface Items {
  img: string;
  name: string;
  desc: string;
}

interface Props {
  title: string;
  desc: string;
  items: Items[];
}

function ServiceFeedback({ title, desc, items }: Props) {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={
          "bg-theme hover:bg-themeHovered cursor-pointer text-white absolute left-full top-1/2 p-2 -translate-x-1/2 -translate-y-1/2 rounded-full z-40"
        }
        // style={{...style , display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaAngleRight />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={
          "bg-theme hover:bg-themeHovered cursor-pointer text-white absolute left-0 top-1/2 p-2 -translate-x-1/2 -translate-y-1/2 rounded-full z-40"
        }
        // style={{...style , display: "block", background: "red" }}
        onClick={onClick}
      >
        <FaAngleLeft />
      </div>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="mb-20 py-48 relative">
      <div className="absolute w-full -top-1/3 left-0 rotate-[3deg]">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1600 1354"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1" clip-path="url(#clip0_663_21)">
            <path
              d="M-555.598 1246.95C-559.543 1223.68 -546.122 881.905 -421.782 598.924C-310.168 345.266 -50.6165 200.697 253.161 383.01C578.647 578.404 859.401 598.053 1085.78 541.055C1309.2 484.545 1457.77 314.274 1524.5 205.699C1669.32 -28.9325 1883.25 116.199 1808.1 424.907C1772.65 568.51 1679.18 608.659 1517.21 623.56C1347.91 639.135 1097.78 606.074 750.835 673.45C416.245 738.682 39.7193 895.345 -172.006 1094.76C-397.333 1307.16 -522.564 1450 -555.598 1246.95Z"
              fill="url(#paint0_linear_663_21)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_663_21"
              x1="1700"
              y1="1062.32"
              x2="-504.332"
              y2="379.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#5D50C6" />
              <stop offset="1" stop-color="#F85E9F" />
            </linearGradient>
            <clipPath id="clip0_663_21">
              <rect
                width="2506.2"
                height="958.638"
                fill="white"
                transform="translate(-694 407.874) rotate(-9.36634)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative px-48">
        <div className="flex flex-col items-center gap-y-3">
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-xl">{desc}</p>
        </div>

        <div className="mt-10 px-20">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div className=" pb-4">
                <div className="flex flex-col items-center gap-y-4">
                  <img src={item.img} alt="" />

                  <h3 className="text-theme text-xl font-semibold">
                    {item.name}
                  </h3>

                  <p className="px-20">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </div>
  );
}

export default ServiceFeedback;
