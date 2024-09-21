import React from "react";
import img from "../../assets/bannerPage.png";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";

interface props {
  head: String;
}
function PageBanner(props: props) {
  return (
    <div className="relative flex items-center justify-center ">
      <div className="absolute inset-0 bg-black/50"></div>
      <img src={img} className="w-full" alt="" />
      <div className="text-white absolute text-center  flex flex-col items-center">
        <h2 className="text-5xl capitalize">{props.head}</h2>
        <div className="mt-4 flex items-center gap-x-2 text-lg">
          <Link className="text-gray-200 hover:text-white" to={"/"}>
            الصفحة الرئيسية
          </Link>
          <FaAngleDoubleLeft />
          <Link to={"/about"}>{props.head}</Link>
        </div>
      </div>
    </div>
  );
}

export default PageBanner;
