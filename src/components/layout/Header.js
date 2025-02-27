import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import "./Header.css";
import { Link } from "react-scroll";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header {...props} className={classes}>
      <div className="container" id="header--div">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Logo />
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link
                        to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="intro"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        Guides
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="target"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        Students
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="timeline"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        Timeline
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="payment"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        Payment plans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="testimonial"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        onClick={closeMenu}
                      >
                        Testimonials
                      </Link>
                    </li>
                  </ul>
                  {/* {!hideSignin && ( */}
                  <ul className="list-reset header-nav-right">
                    <li>
                      <a
                        href="https://www.cognitoforms.com/JustinLin1/JustCodesTech"
                        className="button button-primary button-wide-mobile button-sm"
                        onClick={closeMenu}
                      >
                        Apply now!
                      </a>
                    </li>
                  </ul>
                  {/* )} */}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
