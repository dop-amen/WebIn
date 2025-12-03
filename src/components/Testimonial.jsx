import React from 'react'

const Testimonial = ({ text, name, role, avatar }) => {
  return (
    <>
    <div className="flex flex-col overflow-hidden shadow-xl">
      <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">

        <div className="flex-1">
          {/* Stars */}
          <div className="flex items-center">
            {Array(5).fill(0).map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-[#FDB241]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921...." />
              </svg>
            ))}
          </div>

          {/* Review Text */}
          <blockquote className="flex-1 mt-8">
            <p className="text-lg leading-relaxed text-gray-900 font-pj">
              {text}
            </p>
          </blockquote>
        </div>

        {/* User Info */}
        <div className="flex items-center mt-8">
          <img
            className="shrink-0 object-cover rounded-full w-11 h-11"
            src={avatar}
            alt={name}
          />
          <div className="ml-4">
            <p className="text-base font-bold text-gray-900 font-pj">
              {name}
            </p>
            <p className="mt-0.5 text-sm font-pj text-gray-600">
              {role}
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Testimonial