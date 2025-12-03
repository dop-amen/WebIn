import Flex from "./Flex";
import { useNavigate } from "react-router-dom";

const Package = ({ quality, price, green = [], red = [], className, qualityclass='', priceclass='', buttonclass='', detailclass='' }) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/checkout", {
      state: { quality, price, green, red }
    });
  };

  return (
    <div className={`w-full max-w-sm hover:scale-105 p-8 bg-white ${className} rounded-xl shadow-xl group transition-all duration-100`}>
      {/* Price and Credits Section */}
      <div className="text-center mb-6">
        <p className={`${qualityclass} text-5xl font-extrabold leading-none mb-1 group-hover:text-white`}>
          {quality}
        </p>
        <p className={`${priceclass} text-4xl font-extrabold text-gray-800`}>
          {price}
        </p>
      </div>

      {/* Description Section */}
      <Flex className={"pb-6 group-hover:text-white"}>
        <div className="flex flex-col w-1/2">
          {green.map((item, index) => (
            <div key={index} className={`${detailclass} px-3 py-1 text-sm font-semibold mb-2`}>
              <i className="fa-sharp fa-solid fa-check text-green-500"></i> {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/2">
          {red.map((item, index) => (
            <div key={index} className={`${detailclass} px-3 py-1 text-sm font-semibold mb-2`}>
              <i className="fa-solid fa-xmark text-red-500"></i> {item}
            </div>
          ))}
        </div>
      </Flex>

      {/* Button Section */}
      <div className="flex flex-col items-center">
        <button
          onClick={handlePurchase}
          className={`${buttonclass} w-full py-4 mb-3 text-xl font-semibold text-white hover:text-white group-hover:bg-white rounded-full transition duration-300 shadow-lg shadow-cyan-200/50`}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Package;
