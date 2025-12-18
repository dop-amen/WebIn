import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const Social = () => {
  return (
    <>
      <div
        id="social"
        data-category="Social Media Management"
        className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
      >
        <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
          <span className="text-yellow-500 underline">
            Social Media Management
          </span>{" "}
          Packages:
        </p>

        <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
          {/* BASIC */}
          <Package
            quality="Basic"
            price="$75 / 8,000 BDT per mo"
            green={[
              "1 Platform (FB or IG)",
              "8 Posts / Month",
              "Basic Caption Writing",
              "Hashtag Research (Basic)",
              "Page Optimization",
              "Content Scheduling",
              "Monthly Report",
            ]}
            red={[
              "Ads Management",
              "Multiple Platforms",
              "Story Content",
              "Inbox Management",
            ]}
            className="hover:bg-[#83E34D]"
            qualityclass="text-[#83E34D]"
            priceclass="group-hover:text-green-700 text-[50px]"
            buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
          />

          {/* PRO */}
          <Package
            quality="Pro"
            price="$140 / 15,000 BDT per mo"
            green={[
              "FB + Instagram",
              "12-16 Posts / Month",
              "Professional Caption & CTA",
              "Advanced Hashtag Research",
              "Stories (4-6 / Month)",
              "Inbox & Comment Reply",
              "Competitor Research",
              "Detailed Monthly Report",
            ]}
            red={["Ad Budget Included", "LinkedIn Management"]}
            className="hover:bg-[#ff5757]"
            qualityclass="text-[#ff5757]"
            priceclass="group-hover:text-red-700 text-[50px]"
            buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
          />

          {/* PLUS / PREMIUM */}
          <Package
            quality="Premium"
            price="$230 / 25,000 BDT per mo"
            green={[
              "FB, Instagram & LinkedIn",
              "20-24 Posts / Month",
              "High-Converting Captions",
              "Stories (8-10 / Month)",
              "Reel / Short Video Ideas",
              "Full Inbox Management" - "Ads Management & Optimization",
              "Weekly + Monthly Reports",
            ]}
            red={["—"]}
            className="hover:bg-[#fbde00]"
            qualityclass="text-[#fbde00]"
            priceclass="group-hover:text-yellow-700 text-[50px]"
            buttonclass="bg-[#fbde00] hover:bg-yellow-500 group-hover:text-yellow-700"
            detailclass="group-hover:text-black"
          />
        </Flex>
      </div>
    </>
  );
};

export default Social;
