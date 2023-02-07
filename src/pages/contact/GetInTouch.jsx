import React from "react";
import {
  HeadingSection,
  InputPlain,
  PlainButton,
  TextAreaPlain,
} from "../../inc/components/commons";

const GetInTouch = () => {
  return (
    <div>
      <HeadingSection
        text="GET IN TOUCH"
        subTitle="Drop Us Your Query And We Will Get Back To You As Soon As Possible"
      />
      <div className="contact-form my-12">
        <div className="grid grid-cols-12 items-center justify-center gap-4">
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Name"
              name="name"
              error={true}
              errorText="Please Enter Your Name"
              onChange={null}
              onBlur={null}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Email"
              name="email"
              type="email"
              error={true}
              errorText="Please Enter Your Email"
              onChange={null}
              onBlur={null}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Phone"
              name="phone"
              error={true}
              errorText="Please Enter Your Phone Number"
              onChange={null}
              onBlur={null}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <InputPlain
              placeholder="Address"
              name="address"
              error={true}
              errorText="Please Enter Your Address"
              onChange={null}
              onBlur={null}
            />
          </div>
          <div className="col-span-12">
            <TextAreaPlain
              placeholder="Write Your Message Here"
              name="message"
              error={true}
              errorText="Please Enter Your Message"
              onChange={null}
              onBlur={null}
            />
          </div>
          <div className="col-span-12">
            <PlainButton
              onClick={() => alert("submit")}
              text="Submit"
              icon="fa fa-arrow-right"
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
