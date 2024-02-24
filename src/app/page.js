import Image from "next/image";
import { Carousel } from "react-bootstrap";
import CarouselHome from '@/components/client/CarouselHome';
import MainGridHome from "@/components/client/mainGridHome";
import MeilleuresOffres from "@/components/client/meilleursOffers";
import Footer from "@/components/client/footer";
export default function Home() {
  return (
  <>
  <CarouselHome/>
  <MainGridHome />
  <MeilleuresOffres />
  <Footer />
  </>
  );
  }

