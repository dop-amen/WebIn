import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const Seo = () => {
  return (
    <>
      <div
        id="seo"
        data-category="SEO"
        className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
      >
        <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
          <span className="text-yellow-500 underline">SEO</span> Packages:
        </p>

        <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
          {/* BASIC */}
          <Package
            quality="Basic"
            price="$65 / mo"
            green={[
              "Website SEO Audit",
              "Keyword Research (5-8)",
              "Basic On-Page SEO",
              "Meta Title & Description",
              "Google Search Console Setup",
              "Basic Technical Fix",
              "Monthly Ranking Report",
            ]}
            red={[
              "Backlinks",
              "Advanced Technical SEO",
              "Content Optimization",
            ]}
            className="hover:bg-[#83E34D]"
            qualityclass="text-[#83E34D]"
            priceclass="group-hover:text-green-700"
            buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
          />

          {/* PRO */}
          <Package
            quality="Pro"
            price="$125 / mo"
            green={[
              "Full Website Audit",
              "Keyword Research (10-15)",
              "Complete On-Page SEO",
              "Technical SEO Optimization",
              "Content Optimization",
              "Internal Linking Strategy",
              "High-Quality Backlinks (5-10)",
              "Monthly Performance Report",
            ]}
            red={["Local / E-commerce SEO"]}
            className="hover:bg-[#ff5757]"
            qualityclass="text-[#ff5757]"
            priceclass="group-hover:text-red-700"
            buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
          />

          {/* PLUS / PREMIUM */}
          <Package
            quality="Premium"
            price="$220 / mo"
            green={[
              "Advanced SEO Audit & Strategy",
              "Keyword Research (20+)",
              "Full On-Page & Technical SEO",
              "Content Strategy & Optimization",
              "Competitor Analysis",
              "High-Authority Backlinks (15-25)",
              "Local / E-commerce SEO",
              "Weekly & Monthly Detailed Report",
            ]}
            red={["—"]}
            className="hover:bg-[#fbde00]"
            qualityclass="text-[#fbde00]"
            priceclass="group-hover:text-yellow-700"
            buttonclass="bg-[#fbde00] hover:bg-yellow-500 group-hover:text-yellow-700"
            detailclass="group-hover:text-black"
          />
        </Flex>
      </div>
    </>
  );
};

export default Seo;
