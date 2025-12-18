import Package from "../components/Package";
import Flex from "../components/Flex";

const Pack = () => {
  return (
    <>
      <div
        id="wordpress-section"
        data-category="Wordpress"
        className="p-4 bg-blue-50 rounded-2xl shadow-xl"
      >
        <p className="text-center pb-8 font-bold text-4xl">
          <span className="text-blue-600 underline">WordPress</span> Packages:
        </p>

        <Flex className="flex-wrap justify-center gap-6 md:justify-between">
          {/* BASIC */}
          <Package
            quality="Basic"
            price="$110 / 12,000 BDT"
            green={[
              "Up to 5 Pages",
              "Premium Theme Setup",
              "Responsive Design",
              "Basic SEO Setup",
              "Contact Form Integration",
            ]}
            red={[
              "E-commerce",
              "Custom Design",
              "Advanced SEO",
              "Payment Gateway",
            ]}
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
              "Up to 10 Pages",
              "Custom Design & Layout",
              "Speed Optimization",
              "On-Page SEO",
              "Lead & Contact Forms",
            ]}
            red={["E-commerce", "Payment Gateway", "Advanced Firewall"]}
            className="hover:bg-[#ff5757]"
            qualityclass="text-[#ff5757]"
            priceclass="group-hover:text-red-700"
            buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
          />

          {/* PLUS / PREMIUM */}
          <Package
            quality="Premium"
            price="$390 / 45,000 BDT"
            green={[
              "Unlimited Pages",
              "WooCommerce Setup",
              "Payment Gateway",
              "Advanced Speed Optimization",
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
    </>
  );
};

export default Pack;
