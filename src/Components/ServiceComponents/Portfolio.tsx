import React from "react";

interface Props {
  headTitle: string;
  subTitle: string;
  items: string[];
}

function Portfolio({ headTitle, subTitle, items }: Props) {
  return (
    <div className="mt-36 ">
      <div className="flex flex-col items-center text-center gap-y-3">
        <h2 className="text-2xl md:text-4xl font-bold">{headTitle}</h2>
        <p className="font-light">{subTitle}</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-9">
        {items.map((item, index) => (
          <div key={index} className="">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
