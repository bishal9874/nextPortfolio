"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaceSmileIcon, SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop, zoomInFromCenter } from "@/utils/motion";
// import {zoomInFromCenter } from "@/utils/motion";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={zoomInFromCenter(0.5)}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[1.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
          <h1 className="Welcome-text text-[20px] text-[#ffffff] font-bold " >
            <span className="flex flex-row gap-2 ">  Hey!! Myself Bishal's here <FaceSmileIcon className=" text-[#0fd8fc8b] mr-[10px] h-8 w-8" /> </span>
          </h1>
        </motion.div>

        <motion.div variants={slideInFromLeft(0.5)} className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto">
          <span className="">
          providing
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 "> the best </span>
          project exprience
          </span>
         
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-grey-400 my-5 max-w-[600px] text-white">
          I&apos;m a fullstack software engineer with exprience in website,
          Mobile, and Software development. Check out my project and skills.
        </motion.p>

        <motion.a variants={slideInFromLeft(1)} className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[250px]">
        learn More!

        </motion.a>


      </div>

      
      <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center ">
       <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;