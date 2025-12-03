import React from "react";
import Text from "../components/Text";
import { useState } from "react";

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
import Container from "@/components/Container";

const Contact = () => {
  const [value, setValue] = useState([200, 800]);
  return (
    <>
      <div id="contact" className="pt-20">
        <div className="bg-[url(../src/assets/service.jpg)] text-white w-full mb-10">
          <Text
            as="h1"
            className="text-center pt-[50px] text-5xl font-bold"
            text="Contact Us"
          />
          <Text
            as="p"
            className="text-center pt-2.5 pb-[30px] text-lg text-gray-300"
            text="Get in touch with us today and let us help you with any questions."
          />
        </div>
        <Container className={" flex justify-center"}>
          <div className="w-full max-w-md p-4 bg-gray-50 shadow-xl rounded-2xl">
            <FieldSet>
              <FieldGroup>
                <Field className={"px-2"}>
                  <FieldLabel
                    htmlFor="name"
                    className={"text-semibold text-[18px]"}
                  >
                    Your Name
                  </FieldLabel>
                  <Input id="name" type="text" placeholder="e.g. Max Leiter" />
                  <FieldLabel
                    htmlFor="email"
                    className={"text-semibold text-[18px]"}
                  >
                    Your Email
                  </FieldLabel>
                  <Input
                    id="email"
                    type="text"
                    placeholder="e.g. max@gmail.com"
                  />
                </Field>

                <Field className={"px-2"}>
                  <FieldTitle className={"text-semibold text-[18px]"}>
                    Price Range
                  </FieldTitle>
                  <FieldDescription>
                    Set your budget range ($
                    <span className="font-medium tabular-nums">
                      {value[0]}
                    </span>{" "}
                    -{" "}
                    <span className="font-medium tabular-nums">{value[1]}</span>
                    ).
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

                <Field className={"px-2"}>
                  <FieldLabel
                    htmlFor="feedback"
                    className={"text-semibold text-[18px]"}
                  >
                    Feedback
                  </FieldLabel>
                  <Textarea
                    id="feedback"
                    placeholder="Your feedback helps us improve..."
                    rows={4}
                  />
                  <FieldDescription>
                    Share your thoughts about our service.
                  </FieldDescription>
                </Field>

                <Field orientation="responsive">
                  <Button type="submit">Submit</Button>
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Field>
                
              </FieldGroup>
            </FieldSet>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
