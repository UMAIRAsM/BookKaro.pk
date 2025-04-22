import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import videoSrc from "../assets/video.mp4";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const slides = [
  {
    type: "video",
    src: videoSrc,
    heading: "35% Discount Across All Cinemas",
    text: "Get your tickets today to avail this summer discount",
  },
  {
    type: "video",
    src: video1,
    heading: "MUSIC EVENTS",
    text: "Live in Candlestick Park, San Francisco, CA<br />Buy Tickets on BookKaro.pk",
  },
  {
    type: "video",
    src: video2,
    heading: "STANDUP COMEDY",
    text: "30% exclusive discounts<br />Get your tickets today from BookKaro.pk",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[87vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              src={slide.src}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.16)] z-10"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
            <h1
              className="text-4xl md:text-6xl font-bold mb-4 italic text-white uppercase"
              style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)" }}
            >
              {slide.heading}
            </h1>
            <p
              className="text-lg md:text-xl mb-6"
              style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.8)" }}
              dangerouslySetInnerHTML={{ __html: slide.text }}
            />
            <button className="border-2 border-white text-white rounded-2xl px-4 py-2 hover:bg-white hover:text-black transition">
              Get Tickets
            </button>
          </div>
        </motion.div>
      ))}

      {/* Slide Tracker */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-4 z-10">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-6 h-1 rounded bg-white transition-all duration-300 ${
              index === current ? "opacity-100" : "opacity-40"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
