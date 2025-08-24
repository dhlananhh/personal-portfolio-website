"use client";

import Image from "next/legacy/image";
import { motion, circOut } from "framer-motion";
import { GlassmorphicCard } from "@/components/custom-ui/GlassmorphicCard";
import Link from "next/link";
import { SectionHeading } from "@/components/custom-ui/SectionHeading";
import { Images } from "@/lib/images";

const AboutMeSection = () => {
  const profileImageUrl = Images.ProfilePlaceholder;

  const imageContainerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: circOut, delay: 0.3 } },
  };

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
          <motion.div
            className="relative"
            variants={ imageContainerVariants }
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.2 } }
          >
            <div className="absolute -inset-3 sm:-inset-4 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-xl opacity-60 sm:opacity-70 transition-all duration-500 group-hover:opacity-90"></div>
            <div className="relative aspect-[3/4] sm:aspect-square rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <Image
                src={ profileImageUrl }
                alt="Duong Hoang Lan Anh - Frontend Developer"
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-100">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300 leading-relaxed lg:text-justify">
                To be updated soon...
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                To be updated soon...
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                To be updated soon...
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Name</div>
                  <div className="font-medium text-zinc-200">Liên Khuê Nhã</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Email</div>
                  <Link href="mailto:dhlananh2309@gmail.com" className="font-medium text-zinc-200 hover:text-rose-400 transition-colors">
                    dhlananh2309@gmail.com
                  </Link>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Location</div>
                  <div className="font-medium text-zinc-200">Ho Chi Minh City, Vietnam</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Availability</div>
                  <div className="font-medium text-green-400">Open to opportunities</div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
