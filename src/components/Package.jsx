import Flex from "./Flex";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PREVIEW_COUNT = 3;

const Package = ({
  category,
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
  const [open, setOpen] = useState(false);

  const handlePurchase = (event) => {
    const parent = event.currentTarget.closest("[data-category]");
    const category = parent ? parent.getAttribute("data-category") : "Unknown";

    navigate("/checkout", { state: { category, quality, price, green, red } });
  };

  const handleViewDetails = (event) => {
    const parent = event.currentTarget.closest("[data-category]");
    const category = parent ? parent.getAttribute("data-category") : "Unknown";

    navigate("/package-details", {
      state: { category, quality, price, green, red },
    });
  };

  const visibleGreen = open ? green : green.slice(0, PREVIEW_COUNT);

  return (
    <div
      data-category={category}
      className={`w-full sm:w-[45%] md:w-[30%] hover:scale-105 p-6 sm:p-8 bg-white ${className} rounded-2xl shadow-xl group transition-all duration-150 relative`}
    >
      <button
        onClick={handleViewDetails}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-4 text-sm sm:text-base font-bold hover:bg-white"
        title="View Details"
      >
        i
      </button>

      {/* Price and Quality */}
      <div className="text-center mb-6">
        <p
          className={`${qualityclass} text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none mb-1 group-hover:text-white`}
        >
          {quality}
        </p>
        <p
          className={`${priceclass} text-l sm:text-xl md:text-2xl font-extrabold text-gray-800`}
        >
          {price}
        </p>
      </div>

      {/* Features */}
      <Flex className="flex-col sm:flex-row pb-6 group-hover:text-white">
        <div className="flex flex-col sm:w-1/2">
          {visibleGreen.map((item, i) => (
            <div
              key={i}
              className={`${detailclass} flex items-start gap-2 px-2 sm:px-3 py-1 text-sm sm:text-base font-semibold mb-2`}
            >
              <i className="fa-sharp fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
              <span className="leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {open && (
          <div className="flex flex-col sm:w-1/2">
            {red.map((item, i) => (
              <div
                key={i}
                className={`${detailclass} flex items-start gap-2 px-2 sm:px-3 py-1 text-sm sm:text-base font-semibold mb-2`}
              >
                <i className="fa-solid fa-xmark text-red-500 mt-0.5 shrink-0"></i>
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        )}
      </Flex>

      {/* Toggle (no styling change) */}
      {(green.length > PREVIEW_COUNT || red.length > 0) && (
        <button onClick={() => setOpen(!open)} className="mb-4 ">
          {open ? "Hide features ↑" : "View all features ↓"}
        </button>
      )}

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
