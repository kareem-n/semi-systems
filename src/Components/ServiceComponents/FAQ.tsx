import React from "react";
import { FaAngleDown } from "react-icons/fa";

interface Items {
  title: string;
  desc: string[];
}

interface Props {
  items: Items[];
}

function FAQ({ items }: Props) {

  return (
    <div className="my-20 px-48 relative">
      <div className="flex flex-col items-center gap-5">
        <h3 className="bg-green-300 text-green-600 font-semibold px-8 py-1 rounded-full">
          F.A.Q
        </h3>
        <h2 className="font-bold text-2xl md:text-4xl">الأسئلة الشائعة</h2>
        <p className="text-xl">
          نستمد نجاحنا من رضا عملائنا عن الخدمات التي نقدمها
        </p>
      </div>

      <div className="mt-10 p-2">
        {items.map((item, index) => (
          <div key={index} className="">
            <h3
              onClick={(e) => {
                if (
                  e.currentTarget.nextElementSibling?.classList.contains(
                    "max-h-0"
                  )
                ) {
                  e.currentTarget.nextElementSibling?.classList.replace(
                    "max-h-0",
                    "max-h-[200px]"
                  );
                } else {
                  e.currentTarget.nextElementSibling?.classList.replace(
                    "max-h-[200px]",
                    "max-h-0"
                  );
                }
              }}
              className="text-xl text-theme py-4 shadow-md  px-6 border rounded-full bg-white cursor-pointer font-bold flex items-center justify-between"
            >
              {item.title}
              <FaAngleDown />
            </h3>

            <div className="max-h-0 overflow-hidden m-3 rounded-2xl transition-all duration-300">
              <div className="py-3 bg-theme ">
                {item.desc.map((des, index) => (
                  <p
                    key={index}
                    className=" text-white p-1"
                  >
                    <span className="inline-block rounded-xl px-5">{des}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
