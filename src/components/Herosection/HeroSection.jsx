"use client";
import "./hero.css";

import { useEffect, useRef, useState } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar/navbar";

const ParallaxScene = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });

  const textY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  const leftImageX = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const rightImageX = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);
  const bottomY = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const elements = document.querySelectorAll(".parallax-element");
    elements.forEach((element) => {
      element.style.willChange = "transform";
    });

    return () => {
      elements.forEach((element) => {
        element.style.willChange = "auto";
      });
    };
  }, []);

  const [witchPosition, setWitchPosition] = useState({
    x: 0,
    y: 0,
    rotate: 0,
  });

  const getRandomAlignedPosition = () => ({
    x: Math.random() * window.innerWidth - window.innerWidth / 2,
    y: Math.random() * window.innerHeight - window.innerHeight / 2,
    rotate: Math.random() * 20 - 10,
  });

  useEffect(() => {
    const moveWitch = () => {
      const newPosition = getRandomAlignedPosition();
      setWitchPosition(newPosition);
    };
    moveWitch();
    const interval = setInterval(moveWitch, Math.random() * 2000 + 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg flex flex-col items-center" ref={containerRef}>
      <span className="font-Cattedrale text-[#9DFFFF] tracking-widest text-lg pt-4 lg:pt-0">
        Team Nitrutsav x Webwiz✨
      </span>
      <Navbar />
      <div className="relative md:h-[100vh] h-[60vh] overflow-hidden bg-[url('/hero/moon.svg')] bg-center bg-contain bg-no-repeat w-screen flex justify-center items-center">
        <audio autoPlay loop style={{ display: "none" }}>
          <source src="/hero/horror.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <motion.div
          className="absolute z-50"
          animate={witchPosition}
          transition={{
            duration: 4, // Slightly longer duration for smoother motion
            ease: "easeInOut", // Smooth transitions
          }}
        >
          <Image
            height={100}
            width={100}
            alt="witch"
            objectFit="contain"
            src="/hero/witch.png"
          />
        </motion.div>
        {/* NITRUTSAV Text */}
        <motion.div
          style={{ y: textY }}
          className="relative py-10 parallax-element"
        >
          <h1 className="text-[#003955] font-Cattedrale text-[60px] md:text-[150px] text-center leading-none">
            NITRUTSAV
          </h1>
          <p className="absolute lg:top-[0%] tracking-wider font-Cattedrale text-[16px] md:text-[35px] right-4 top-2 lg:right-[0%] text-[#003955] font-semibold">
            7-9 FEB
          </p>
          <div className="flex items-center flex-col md:flex-row justify-center space-x-4 font-Cattedrale lg:gap-10 gap-3 md:text-2xl lg:mt-5 mt-8">
            <a
              href="/docs/EB Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-transparent border-[2px] border-black text-black font-semibold lg:px-4 lg:py-2 px-4 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105"
            >
              View Brochure
            </a>
            <Link
              href={"/register"}
              className="flex items-center bg-black text-white font-semibold lg:px-8 lg:py-2 px-4 rounded-full shadow-md hover:shadow-lg transform transition-transform duration-200 hover:scale-105 "
            >
              Register
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          style={{ x: rightImageX }}
          className="absolute hidden lg:block right-0 parallax-element"
        >
          <Image
            height={400}
            width={500}
            alt="right"
            objectFit="contain"
            src="/hero/right.png"
            priority
          />
        </motion.div>

        {/* Left Image */}
        <motion.div
          style={{ x: leftImageX }}
          className="absolute hidden lg:block left-0 parallax-element"
        >
          <Image
            height={300}
            width={500}
            alt="left"
            objectFit="contain"
            src="/hero/left.png"
            priority
          />
        </motion.div>

        {/* Bottom Image */}
        <motion.div
          style={{ y: bottomY }}
          className="w-screen absolute bottom-0 parallax-element"
        >
          <Image
            height={100}
            width={1000}
            alt="bottom"
            className="absolute md:max-h-60 xl:max-h-60 object-cover  object-top w-full bottom-0"
            src="/hero/bottom.svg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxScene;
