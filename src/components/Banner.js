import { motion } from "framer-motion";
import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/web1.png";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
            variants={fadeIn('down',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              VBLAZE
            </motion.h1>
            <motion.div
            variants={fadeIn('up',0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary 
          font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 ">we are </span>
              <TypeAnimation
                sequence={["Developers", 2000, "Desiners", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} 
            className="mb-8 max-w-max mx-auto lg:mx-0">
              St. Thomas College of Engineering and Technology Mattannur, Kannur
              - Designing Club
            </motion.p>
            <motion.div
            variants={fadeIn('up',0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}} className=" flex max-w-max gap-x-6 items-center  mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">join us</button>
              <a href="#contact" className="text-gradient btn-link">
                contact us
              </a>
            </motion.div>
            <motion.div 
            variants={fadeIn('left',0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.7}}className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="https://github.com/VBLAZE-STM/VBLAZE-STM">
                <FaGithub />
              </a>
              <a href="https://in.linkedin.com/company/vblaze-edu">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/vblaze_stm/">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
          variants={fadeIn('right',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false,amount:0.7}} 
          className="hidden  lg:flex flex-1 max-w-[400px] lg:max-w-[352px]">
            <img className="rounded-full " src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
