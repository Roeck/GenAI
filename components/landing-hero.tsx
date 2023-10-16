"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Top Single-Source Generator for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-900">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbots,",
                "Images,",
                "Music,",
                "Videos,",
                "Blog Writing,",
                "Mail Writing...",
                "...and Code!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <br></br>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
    </div>
  );
};
