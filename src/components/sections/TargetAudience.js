import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const TargetAudience = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Who is this program for and not for.",
    // paragraph:
    //   "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item divide-x-2 divide-green-500 center-content-mobile center-content">
              <div
                className="split-item-content reveal-from-left"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Guide One
                </div> */}
                <h3 className="text-color-primary mt-0 mb-12">For</h3>
                <ul className="m-0 list-inside">
                  {/* li tag with no bullet point styling */}
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                </ul>
              </div>

              <div
                className="split-item-content reveal-from-right"
                data-reveal-container=".split-item"
              >
                {/* <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Guide Two
                </div> */}
                <h3 className="text-color-primary mt-0 mb-12">Not For</h3>
                <ul className="m-0 list-inside text-center">
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                  <li style={{listStyleType: "none"}}>Characteristic one </li>
                </ul>
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-02.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

TargetAudience.propTypes = propTypes;
TargetAudience.defaultProps = defaultProps;

export default TargetAudience;
