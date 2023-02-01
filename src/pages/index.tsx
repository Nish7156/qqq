import { useState } from 'react'
import Layout from '@/layout/Layout'
import Kofukons from '@/components/Home/Kofukons'
import Who from "@/components/Home/Who"
import Sunrise from '@/components/Home/Sunrise'
import VideoSction from '@/components/Home/VideoSction';
import HeroSection from '@/components/Home/HeroSection'
export default function Home() {
 
  return (
    <Layout>
      <HeroSection/>
      <VideoSction/>
      {/* <Who />
      <Sunrise />
      <Kofukons /> */}
  
    </Layout>
  
  )
}