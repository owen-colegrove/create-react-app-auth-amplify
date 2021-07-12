import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import { Button } from "@material-ui/core";
const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [email, setEmail] = useState(false);
  const [text, setText] = useState("");

  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  const handleSubmit = (event) => {
    console.log("event=", event);
    console.log("event.target=", event.target);
    console.log("email=", email);
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { Accept: "application/json" },
      body: JSON.stringify({ email: email }),
    };
    console.log("Submitted " + email);
    fetch(
      "https://hooks.zapier.com/hooks/catch/10404956/b3jofr2/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setText("You've joined the waitlist!");
      });
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">Join the waitlist today</h3>
          </div>
          <div className="cta-action">
            <form
              onSubmit={(x) => {
                handleSubmit(x);
              }}
            >
              <div className="d-sm-flex align-items-center form-group mb-0">
                <input
                  type="email"
                  onChange={(x) => {
                    setEmail(x.target.value);
                  }}
                  className="email form-control"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="submit"
                  className="btn btn-primary shadow mr-1"
                  value="Submit"
                />
              </div>
              {text}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
