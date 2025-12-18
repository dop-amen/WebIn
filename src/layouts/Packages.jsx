import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Pack from "../components/Pack";
import WebPack from "../components/WebPack";
import Socialpack from "../components/Socialpack";
import LeadGen from "@/components/LeadGen";
import EmailCamp from "@/components/EmailCamp";
import DomHost from "@/components/DomHost";
import Seo from "@/components/Seo";
import Api from "@/components/Api";

const Packages = () => {
  return (
    <div id="packages" className="pt-12">
      {/* HEADER */}
      <div className="bg-[url(../src/assets/service.jpg)] text-white w-full bg-cover bg-center mb-10">
        <Text
          as="h1"
          className="text-center pt-12 text-4xl sm:text-5xl lg:text-6xl font-bold"
          text="Packages"
        />
        <Text
          as="p"
          className="text-center pt-2 pb-8 text-base sm:text-lg lg:text-xl text-gray-300"
          text="Your Digital Growth, Packaged for Success."
        />
      </div>

      <Container>
        {/* STACKED PACKAGES */}
        <Flex className="flex-col gap-10 sm:gap-14 lg:gap-16">
          <Pack />
          <WebPack />
          <Socialpack />
          <Seo/>
          <LeadGen />
          <EmailCamp />
          <DomHost />
          <Api/>
        </Flex>
      </Container>
    </div>
  );
};

export default Packages;
