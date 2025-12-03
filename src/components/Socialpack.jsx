import Package from "../components/Package";
import Flex from "../components/Flex";

const Socialpack = () => {
  return (
    <>
          <div id="social" className="p-4 bg-yellow-100 rounded-2xl shadow-xl">
        <p className="text-center pb-8 font-bold text-4xl">
          <span className="text-yellow-500 underline">Social Media Management </span> Packages:
        </p>
        <Flex className={" justify-between gap-4"}>
          <Package
            quality={"Basic"}
            price={"$10"}
            green={["Custom Domain", "Admin Panel", "Revision"]}
            red={["JavaScript", "HTML"]}
            className={"hover:bg-[#83E34D] "}
            qualityclass="text-[#83E34D]"
            priceclass="group-hover:text-green-600"
            buttonclass="bg-[#83E34D] hover:bg-[#07BB38] group-hover:text-green-500"
          />
          <Package
            quality={"PRO"}
            price={"$25"}
            green={["Custom Domain", "Admin Panel", "Revision"]}
            red={["JavaScript", "HTML"]}
            className={"hover:bg-[#ff5757]"}
            qualityclass="text-[#ff5757]"
            priceclass="group-hover:text-red-700"
            buttonclass="bg-[#ff5757] hover:bg-red-600 group-hover:text-red-500"
          />
          <Package
            quality={"PLUS"}
            price={"$30"}
            green={["Custom Domain", "Admin Panel", "Revision"]}
            red={["JavaScript", "HTML"]}
            className={"hover:bg-[#fbde00]"}
            qualityclass="text-[#fbde00]"
            priceclass="group-hover:text-yellow-600"
            buttonclass="bg-[#fbde00] hover:bg-yellow-500 group-hover:text-yellow-600"
            detailclass="group-hover:text-black"
          />
        </Flex>
      </div>
    </>
  )
}

export default Socialpack