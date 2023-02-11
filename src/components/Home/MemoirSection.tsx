import React from "react";
import Heading from "@/elements/Heading";
import Text from "@/elements/Text";
import CustomImage from "../CustomImage";
import Card1 from "/public/images/memoir/card1.svg";
import Card2 from "/public/images/memoir/card2.svg";
import Card3 from "/public/images/memoir/card3.svg";
import Card4 from "/public/images/memoir/card4.svg";
import Card5 from "/public/images/memoir/card5.svg";
import Card6 from "/public/images/memoir/card6.svg";

//@ts-ignore
import ScrollAnimation from 'react-animate-on-scroll';


function MemoirSection() {

  return (
    <div className="memoirHolder py-32">
      <div className="container relative ">
            <div className=" mb-8  ">
                <Heading priority="2" color="white">Memoir</Heading>
            </div>
            <div className="allCardsHolder mt-20 relative">

                <div className="eachCardHolder">
                    <ScrollAnimation  animateIn='cardFadeIn'  delay="100"  duration="0.5">
                         <div className="cardBack"></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'  duration="1">
                        <div className="cardFront absolute top-[-4px] left-[-4px]">
                            <div className="h-[194px] w-[320px] relative mb-10">
                                    <CustomImage src={Card1} />
                            </div>
                            <Heading priority="4" >1450s<br/> Printing press</Heading>
                            <Text size="md">Information accessibility began</Text>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="eachCardHolder">
                    <ScrollAnimation  animateIn='cardFadeIn'  delay="300"  duration="0.5">
                        <div className="cardBack "></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'    duration="1">

                    <div className="cardFront absolute top-[-4px] left-[-4px]">
                        <div className="h-[144px] w-[180px] relative mb-10">
                                <CustomImage src={Card2} />
                        </div>
                        <Heading priority="4" >1890s<br/> Electronic health information</Heading>
                        <Text size="md">TV, Computer, Radio</Text>

                    </div>
                    </ScrollAnimation>
                </div>

                <div className="eachCardHolder">
                    <ScrollAnimation  animateIn='cardFadeIn'  delay="400"  duration="0.5">

                    <div className="cardBack "></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'   duration="1">

                    <div className="cardFront absolute top-[-4px] left-[-4px]">
                        <div className="h-[144px] w-[180px] relative mb-10">
                                <CustomImage src={Card3} />
                        </div>
                        <Heading priority="4" >1890s<br/> Invention of 
internet</Heading>
                        <Text size="md">Data storage – 
Floppy disk, DVDs</Text>

                    </div>
                    </ScrollAnimation>
                </div>
                <div className="eachCardHolder">
                <ScrollAnimation  animateIn='cardFadeIn'  delay="500"  duration="0.5">

                    <div className="cardBack "></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'   duration="1">

                    <div className="cardFront absolute top-[4px] left-[-4px]">
                        <div className="h-[170px] w-[200px] relative mb-10">
                                <CustomImage src={Card4} />
                        </div>
                        <Heading priority="4" >1990s<br/> Digital
Health
Information</Heading>
                        <Text size="md">Social Media,
Search Engine</Text>

                    </div>
                    </ScrollAnimation>
                </div>
                <div className="eachCardHolder">
                <ScrollAnimation  animateIn='cardFadeIn'  delay="600"  duration="0.5">

                    <div className="cardBack "></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'   duration="1">

                    <div className="cardFront absolute top-[4px] left-[-4px]">
                        <div className="h-[144px] w-[180px] relative mb-10">
                                <CustomImage src={Card5} />
                        </div>
                        <Heading priority="4" >2000s<br/> Artificial Intelligence & Machine Learning</Heading>
                        <Text size="md">Information 
accessibility began</Text>

                    </div>
                    </ScrollAnimation>
                </div>
                <div className="eachCardHolder">
                    <ScrollAnimation  animateIn='cardFadeIn'  delay="700"  duration="0.5">
                        <div className="cardBack "></div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='swingCard' animateOut='swingCard'   duration="1">

                    <div className="cardFront absolute top-[4px] left-[-4px]">
                        <div className="h-[144px] w-[180px] absolute w-[90%] h-[90%] mb-10">
                                <CustomImage src={Card6} />
                        </div>
                        <Heading priority="4" >2022<br/> KOFUKU</Heading>
                        <Text size="md">We stand right here with 
a revolutionary search engine 
& social media platform for 
consumer health that leverage
AI & ML to solve the problem of 
irrelevant, unfiltered information.</Text>

                    </div>
                    </ScrollAnimation>
                </div>
            </div>
      </div>
    </div>
  );
}

export default MemoirSection;
