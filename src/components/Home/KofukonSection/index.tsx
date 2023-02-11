import Heading from "@/elements/Heading";
import { ScrollAnimationCommon } from "@/Hooks/ScrollAnimationCommon";
import { useState, useEffect } from "react";
import Tabs from "../../Tabs";
import Line from "./Line";
//@ts-ignore
import ScrollAnimation from "react-animate-on-scroll";


function Kofukons({title}:any) {
  const [sectionRef, setSectionRef] = useState<HTMLDivElement | null>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef) {
        const { top, bottom } = sectionRef.getBoundingClientRect();
        setIsSectionVisible(top < window.innerHeight && bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRef, isSectionVisible]);

  useEffect(() => {
    var path: any = document.querySelector("#Path_5");
    var arrow: any = document.querySelector("#arrow");
    var arrowWidth = 40;
    var arrowHeight = 40;

    function updateImagePosition(offset: any) {
      let pt: any = path.getPointAtLength(offset * path.getTotalLength());
      arrow.setAttribute("x", pt.x - arrowWidth / 2);
      arrow.setAttribute("y", pt.y - arrowHeight / 2);
    }

    function getScrollFraction() {
      var h: any = document.documentElement,
        b: any = document.body,
        st: any = "scrollTop",
        sh: any = "scrollHeight";
      return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 1.2;
    }

    function onScroll() {
      updateImagePosition(getScrollFraction());
    }

    updateImagePosition(0);

    //Scroll Function
    window.addEventListener("scroll", onScroll);

      ScrollAnimationCommon("section5","Path_5")
    


    //Clear the Function
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container relative py-32 " id="section5">
        <div className="absolute bottom-0 left-0 right-0 top-20 ">
          <Line />
        </div>
        <div id="textAni"  className={`section ${isSectionVisible ? 'section-visible' : ''}`} ref={(ref) => setSectionRef(ref)}>
        <ScrollAnimation  animateIn='cardFadeIn' duration="2" >
          <Heading priority="2">{title}</Heading>
        </ScrollAnimation>
        </div>
        <div className="py-8 ">
          <Tabs sectionVisible={isSectionVisible} />
        </div>
    </div>

  );
}

export default Kofukons;
