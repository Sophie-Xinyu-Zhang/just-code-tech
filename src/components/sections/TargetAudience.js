import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

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
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item center-content-mobile center-content">
              <div
                className="split-item-content reveal-from-left"
                data-reveal-container=".split-item"
              >
                <h3 className="text-color-primary mt-0 mb-12">For</h3>
                <ul className="m-0 text-center">
                  {/* li tag with no bullet point styling */}
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                </ul>
              </div>

              <div
                className="split-item-content reveal-from-right"
                data-reveal-container=".split-item"
              >
                <h3 className="text-color-primary mt-0 mb-12">Not For</h3>
                <ul className="m-0 text-center">
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                  <li style={{ listStyleType: "none" }}>Characteristic one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TargetAudience.propTypes = propTypes;
TargetAudience.defaultProps = defaultProps;

export default TargetAudience;
