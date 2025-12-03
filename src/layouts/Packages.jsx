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

const Packages = () => {
  return (
    <>
      <div id="packages" className="pt-[50px]">
        <div className='bg-[url(../src/assets/service.jpg)] text-white w-full mb-10'>
          <Text as="h1" className="text-center pt-[50px] text-5xl font-bold" text="Packages" />
          <Text as="p" className="text-center pt-2.5 pb-[30px] text-lg text-gray-300" text="Your Digital Growth, Packaged for Success." />
        </div>
        <Container>
          <Flex  className={"flex-col gap-[60px]"}>
            <Pack/>
            <WebPack/>
            <Socialpack/>
            <LeadGen/>
            <EmailCamp/>
            <DomHost/>
          </Flex>
          
        </Container>
      </div>
    </>
  );
};

export default Packages;
