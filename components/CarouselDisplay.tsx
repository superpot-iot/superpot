import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
// import Fade from "embla-carousel-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function CarouselDisplay() {
  const options: EmblaOptionsType = { loop: true };
  const images = ["/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png"];

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 2300, stopOnInteraction: false}),
    // Fade(),
  ]);

  return (
    <Card className="bg-slate-950 border border-slate-800 basis-1/2">
      <CardHeader>
        <CardTitle className="flex items-center gap-1 font-normal ">
          <span className="krona_one text-sgreen">Product Model</span>
        </CardTitle>
        <CardDescription className="text-white text-gray-400 text-md text-justify">
          View our product's 3D model!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {images.map((img) => (
                <div className="embla__slide" key={img}>
                  <Image src={img} alt="slide" width={400} height={400} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
