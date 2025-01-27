import React from "react";
import { clubevents } from "./constants";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/Carousel/carousel";

// type Props = {
//   userId: string | undefined;
//   registeredEvents: string[] | undefined;
// };

const ClubEvents = () => {
  const OPTIONS: EmblaOptionsType = {};

  return (
    <div id={"club"}>
      <Carousel
        //registeredEvents={registeredEvents}
        slides={clubevents}
        heading={"Club Events"}
        //userId={userId}
      ></Carousel>
    </div>
  );
};

export default ClubEvents;
