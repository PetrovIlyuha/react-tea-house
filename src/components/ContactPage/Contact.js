import React from "react";
import Title from "../Title";
import styled from "styled-components";

export default function Contact() {
  return (
    <StyledContactSection className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/dnamix1@gmail.com"
            method="post"
          >
            <div className="from-group mt-2">
              <input
                type="text"
                placeholder="John Smith"
                name="firstName"
                className="form-control"
              />
            </div>
            <div className="from-group mt-2">
              <input
                type="email"
                placeholder="test@gmail.com"
                name="email"
                className="form-control"
              />
            </div>
            <div className="from-group mt-2">
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="10"
                className="form-control mt-5"
                placeholder="Yout message Text..."
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                className="form-control bg-primary text-white"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.section`
  box-shadow: -1px -10px 20px -4px rgba(0, 0, 0, 0.75);
`;
