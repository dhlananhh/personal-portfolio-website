import React from "react"
import Image from "next/image"
import { Images } from "@/constants/images"
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div className="absolute inset-0 [mask-image: linear-gradient(to_bottom, transparent, black_10%, transparent)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${Images.grainImage})`,
          }}
        />

        {/* Hero Rings */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* Hero Orbits with StarIcon */}
        <HeroOrbit size={800} rotation={-72}>
          <Images.StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <Images.StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <Images.StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        {/* Hero Orbits with SparkleIcon */}
        <HeroOrbit size={430} rotation={-14}>
          <Images.SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <Images.SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <Images.SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <Images.SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        {/* Hero Orbits with custom div */}
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-3 rounded-full bg-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-3 rounded-full bg-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={Images.memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full" />
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg ">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project
            and bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <Images.ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
            <span>👋🏻</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
