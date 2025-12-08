import React from "react";

const Card = ({ image, title, description, tags = [], scrollToId }) => {
  const handleClick = () => {
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      <img
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
        src={image}
        alt={title}
      />

      <div className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">
          {title}
        </div>
        <p className="text-gray-700 text-sm sm:text-base">{description}</p>
      </div>

      <div className="px-4 sm:px-6 pt-3 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
