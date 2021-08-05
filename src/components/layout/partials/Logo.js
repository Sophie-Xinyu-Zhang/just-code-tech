import React from "react";
import classNames from "classnames";
import { Link } from "react-scroll";
import Image from "../../elements/Image";
import "./Logo.css";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="pitch" activeClass="active" spy={true} smooth={true}>
          <Image
            src={require("./../../../assets/images/vertical_white.svg")}
            alt="Open"
            width={32}
            height={32}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
