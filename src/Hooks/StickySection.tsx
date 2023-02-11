import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
  Children,
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

const StickySection = ({ children }: any) => {
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

  // const { scrollYProgress } = useViewportScroll();

  const [containerRef, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    scrollPerc.set(percentage);
  }, [percentage]);

  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );

  return (
    <div ref={containerRef}>
      <div className="stickySection">
        {percentage}

        <motion.section
          ref={scrollRef}
          // style={{ x: spring }}
          className="stickyViewPort"
        >
          <div className="">{children}</div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="stickyGhost"
      />
    </div>
  );
};

export default StickySection;
