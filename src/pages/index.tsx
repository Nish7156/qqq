import React, { useState } from "react";
import Layout from "@/layout/Layout";
import Kofukons from "@/components/Home/KofukonSection";
import MemoirSection from "@/components/Home/MemoirSection";
import VideoSction from "@/components/Home/VideoSection";
import Who from "@/components/Home/WhoSection";
import Sunrise from "@/components/Home/SunriseSection";
import HeroSection from "@/components/Home/HeroSection";
import Why from "@/components/Home/Why";
import SmoothScroll from "@/components/Home/Horizontal";
import Link from "next/link";
import Test from "@/components/Test";

import { HomeService, MenuService } from "../service";
import Personalised from "@/components/Home/SunriseSection/personalised";
import StickySection from "@/Hooks/StickySection";

export default function Home({ why, video, who, sunrise, Kofu, menus }: any) {
  return (
    <Layout menus={menus}>
      {/* <StickySection> */}

      <HeroSection />
      {/* </StickySection> */}
      <VideoSction video={video.data?.attributes.url} />
      <Who title={who.title} description={who.description} />
      <Sunrise title={sunrise.title} description={sunrise.description} />
      <SmoothScroll />

      <Why title={why.title} description={why.description} />
      {/* <Why /> */}
      {/* <Personalised /> */}
      {/* <Kofukons /> */}
      <Kofukons title={"Kofukons"} />

      {/* <Test /> */}

      <MemoirSection />
    </Layout>
  );
}

export async function getServerSideProps() {
  let title, video, who, sunrise, why, Kofu, menus;

  try {
    const { data } = await HomeService();
    const content = data?.home?.data?.attributes ?? {};
    title = content?.title;
    video = content?.video;
    who = content?.who ?? {};
    sunrise = content?.sunrise ?? {};
    why = content?.why ?? {};
    Kofu = content?.Kofu ?? {};
  } catch (error) {}

  try {
    const { data } = await MenuService();
    const content = data?.menus.data ?? {};
    menus = content;
  } catch (error) {}

  return {
    props: {
      title: title || "",
      video: video || "",
      who: who || "",
      sunrise: sunrise || "",
      why: why || "",
      Kofu: Kofu || "",
      menus: menus || [],
    },
  };
}
