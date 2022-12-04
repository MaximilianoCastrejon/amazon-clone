import React, { useState } from "react";
import LoadingSpinner from "./LoadingSpinner.js";

function Image({ src, ...props }) {
  const [imgSrc, setSrc] = useState(<LoadingSpinner /> || src);
  return <img {...props} src={imgSrc} />;
}

export default Image;
