import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "A new bank for a new age",
    paragraph:
      "Algobank is creating an algorithmic money market on Algorand.  By partnering with Circle we will provide direct fiat on-ramping to our non-custodial high yield savings account. ",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <Image
                    src={require("./../../assets/images/usd2.png")}
                    alt="Features tile icon 01"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="features-tiles-item-content">
                  <br />
                  <h4 className="mt-0 mb-8">Convert your USD</h4>
                  <p className="m-0 text-sm">
                    On-ramp your USD directly into USDC on Algorand network
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <Image
                    src={require("./../../assets/images/USDC.png")}
                    alt="Features tile icon 01"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="features-tiles-item-content">
                  <br />
                  <h4 className="mt-0 mb-8">Earn on USDC</h4>
                  <p className="m-0 text-sm">
                    Earn lending interest + rewards in BANK tokens
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <Image
                    src={require("./../../assets/images/algorand.png")}
                    alt="Features tile icon 01"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="features-tiles-item-content">
                  <br />
                  <h4 className="mt-0 mb-8">Borrow against Algorand</h4>
                  <p className="m-0 text-sm">
                    Deposit your Algorand as collateral for more trading options
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
