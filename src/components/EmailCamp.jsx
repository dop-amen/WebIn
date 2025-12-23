import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const Email = () => {
  return (
    <>
    <div
  id="emailCamp"
  data-category="E-mail Capmpaing"
  className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
>
  <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
    <span className="text-yellow-500 underline">E-mail Campaign Strategy</span> Packages:
  </p>

  <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">

    {/* BASIC */}
    <Package
      quality="Basic"
      price="$20 / 2,000 BDT per mo"
      green={[
        "Delivery in 3 days",
        "2 Email Campaigns",
        "2 Email Designs",
        "Basic Email Copywriting",
        "Basic Segmentation",
        "Campaign Scheduling",
        "Basic Performance Report",
      ]}
      red={[
        "Automation Setup",
        "A/B Testing",
        "Advanced Design",
        "Funnels & Drip Series",
      ]}
      className="hover:bg-[#83E34D]"
      qualityclass="text-[#83E34D]"
      priceclass="group-hover:text-green-700"
      buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
    />

    {/* PRO */}
    <Package
      quality="Pro"
      price="$110 / 12,000 BDT"
      green={[
        "Delivery in 7 days",
        "5 Email Campaigns",
        "3 Email Designs",
        "Sign Up form",
        "Professional Copywriting",
        "Custom Email Templates",
        "Signup Form Integration",
        "Advanced Segmentation",
        "A/B Subject Testing",
      ]}
      red={[
        "Advanced Funnels",
        "Drip Series",
      ]}
      className="hover:bg-[#ff5757]"
      qualityclass="text-[#ff5757]"
      priceclass="group-hover:text-red-700"
      buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
    />

    {/* PLUS / PREMIUM */}
    <Package
      quality="Premium"
      price="$80 / 8,000 BDT"
      green={[
        "10 Email Campaigns",
        "7 Email Designs",
        "Pop-up and Automation",
        "Premium Custom Design",
        "Automation & Funnels",
        "Drip & Follow-up Series",
        "A/B Content Testing",
        "Spam Score Optimization",
        "Weekly Reports",
        "Delivery in 10 days"
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

export default Email;
