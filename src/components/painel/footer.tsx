"use client";

import Image from "next/image";
import { CurrentDate, CurrentTime } from "./current-datetime";

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between px-5 py-3 bg-[#111B52]">
      <div className="flex items-center space-x-5">
        <span>
          <Image
            src="/svgs/navigation/1.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </span>
        <span>
          <Image
            src="/svgs/navigation/2.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </span>
        <span>
          <Image
            src="/svgs/navigation/3.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </span>
        <span>
          <Image
            src="/svgs/navigation/4.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </span>
        <span>
          <Image
            src="/svgs/navigation/5.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
        </span>
      </div>

      <div className="border-r pr-2 flex items-end flex-col">
        <span className="text-sm font-bold">current state</span>
        <span className="text-sm font-bold">Far Field Pointing Deorbit</span>
      </div>

      <div className="border-l pl-2 flex items-start flex-col">
        <span className="text-sm font-bold">current state</span>
        <span className="text-sm font-bold">Far Field Pointing Deorbit</span>
      </div>

      <div className="flex items-center space-x-8">
        {/* 1  */}
        <div className="flex items-center space-x-2">
          <Image src="/svgs/controls/1.svg" alt="Logo" className="w-10 h-10" />
          <span className="text-sm font-bold text-[#20FBFD]">SPX</span>
        </div>

        {/* 2 */}
        <div className="flex items-center space-x-3">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/svgs/controls/2.svg"
              alt="Logo"
              className="w-4 h-4"
              width={40}
              height={40}
            />
            <Image
              src="/svgs/controls/3.svg"
              alt="Logo"
              className="w-4 h-4"
              width={40}
            />
            height={40}
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="text-sm font-bold text-[#20FBFD] border-b-2  pb-1 border-[#20FBFD]">
              22:23
            </span>
            <span className="text-sm font-bold text-[#20FBFD]">GND</span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span
              className="text-sm font-bold text-[#20FBFD] 
             border-b-2  pb-1 border-[#20FBFD]"
            >
              0.00
            </span>
            <span className="text-sm font-bold text-[#20FBFD]">TDRS</span>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-center space-x-2">
          <Image
            src="/svgs/controls/1.svg"
            alt="Logo"
            className="w-10 h-10"
            width={40}
            height={40}
          />
          <span className="font-bold text-gray-500">ISS</span>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/svgs/controls/4.svg"
              alt="Logo"
              className="w-4 h-4"
              width={40}
              height={40}
            />
            <Image
              src="/svgs/controls/5.svg"
              alt="Logo"
              className="w-4 h-4"
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <CurrentDate />
          <CurrentTime />
        </div>
      </div>
    </footer>
  );
};
