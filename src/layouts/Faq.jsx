import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div>
        <h1 className="text-center pt-[70px] text-5xl font-bold">
          FAQs
        </h1>
      </div>
      <div className="max-w-[900px] mx-auto mt-10 bg-green-50 p-4 rounded-2xl shadow-xl">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          
        >
          <AccordionItem value="item-1" className={"px-3"}>
            <AccordionTrigger className={"font-bold text-xl"}>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-600 text-base bg-white p-3 rounded-2xl">
              <p>
                Our flagship product combines cutting-edge technology with sleek
                design. Built with premium materials, it offers unparalleled
                performance and reliability.
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className={"px-3"}>
            <AccordionTrigger className={"font-bold text-xl"}>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-600 text-base bg-white p-3 rounded-2xl">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
              <p>
                All orders are carefully packaged and fully insured. Track your
                shipment in real-time through our dedicated tracking portal.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className={"px-3"}>
            <AccordionTrigger className={"font-bold text-xl"}>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-600 text-base bg-white p-3 rounded-2xl">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
              <p>
                Our hassle-free return process includes free return shipping and
                full refunds processed within 48 hours of receiving the returned
                item.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Faq;
