import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="pt-12 px-4 sm:px-6 lg:px-0">
      {/* HEADING */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
        FAQs
      </h1>

      {/* ACCORDION CONTAINER */}
      <div className="max-w-[900px] mx-auto mt-10 bg-green-50 p-4 sm:p-6 rounded-2xl shadow-xl">
        <Accordion type="single" collapsible className="w-full">

          <AccordionItem value="item-1" className="px-1 sm:px-3">
            <AccordionTrigger className="font-bold text-lg sm:text-xl">
              What services do you provide?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-gray-600 text-sm sm:text-base bg-white p-3 sm:p-4 rounded-2xl">
              <p>
                We offer digital marketing, web design, development, lead generation, and hosting services
              </p>
              <p>
                Key features include advanced processing capabilities, and an
                intuitive user interface designed for both beginners and
                experts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="px-1 sm:px-3">
            <AccordionTrigger className="font-bold text-lg sm:text-xl">
              How long does delivery take?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-gray-600 text-sm sm:text-base bg-white p-3 sm:p-4 rounded-2xl">
              <p>
                Delivery time depends on the project scope, usually 3-7 days.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="px-1 sm:px-3">
            <AccordionTrigger className="font-bold text-lg sm:text-xl">
              Revision Policy
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3 sm:gap-4 text-gray-600 text-sm sm:text-base bg-white p-3 sm:p-4 rounded-2xl">
              <p>
                We want you to be fully satisfied with our work. Each package comes with a set number of revisions so you can refine the project until it meets your expectations.
              </p>
              <p>
                Our hassle-free revision process ensures your feedback is implemented promptly, with all revisions handled within the agreed timeframe. Any requests beyond the included revisions are quoted separately.
              </p>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
