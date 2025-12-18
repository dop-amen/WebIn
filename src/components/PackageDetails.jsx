import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Flex from "./Flex";

const PackageDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // get package info from state
  const { category, quality, price, green, red } = location.state;

  const handlePurchase = () => {
    navigate("/checkout", { state: { category, quality, price, green, red } });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl">
      <p className="text-center text-l sm:text-xl md:text-2xl font-extrabold text-gray-800 mb-2">{category}</p>
      <h1 className="text-4xl font-bold text-center mb-4">{quality}</h1>
      <p className="text-2xl text-center mb-6">{price}</p>

      <Flex className="flex-col sm:flex-row gap-6 mb-6">
        <div className="flex flex-col sm:w-1/2">
          {green.map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <i className="fa-sharp fa-solid fa-check text-green-500 mt-1"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:w-1/2">
          {red.map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <i className="fa-solid fa-xmark text-red-500 mt-1"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Flex>

      <div className="flex justify-center">
        <button
          onClick={handlePurchase}
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-semibold"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
