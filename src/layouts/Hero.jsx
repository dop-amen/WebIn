import React from "react";
import Button from "../components/Button.jsx";
import Flex from "../components/Flex.jsx";
import Container from "../components/Container.jsx";
import Text from "../components/Text.jsx";
import Image from "../components/Image.jsx";
import group from "../assets/Group 1.png";
import Marquee from "react-fast-marquee";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";
import tail from "../assets/tail.jpg";
import wp from "../assets/wp.jpg";
import boot from "../assets/boot.jpg";
import jq from "../assets/jq.jpg";
import html from "../assets/html.jpg";
import mc from "../assets/mc.jpg";
import ads from "../assets/ads.png";
import klav from "../assets/klav.png";
import fb from "../assets/fb.png";
import hub from "../assets/hub.jpg";
import brevo from "../assets/brevo.jpg";
import ig from "../assets/ig.jpg"
import ele from "../assets/ele.png"
import kad from "../assets/kad.jpg"
import nod from "../assets/nod.png"
import php from "../assets/php.png"
import lar from "../assets/lar.png"
import fir from "../assets/fir.png"
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router";

const Hero = () => {
  const techs = [js, react, wp, mc, ads, fb, ig, tail, jq, boot, html, klav, hub, brevo, ele, kad, nod, php, lar, fir];

  return (
    <div id="hero" className="pt-10">
      <Container>
        {/* MAIN HERO FLEX */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-tight lg:leading-[77px] mt-10">
              Stay ahead of the curve with our{" "}
              <span className="text-[#07BB38]">forward</span>{" "}
              <span className="text-[#E1CB04]">thinking</span>
            </p>

            <Text
              as="p"
              className="text-[#878C91] text-base sm:text-lg mt-5 lg:mr-[140px]"
              text="An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you."
            />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
              <HashLink smooth to="#contact">
                <Button className="bg-black text-white group w-full sm:w-auto">
                  <div className="flex items-center gap-2 group-hover:gap-6 duration-75">
                    <p className="group-hover:text-[22px] duration-75">
                      Book a Free Consultation
                    </p>
                    <i className="fa-solid fa-arrow-right group-hover:text-[#07BB38] duration-200"></i>
                  </div>
                </Button>
              </HashLink>
                    
                   

              <Link className="underline hover:text-blue-500 text-center sm:text-left" to="/custom-order">
                <Button className="bg-[#07BB38] hover:bg-green-600 text-white group w-full border-white sm:w-auto">
                  <div className="flex items-center gap-2 group-hover:gap-6 duration-75">
                    <p className="group-hover:text-[22px] duration-75">
                      Customize Your Order
                    </p>
                  </div>
                </Button>
              </Link>
              
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image source={group} className="w-full max-w-md mt-5" />
          </div>
        </div>
      </Container>

      {/* MARQUEE */}
      <div className="mt-12 border-t-2 border-b-2 border-gray-200 pt-4 pb-6 overflow-hidden">
        <p className="mb-3 text-center text-gray-800 text-lg sm:text-xl">
          We work with:
        </p>

        <Marquee gradient={false} speed={50}>
          <div className="flex flex-nowrap items-center lg:gap-[100px] gap-6 px-4 md:px-10">
            {techs.map((tech, idx) => (
              <div key={idx} className="shrink-0">
                <Image
                  source={tech}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
