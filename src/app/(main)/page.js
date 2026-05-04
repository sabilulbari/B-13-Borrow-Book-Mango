import Image from "next/image";
import Banner from "../components/Banner/Banner";
import FeaturedBooks from "../components/feauredBooks/FeaturedBooks";
import DownloadSection from "../components/Download-Section/DownloadSection";
import AboutUs from "../components/aboutus/AboutUs";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedBooks />
      <DownloadSection />
      <AboutUs/>
    </div>
  );
}
