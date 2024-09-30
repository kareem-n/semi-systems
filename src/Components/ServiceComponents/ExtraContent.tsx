import React from "react";

interface Items {
  text: string;
  number: number;
}

interface Props {
  leftImg: string;
  slogan: string;
  title: string;
  desc: string;
  items: Items[];
}

function ExtraContent({ slogan, title, desc, items, leftImg }: Props) {
  return (
    <div className="my-36 grid grid-cols-2 gap-10 items-center">
      <div className="pr-40">
        <p className="text-pink-500">{slogan}</p>
        <h2 className="text-2xl md:text-4xl font-bold py-5">{title}</h2>

        <p className="text-xl text-gray-600">{desc}</p>

        <div className="grid grid-cols-2 gap-10 mt-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-4 flex flex-col items-center gap-y-2"
            >
              <span className="text-2xl text-theme font-bold">
               + {item.number}
              </span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <img src={leftImg} alt="" />
      </div>
    </div>
  );
}

export default ExtraContent;
