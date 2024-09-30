import React from "react";

interface Props {
  asset: any;
  headTitle: string;
  subTitle: string;
  options: object[];
}

function Important({ headTitle, subTitle, options, asset }: Props) {
  return (
    <div className="bg-gray-200 py-14 px-48">
      <div className="">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold ">{headTitle}</h2>
          <p className="mt-3 font-light text-lg">{subTitle}</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-x-10 mt-20">
          <div className="row-span-3 col-span-1 row-start-1 col-start-2 flex items-center">
            <img src={asset} alt="" />
          </div>
          {options.map((item, index) => (
            <div key={index} className="relative p-3">
              <div className="absolute left-full h-full flex flex-col items-center opacity-50">
                <span className="w-2 h-2 rounded-full inline-block bg-black"></span>
                <span className="inline-block h-full w-[1px] bg-black"></span>
              </div>
              <h3 className="font-bold text-2xl py-3">{item.title}</h3>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Important;
