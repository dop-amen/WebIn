import React from "react";
import Flex from "./Flex";
import Package from "./Package";

const Api = () => {
  return (
    <>
      <div
        id="api"
        data-category="Custom API Creation"
        className="p-4 sm:p-6 md:p-8 bg-yellow-100 rounded-2xl shadow-xl mb-8"
      >
        <p className="text-center pb-6 sm:pb-8 font-bold text-2xl sm:text-3xl md:text-4xl">
          <span className="text-yellow-500 underline">
            Custom API & Integration
          </span>{" "}
          Packages:
        </p>

        <Flex className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-4">
          {/* BASIC */}
          <Package
            quality="Basic"
            price="$150"
            green={[
              "Up to 3 API Endpoints",
              "JSON Responses",
              "Basic Authentication",
              "Simple Documentation",
              "1 Integration with 3rd-party Service",
            ]}
            red={["Advanced Security", "Webhooks", "High Traffic Optimization"]}
            className="hover:bg-[#83E34D]"
            qualityclass="text-[#83E34D]"
            priceclass="group-hover:text-green-700"
            buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-600"
          />

          {/* PRO */}
          <Package
            quality="Pro"
            price="$400"
            green={[
              "Up to 8 API Endpoints",
              "Full Authentication & Permissions",
              "Webhooks Support",
              "Integration with 2–3 Services",
              "Detailed Documentation",
              "Error Handling & Logging",
            ]}
            red={["High Traffic Scaling", "Enterprise Security"]}
            className="hover:bg-[#ff5757]"
            qualityclass="text-[#ff5757]"
            priceclass="group-hover:text-red-700"
            buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
          />

          {/* PLUS / PREMIUM */}
          <Package
            quality="Premium"
            price="$800"
            green={[
              "Unlimited API Endpoints",
              "Advanced Authentication & Security",
              "Webhooks & Event Triggers",
              "Multi-Service Integrations",
              "Full Documentation & Examples",
              "High Traffic Ready",
              "Priority Support & Maintenance",
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

export default Api;
