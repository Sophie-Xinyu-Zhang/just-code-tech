import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
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
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Testimonials",
    paragraph:
      "Below is just a snippet of those I've mentored or consulted with. To see more: ",
    link: "https://www.notion.so/justinlinpersonal/Testimonials-d68f253bcb2f4cda98b56c90af68b218",
  };

  const icons = {
    google:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
    amazon:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    apple: "http://simpleicon.com/wp-content/uploads/apple.png",
    bloomberg:
      "https://pbs.twimg.com/profile_images/1016326195221352450/KCcdUN0v.jpg",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h5>Amazon Intern (soph) / Google Intern (junior) </h5>
                  <p className="text-sm mb-0">
                    Justin totally changed how far I thought I could go in CS
                    and cannot thank him enough :) He mentored me for several
                    months helping me get an internship at Amazon and now Google
                    for this Fall. Even when I thought it was impossible as a
                    sophmore, he believed in me and worked on algorithms, full
                    stack web dev, and my interviewing skills till I made it.{" "}
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Timothy Chung
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.linkedin.com/in/tchung17/">Linkedin</a>
                    <div></div>
                    {/* Image with the icon for incons.google */}
                    {/* Create an image tag with display inline block */}
                    {/* Create a div block with display flex and vertically align the icons */}
                    {/* Create a div with align items center */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.google}
                        alt="Google"
                        width="50"
                        height="50"
                      />
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.amazon}
                        alt="Google"
                        width="70"
                        height="70"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h5>Apple Full-time </h5>
                  <p className="text-sm mb-0">
                    Justin's willingness to help others is outstanding. He
                    really understands the interviewing process [...] Justin has
                    crafted a template of "how to interview." I found myself
                    reading over this guide before my interviews [...] He has a
                    good sense of character, technical intellect and can detect
                    where his clients are struggling the most. If you have the
                    opportunity to connect and work w/ Justin, you will find he
                    gets the job done and more!
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Kris Prasad
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.linkedin.com/in/kris-prasad-b92a8192/">
                      Linkedin
                    </a>
                    <div></div>
                    {/* Image with the icon for incons.google */}
                    {/* Create an image tag with display inline block */}
                    {/* Create a div block with display flex and vertically align the icons */}
                    {/* Create a div with align items center */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.apple}
                        alt="Google"
                        width="50"
                        height="50"
                      />
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.bloomberg}
                        alt="Google"
                        width="50"
                        height="50"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <h5>Bloomberg Intern (soph) </h5>
                  <p className="text-sm mb-0">
                    With Justin’s help, I was able to get an offer as a college
                    sophomore within 6 months, starting from nothing to a full
                    stack web developer. He has a good understanding of the
                    interview process and the patterns of the coding questions.
                    He is also able to teach them in an explicit way which
                    really helped me cracking the questions prior to taking any
                    algorithm classes in school. All in all he’s an amazing
                    mentor :D!
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Sophie Zhang
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.linkedin.com/in/sophiexinyuzhang/">
                      Linkedin
                    </a>
                    <div></div>
                    {/* Image with the icon for incons.google */}
                    {/* Create an image tag with display inline block */}
                    {/* Create a div block with display flex and vertically align the icons */}
                    {/* Create a div with align items center */}
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.bloomberg}
                        alt="Google"
                        width="50"
                        height="50"
                      />
                      <img
                        style={{ display: "inline-block" }}
                        src={icons.amazon}
                        alt="Google"
                        width="70"
                        height="70"
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
