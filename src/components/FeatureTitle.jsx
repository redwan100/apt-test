import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";
const FeatureTitle = ({ children }) => {
  const ref = useRef(null);
  const isView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <p
      ref={ref}
      className={classNames(
        "text-5xl py-20  transition-all duration-300",
        isView ? "text-zinc-900 " : "text-zinc-200"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureTitle;
