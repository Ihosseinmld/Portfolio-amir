import React from "react";
import Image from "next/image";
import HeroTitle from "./HeroTitle.client";
import LinkSection from "./LinkSection";


const AboutSectionContent = () => {
  return (
    <div className="relative z-20 container mx-auto mt-64 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-0">
      <div className="flex flex-col order-2 lg:order-1">
        <HeroTitle
          className="items-start"
          title="ABOUT ME"
          subtitle="Get To Know Me Better"
          description="My journey in few words"
        />
        <p className="text-base-content/80 mt-8 leading-relaxed text-sm sm:text-base" id="about-description">
          Hi, I&apos;m  Amin Hossein, a creative content creator with over 3 years of experience in capturing and crafting compelling stories. From professional cinematography to advanced AI-driven editing<br /> I bring ideas to life with precision and passion.
        </p>
        <LinkSection className="mt-8"/>
      </div>
      <div className="flex w-full justify-end order-1 lg:order-2">
        <Image
          src={"/images/about.jpg"}
          height={500}
          width={500}
          alt={"About Me"}
          className="aspect-square rounded-[50px] object-cover shadow-lg"
          id="about-image"
        />
      </div>
    </div>
  );
};

export default AboutSectionContent;
