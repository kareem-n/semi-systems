import React from "react";

interface items {
  text: string;
  icon: JSX.Element;
}

interface Props {
  headTitle: string;
  subTitle: string;
  items: items[];
}

function WhyChooseUs({ headTitle, subTitle, items }: Props) {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold">{headTitle}</h2>
        <p className="py-3 font-light">{subTitle}</p>
      </div>
      <div className="mt-10 grid grid-cols-2  md:grid-cols-4 gap-5">
        {items.map((item, index) => (
          <div key={index} className="bg-white shadow-xl rounded-lg flex flex-col gap-y-3 items-center py-5">
            <span>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
