import Image from "next/image";
import Banner from "../components/Banner/Banner";
import FeaturedBooks from "../components/feauredBooks/FeaturedBooks";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedBooks />
    </div>
  );
}
