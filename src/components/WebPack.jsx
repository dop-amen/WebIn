import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const Web = () => {
  return (
    <div
      id="responsive_web"
      data-category="Responsive Website"
      className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
    >
      <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
        <span className="text-yellow-500 underline">Responsive Websites</span>{" "}
        Packages:
      </p>

      <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
        {/* BASIC */}
        <Package
          quality="Basic"
          price="$110 / 12,000 BDT"
          green={[
            "Up to 3 Pages",
            "Mobile Responsive",
            "Modern UI Design",
            "Contact Form",
            "Basic SEO Setup",
          ]}
          red={["Custom Animations", "Backend Integration", "Advanced SEO"]}
          className="hover:bg-[#83E34D]"
          qualityclass="text-[#83E34D]"
          priceclass="group-hover:text-green-700"
          buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
        />

        {/* PRO */}
        <Package
          quality="Pro"
          price="$220 / 25,000 BDT"
          green={[
            "Up to 6 Pages",
            "Custom UI Components",
            "Performance Optimized",
            "Form + Email Setup",
            "On-Page SEO",
          ]}
          red={["Backend Dashboard", "Payment System"]}
          className="hover:bg-[#ff5757]"
          qualityclass="text-[#ff5757]"
          priceclass="group-hover:text-red-700"
          buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
        />

        {/* PLUS */}
        <Package
          quality="Premium"
          price="$390 / 45,000 BDT"
          green={[
            "Unlimited Pages",
            "Advanced Animations",
            "API Integration",
            "High Performance Score",
            "SEO-Ready Structure",
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
  );
};

export default Web;
