import React, { useState } from "react";
import Text from "../components/Text";
import Container from "@/components/Container";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [value, setValue] = useState([200, 800]);

  return (
    <div id="contact" className="pt-12 px-4 sm:px-6 lg:px-0">
      {/* HEADER */}
      <div className="bg-[url(../src/assets/service.jpg)] text-white w-full bg-cover bg-center mb-10">
        <Text
          as="h1"
          className="text-center pt-12 text-3xl sm:text-4xl lg:text-5xl font-bold"
          text="Contact Us"
        />
        <Text
          as="p"
          className="text-center pt-2 pb-8 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto"
          text="Get in touch with us today and let us help you with any questions."
        />
      </div>

      {/* FORM */}
      <Container className="flex justify-center">
        <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-4 sm:p-6 bg-gray-50 shadow-xl rounded-2xl">
          <FieldSet>
            <FieldGroup>
              {/* NAME & EMAIL */}
              <Field className="px-2">
                <FieldLabel htmlFor="name" className="text-semibold text-[16px] sm:text-[18px]">
                  Your Name
                </FieldLabel>
                <Input id="name" type="text" placeholder="e.g. Max Leiter" className="w-full" />

                <FieldLabel htmlFor="email" className="text-semibold text-[16px] sm:text-[18px] mt-4">
                  Your Email
                </FieldLabel>
                <Input id="email" type="text" placeholder="e.g. max@gmail.com" className="w-full" />
              </Field>

              {/* PRICE RANGE */}
              <Field className="px-2 mt-4">
                <FieldTitle className="text-semibold text-[16px] sm:text-[18px]">
                  Price Range
                </FieldTitle>
                <FieldDescription>
                  Set your budget range ($
                  <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
                  <span className="font-medium tabular-nums">{value[1]}</span>).
                </FieldDescription>
                <Slider
                  value={value}
                  onValueChange={setValue}
                  max={1000}
                  min={0}
                  step={10}
                  className="mt-2 w-full"
                  aria-label="Price Range"
                />
              </Field>

              {/* FEEDBACK */}
              <Field className="px-2 mt-4">
                <FieldLabel htmlFor="feedback" className="text-semibold text-[16px] sm:text-[18px]">
                  Feedback
                </FieldLabel>
                <Textarea
                  id="feedback"
                  placeholder="Your feedback helps us improve..."
                  rows={4}
                  className="w-full"
                />
                <FieldDescription>Share your thoughts about our service.</FieldDescription>
              </Field>

              {/* BUTTONS */}
              <Field orientation="responsive" className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button type="submit" className="w-full sm:w-auto">Submit</Button>
                <Button type="button" variant="outline" className="w-full sm:w-auto">Cancel</Button>
              </Field>

            </FieldGroup>
          </FieldSet>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
