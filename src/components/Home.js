import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/home.css";

const Home = () => {
  const [state, setState] = useState(false);

  useEffect(() => {}, []);
  console.log(state);

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
    out: {
      opacity: 0,
      transition: {
        delay: 0.8,
        when: "afterChildren",
      },
    },
  };
  const bar1Transition = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    in: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    out: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const bar2Transition = {
    initial: {
      x: "100%",
      opacity: 0,
    },
    in: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    out: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const textTransition = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: {
        delay: 1,
        ease: "easeIn",
      },
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      className="before_body"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <motion.div
        initial="initial"
        animate={state ? "out" : "in"}
        variants={bar1Transition}
        className="bar1"
      ></motion.div>
      <motion.div
        initial="initial"
        animate={state ? "out" : "in"}
        variants={bar2Transition}
        className="bar2"
      ></motion.div>
      <div className="home_body">
        <motion.div
          initial="initial"
          animate={state ? "out" : "in"}
          variants={textTransition}
          className="content"
        >
          <Link exact="true" to="/">
            Home
          </Link>
          <Link onClick={() => setState(!state)} to="/customize">
            Customize
          </Link>
          <h3>This is Home Page</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
