import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const DomHost = () => {
  return (
    <div
      id="domHost"
      data-category="Domain & Hosting"
      className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
    >
      <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
        <span className="text-yellow-500 underline">Domain & Hosting</span>{" "}
        Packages:
      </p>

      <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
        {/* BASIC */}
        <Package
          quality="Basic"
          price="$50 / yr"
          green={[
            "1 Domain Registration (.com/.net)",
            "Shared Hosting (1 Website)",
            "5 GB SSD Storage",
            "10 GB Bandwidth / Month",
            "1 Email Account",
            "cPanel Access",
            "Monthly Backups",
            "Standard Support",
          ]}
          red={["SSL Certificate", "Unlimited Emails", "Priority Support"]}
          className="hover:bg-[#83E34D]"
          qualityclass="text-[#83E34D]"
          priceclass="group-hover:text-green-700"
          buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
        />

        {/* PRO */}
        <Package
          quality="Pro"
          price="$90 / yr"
          green={[
            "1 Domain Registration + Free Privacy",
            "Shared Hosting (3 Websites)",
            "20 GB SSD Storage",
            "100 GB Bandwidth / Month",
            "5 Email Accounts",
            "SSL Certificate Included",
            "Daily Backups",
            "Priority Support",
          ]}
          red={["Dedicated IP", "Advanced Security Add-ons"]}
          className="hover:bg-[#ff5757]"
          qualityclass="text-[#ff5757]"
          priceclass="group-hover:text-red-700"
          buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
        />

        {/* PLUS / PREMIUM */}
        <Package
          quality="Premium"
          price="$160 / yr"
          green={[
            "Domain Registration + Privacy + Premium TLDs",
            "VPS Hosting (Unlimited Websites)",
            "100 GB SSD Storage",
            "Unlimited Bandwidth",
            "Unlimited Email Accounts",
            "SSL + Security Suite",
            "Daily + Weekly Backups",
            "24/7 Priority Support",
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

export default DomHost;
