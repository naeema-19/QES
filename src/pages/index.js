
import { Inter } from "next/font/google";
import Slider from "./components/Slider";
import Home_Owl from "./components/Home_Owl";
import Features from "./components/Features";
import About from "./components/About";
import Service from "./components/Service";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";
import Team from "./components/Team";
import Head from 'next/head'
import VisionMission from "./components/VisionMission";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Qurum Enterprise Oil & Gas Services L.L.C.</title>
      </Head>
    </div>
    <div className="d-block">
     <Slider/>
     <About/>
     <VisionMission />
     <Features/>
      <Service/>
      <FAQs/>
      <Blog/>
      <Team/>
     <Home_Owl/>
     </div>
    </>
  );
}
