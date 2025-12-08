import React from "react";
import Container from "@/components/Container";
import biglogo from "../assets/webin.png";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[url(../src/assets/service.jpg)] text-white w-full mb-10 bg-cover bg-center">
        <h1 className="text-center pt-10 text-3xl sm:text-4xl md:text-5xl font-semibold">
          About Us
        </h1>
        <p className="text-center pt-2.5 pb-8 text-sm sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
          Welcome to WebIn, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.
        </p>
      </div>

      <Container>
        {/* About WebIn */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
          <div className="lg:w-1/2">
            <h1 className="mt-10 text-gray-700 text-2xl sm:text-3xl md:text-4xl font-semibold">
              About WebIn
            </h1>
            <p className="pt-4 text-justify text-sm sm:text-base md:text-lg">
              WebIn is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At WebIn, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
            </p>
          </div>
          <div className="lg:w-1/3">
            <img src={biglogo} className="w-full max-h-[300px] sm:max-h-[340px] object-contain" alt="WebIn Logo" />
          </div>
        </div>

        {/* Our Story */}
        <h1 className="pt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 text-center mb-6">
          Our Story
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {[
              { num: "01", title: "Design", desc: "Once upon a time, in a world driven by technology..." },
              { num: "03", title: "Project Management", desc: "In the midst of the creative and technical minds..." },
              { num: "05", title: "Client-Centric Approach", desc: "WebIn's success was not solely measured by their technical prowess..." }
            ].map((item) => (
              <div key={item.num}>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mt-5">
                  <span className="text-4xl sm:text-6xl md:text-[120px] text-green-600 font-bold mr-2">{item.num}</span>
                  {item.title}
                </h1>
                <p className="text-justify text-sm sm:text-base md:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {[
              { num: "02", title: "Engineering", desc: "Meanwhile, a team of brilliant engineers was busy crafting the backbone..." },
              { num: "04", title: "Collaboration", desc: "At WebIn, these three departments came together to form a cohesive unit..." },
              { num: "06", title: "Driving Success", desc: "With each project, WebIn's reputation grew..." }
            ].map((item) => (
              <div key={item.num}>
                <h1 className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold mt-5">
                  <span className="text-4xl sm:text-6xl md:text-[120px] text-green-600 font-bold mr-2">{item.num}</span>
                  {item.title}
                </h1>
                <p className="text-justify text-sm sm:text-base md:text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
