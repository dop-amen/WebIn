import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const DomHost = () => {
  return (
    <div id="domHost" className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8">
      <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
        <span className="text-yellow-500 underline">Lead Generation</span> Packages:
      </p>
      <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
        <Package
          quality="Basic"
          price="$10"
          green={["Custom Domain", "Admin Panel", "Revision"]}
          red={["JavaScript", "HTML"]}
          className="hover:bg-[#83E34D]"
          qualityclass="text-[#83E34D]"
          priceclass="group-hover:text-green-600"
          buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-500"
        />
        <Package
          quality="PRO"
          price="$25"
          green={["Custom Domain", "Admin Panel", "Revision"]}
          red={["JavaScript", "HTML"]}
          className="hover:bg-[#ff5757]"
          qualityclass="text-[#ff5757]"
          priceclass="group-hover:text-red-700"
          buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
        />
        <Package
          quality="PLUS"
          price="$30"
          green={["Custom Domain", "Admin Panel", "Revision"]}
          red={["JavaScript", "HTML"]}
          className="hover:bg-[#fbde00]"
          qualityclass="text-[#fbde00]"
          priceclass="group-hover:text-yellow-600"
          buttonclass="bg-[#fbde00] hover:bg-yellow-500 group-hover:text-yellow-600"
          detailclass="group-hover:text-black"
        />
      </Flex>
    </div>
  );
};

export default DomHost;
