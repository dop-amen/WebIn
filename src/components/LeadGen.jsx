import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const LeadGen= () => {
  return (
    <>
    <div
  id="leadGen"
  data-category="Lead Generation"
  className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
>
  <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
    <span className="text-yellow-500 underline">Lead Generation</span> Packages:
  </p>

  <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">

    {/* BASIC */}
    <Package
      quality="Basic"
      price="$45 / 5,000 BDT per mo"
      green={[
        "300 Targeted Leads",
        "B2B or B2C (1 Niche)",
        "Name & Email Only",
        "Manual Research",
        "Basic Data Verification",
        "Excel / Google Sheet",
      ]}
      red={[
        "Phone Numbers",
        "Company Details",
        "Advanced Verification",
        "CRM Format",
      ]}
      className="hover:bg-[#83E34D]"
      qualityclass="text-[#83E34D]"
      priceclass="group-hover:text-green-700"
      buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
    />

    {/* PRO */}
    <Package
      quality="Pro"
      price="$90 / 10,000 BDT per mo"
      green={[
        "700 Targeted Leads",
        "Multiple Criteria",
        "Name, Email, Company",
        "Job Title Included",
        "Advanced Manual Research",
        "Email Verification",
        "Quality Check",
        "Excel / Google Sheet",
      ]}
      red={[
        "Phone Numbers",
        "CRM Import",
      ]}
      className="hover:bg-[#ff5757]"
      qualityclass="text-[#ff5757]"
      priceclass="group-hover:text-red-700"
      buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
    />

    {/* PLUS / PREMIUM */}
    <Package
      quality="Premium"
      price="$160 / 18,000 BDT per mo"
      green={[
        "1,500+ Targeted Leads",
        "Custom Niche & Location",
        "Full Contact Details",
        "Phone (If Available)",
        "Website / LinkedIn",
        "Premium Verification",
        "CRM-Ready Format",
        "Fast Delivery",
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

export default LeadGen;
