import { Metadata } from "next";
import EventHero from "../../components/Event-Hero-Section/EventHero";

import Gallery from "@/components/NU-Events/Gallery";
//import { useServerAuthSession } from "@/server/auth";
import GuestLectures from "./GuestLectures";
import MainEvents from "./MainEvents";
import Flagships from "./Flagships";
import FunEvents from "./FunEvents";
import Workshop from "./Workshop";
import Footer from "@/components/Footer/footer";
import ClubEvents from "./ClubEvents";

//import { GET as getRegisterdEvents } from "@/app/api/events/get-registered/route";

export const metadata: Metadata = {
  title: "Events",
  keywords: [
    "NITR Events",
    "NITRUTSAV",
    "NIT Rourkela Fest",
    "Cultural Events NITR",
    "Literary Events NITR",
    "Student Fest NITR",
    "College Fest NITR",
    "NITRUTSAV 2024",
    "NITRUTSAV Events",
    "NITRUTSAV Activities",
    "NITRUTSAV Schedule",
    "NITRUTSAV Registration",
    "NITRUTSAV Performances",
    "NITRUTSAV Competitions",
    "NITRUTSAV Workshops",
    "NITRUTSAV Highlights",
    "NITRUTSAV News",
    "NITRUTSAV Updates",
  ],
};

const page = async () => {
  //const session = await useServerAuthSession();

  //const events = await getRegisterdEvents();

  //const registeredEvents = await events.json();

  //var eventIds = [];

  // if (!!session) {
  //   eventIds = registeredEvents.events.map(
  //     (event: { id: number }) => `${event.id}`
  //   );
  // } else {
  //   eventIds = [];
  // }

  return (
    <>
      <EventHero />
      {/* <div className="min-h-screen ">
        <GuestLectures />
      </div> */}
      <div className="min-h-screen  ">
        <Flagships />
      </div>
      <div className="min-h-screen ">
        <MainEvents />
        {/* ProShows Renamed to Main Events */}
      </div>
      <div className="min-h-screen">
        <FunEvents />
      </div>
      <div className="min-h-screen ">
        <Workshop />
      </div>
      <div className="min-h-screen ">
        <ClubEvents />
      </div>
      <Gallery></Gallery>
      <Footer />
    </>
  );
};

export default page;
