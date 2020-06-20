import React from "react";
import { Link } from "react-router-dom";
import "../styles/customize.css";
import { motion } from "framer-motion";

const Customize = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
    out: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      initial="initial"
      exit="out"
      animate="in"
      variants={pageVariants}
      className="customize_body"
    >
      <div className="content">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/customize">customize</Link>
        <h3>This is Customize Page</h3>
      </div>
    </motion.div>
  );
};

export default Customize;
