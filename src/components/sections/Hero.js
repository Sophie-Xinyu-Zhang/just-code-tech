import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import { Link } from "react-scroll";
import "./applicationRminder.css";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              <span className="text-color-primary">JustCodes</span>.tech
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                Join our cohort and learn how to pass the technical interview for top
                tech companies. The cohort will teach you: the most frequent algorithm patterns, how to tackle
                live interviews with 1-1 mock interviews, and strategize your
                way to pass interviews at the top tech companies. 
              </p>
              <p
                className="reveal-from-bottom application-reminder"
                data-reveal-delay="400"
              >
                * Next cohort starts: Sept.7 *
              </p>
              <p
                className="reveal-from-bottom application-reminder"
                data-reveal-delay="400"
              >
                * Application deadline: Sept.1 *
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://www.cognitoforms.com/JustinLin1/JustCodesTech"
                  >
                    Apply now!
                  </Button>
                  <Button tag="a" color="dark" wideMobile>
                    <Link
                      to="about"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                    >
                      Learn more
                    </Link>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
