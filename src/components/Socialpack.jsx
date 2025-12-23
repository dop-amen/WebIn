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
            price="$17 / 2,100 BDT (7days)"
            green={[
              "2 Platform",
              "4 Posts",
              "Reporting",
              "Basic Caption Writing",
              "Hashtag Research (Basic)",
              "Page Optimization",
              "Content Scheduling",
              
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
            price="$34 / 4,100 BDT (14 days)"
            green={[
              "2 Platform",
              "10 Posts",
              "Detailed Reporting",
              "Professional Caption & CTA",
              "Advanced Hashtag Research",
              "Stories (8-10)",
              "Inbox & Comment Reply",
              "Competitor Research",
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
            price="$85 / 10,000 BDT (30 days)"
            green={[
              "FB, Instagram & LinkedIn",
              "20-24 Posts + 5 video",
              "Engaging with followers",
              "High-Converting Captions",
              "Stories (18-20)",
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
