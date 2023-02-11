import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

import { useScrollPercentage } from "react-scroll-percentage";
import Who from "../WhoSection";
import Kofukons from "../KofukonSection";
import Personalised from "@/components/Home/SunriseSection/personalised";
import Why from "@/components/Home/Why";


const SmoothScroll = () => {
  const scrollRef = useRef<any>(null);
  const ghostRef = useRef<any>(null);
  const [scrollRange, setScrollRange] = useState<any>(0);
  const [viewportW, setViewportW] = useState<any>(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: any) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useViewportScroll();

  const [containerRef, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    scrollPerc.set(percentage);
  }, [percentage]);

  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  const [sectionWidth, setSectionWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("load", () => {
      const section = document.querySelector(
        "#horizontal-width"
      ) as HTMLElement;
      setSectionWidth(section.offsetWidth);
      // console.log(`Section width: ${sectionWidth}px`);
    });
  }, []);

  return (
    <div ref={containerRef}>
      <div
        className="scroll-container"
       
        style={{ width: `${sectionWidth}px` }}
      >
        {/* {percentage} */}

        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
          id="horizontal-width"
        >
          <div className="thumbnails">
            {/* <div className="thumbnail" /> */}
            <Why />
            <Personalised />
            {/* <Kofukons   title={"Kofukons"} /> */}
            {/* <div className="thumbnail" /> */}
            {/* <div className="thumbnail" /> */}
            <div className="thumbnail" />
            <div className="thumbnail" />
          </div>
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </div>
  );
};

export default SmoothScroll;
