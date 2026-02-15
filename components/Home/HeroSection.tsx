import React from "react";

import TalkButton from "./TalkButton";
import Image from "next/image";
import Icon from "../ui/Icon";
import Link from "next/link";

const HeroSectionContent = () => {
  return (
    <section className="container mx-auto grid min-h-[70vh] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-0 lg:gap-16">
      <div className="order-2 flex flex-col">
        <h1
          className="text-5xl leading-tight md:text-7xl md:leading-relaxed"
          id="hero-section-title"
        >
          Hey! My Name is <br className="hidden md:inline" />
          <span className="text-primary text-5xl font-bold sm:text-6xl md:text-8xl">
            Amir Hossein
          </span>
        </h1>
        <p
          className="hero-description mt-4 text-base opacity-60"
          id="hero-section-description"
        >
          I am Amir Hossein, a creative content creator with over 3 years of experience in capturing and crafting compelling stories. 
          <br />
          <br />
          From professional cinematography to advanced AI-driven editing, I bring ideas to life with precision and passion.
        </p>
        <div className="hero-buttons mt-8 flex flex-col gap-4 sm:flex-row">
          <TalkButton />
          <Link download={true} target="_blank" rel="noopener noreferrer" href={"/Amirrza_mohammadi_afzal_Software_Engineer_Resume.pdf"} className="btn btn-outline btn-primary px-8 z-50">
            <Icon icon="mynaui:download-solid" width={24} />
            Download Resume
          </Link>
        </div>
      </div>
      <Image
        width={1000}
        height={1000}
        className="order-1 aspect-square w-full rounded-[50px] object-cover"
        src={"/images/hero.png"}
        alt=""
      />
    </section>
  );
};

export default HeroSectionContent;
