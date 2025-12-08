import Flex from "./Flex";
import { useNavigate } from "react-router-dom";

const Package = ({
  quality,
  price,
  green = [],
  red = [],
  className = "",
  qualityclass = "",
  priceclass = "",
  buttonclass = "",
  detailclass = "",
}) => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/checkout", { state: { quality, price, green, red } });
  };

  return (
    <div
      className={`w-full sm:w-[45%] md:w-[30%] hover:scale-105 p-6 sm:p-8 bg-white ${className} rounded-2xl shadow-xl group transition-all duration-150`}
    >
      {/* Price and Quality */}
      <div className="text-center mb-6">
        <p
          className={`${qualityclass} text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none mb-1 group-hover:text-white`}
        >
          {quality}
        </p>
        <p
          className={`${priceclass} text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800`}
        >
          {price}
        </p>
      </div>

      {/* Features */}
      <Flex className="flex-col sm:flex-row pb-6 group-hover:text-white">
        <div className="flex flex-col sm:w-1/2">
          {green.map((item, i) => (
            <div
              key={i}
              className={`${detailclass} px-2 sm:px-3 py-1 text-sm sm:text-base font-semibold mb-2`}
            >
              <i className="fa-sharp fa-solid fa-check text-green-500 mr-1"></i>
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:w-1/2">
          {red.map((item, i) => (
            <div
              key={i}
              className={`${detailclass} px-2 sm:px-3 py-1 text-sm sm:text-base font-semibold mb-2`}
            >
              <i className="fa-solid fa-xmark text-red-500 mr-1"></i>
              {item}
            </div>
          ))}
        </div>
      </Flex>

      {/* Button */}
      <div className="flex flex-col items-center">
        <button
          onClick={handlePurchase}
          className={`${buttonclass} w-full py-3 sm:py-4 text-lg sm:text-xl font-semibold text-white hover:text-white group-hover:bg-white rounded-full transition duration-300 shadow-lg`}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Package;
