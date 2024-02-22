import Image from "next/image";
import { Carousel } from "react-bootstrap";
import CarouselHome from '@/components/client/CarouselHome';
import MainGridHome from "@/components/client/mainGridHome";
export default function Home() {
  return (
  <>
  <CarouselHome/>
  <MainGridHome />
  </>
  );
  }

