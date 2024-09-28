import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Split = ({ leftContent = Fragment, rightContent = Fragment }) => (
    <div className="h-screen flex">
      <div className="w-full h-full hidden md:block">{leftContent}</div>
      <div className="w-full h-full">{rightContent}</div>
    </div>
  );


Split.propTypes = {
  leftContent: PropTypes.element,
  rightContent: PropTypes.element,
};

export default Split;  
