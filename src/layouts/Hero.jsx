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
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  const techs = [js, react, tail, boot, html, jq, wp, mc, ads];

  return (
    <>
      <div id="hero">
        <Container>
          <Flex>
            <div className="w-1/2">
              <p className="text-[72px] font-semibold leading-[77px] mt-[120px]">
                Stay ahead of the curve with our{" "}
                <span className="text-[#07BB38]">forward</span>{" "}
                <span className="text-[#E1CB04]">thinking</span>
              </p>
              <Text
                as="p"
                className="text-[#878C91] text-[16px] mt-[30px] mr-[140px]"
                text="An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you."
              />
              <Flex className={" mt-[50px] items-center gap-[50px]"}>
                <HashLink to="#contact">
<Button className={" bg-black text-white group"}>
                  <Flex
                    className={"items-center gap-2 hover:gap-6 duration-75"}
                  >
                    
                    <p className="group-hover:text-[22px] duration-75">
                      Talk to us
                    </p>
                    <i class="fa-solid fa-arrow-right group-hover:text-[#07BB38] duration-200"></i>
                  </Flex>
                </Button>
                    </HashLink>
                
                <a href="/about" className="underline hover:text-blue-500">
                  What does WebIn do?
                </a>
              </Flex>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              <Image source={group} className={"mt-5 "} />
            </div>
          </Flex>
        </Container>

        <div className="mt-12 border-t-2 border-b-2 border-gray-200 pt-4 pb-6">
          <p className=" mb-3 text-center text-gray-800 text-[23px]">
            We work with:
          </p>

          <Marquee gradient={false} speed={50}>
            <div className="flex justify-between w-full">
              {techs.map((tech, idx) => (
                <div key={idx} className="mx-15">
                  <Image source={tech} className="w-16 h-16 object-contain" />
                </div>
              ))}
            </div>
          </Marquee>


        </div>
      </div>
    </>
  );
};

export default Hero;
