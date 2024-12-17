import React, { useEffect, useRef } from "react";
import Video1 from "../assets/vid1.mov";
import Video2 from "../assets/vid2.mov";
import Video3 from "../assets/vid3.mov";
import Pic1 from "../assets/pic2.jpg";
import Pic2 from "../assets/pic3.jpg";
import Pic3 from "../assets/pic4.jpg";
import OtherVideo1 from "../assets/otherPics/vid1.mov";
import OtherPic1 from "../assets/otherPics/pic1.jpeg";
import OtherPic2 from "../assets/otherPics/pic2.jpeg";
import OtherPic3 from "../assets/otherPics/pic3.jpeg";
import OtherPic4 from "../assets/otherPics/pic4.jpeg";
import OtherPic5 from "../assets/otherPics/pic5.jpeg";
import OtherPic6 from "../assets/otherPics/pic6.jpeg";
import OtherPic7 from "../assets/otherPics/pic7.jpeg";
import OtherPic8 from "../assets/otherPics/pic8.jpeg";
import OtherPic9 from "../assets/otherPics/pic9.jpeg";
import OtherPic10 from "../assets/otherPics/pic10.jpeg";
import OtherPic11 from "../assets/otherPics/pic11.jpeg";
import OtherPic12 from "../assets/otherPics/pic12.jpeg";
import OtherPic13 from "../assets/otherPics/pic13.jpeg";
import OtherPic14 from "../assets/otherPics/pic14.jpeg";
import OtherPic15 from "../assets/otherPics/pic15.jpeg";
import OtherPic17 from "../assets/otherPics/pic17.jpeg";
import OtherPic18 from "../assets/otherPics/pic18.jpeg";

import { Navbar } from "./Navbar";

export const Memories = () => {
  const sectionsRef = useRef([]);

  // Create references for each section to observe
  sectionsRef.current = [];

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the element is at least 50% visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            entry.target.classList.add("memories-visible");
          } else {
            entry.target.classList.remove("memories-visible");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup the observer when component unmounts
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full py-[2rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* OUR VIDEOS */}
        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">
            Play This!
          </h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video1} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">
            Our Museum Date
          </h2>
          <p className="text-center">
            Our museum date was a beautiful journey through art, history, and
            shared wonder, making every moment unforgettable.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">
            Play This!
          </h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video2} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">
            Our Circle Date
          </h2>
          <p className="text-center">
            Our love for each other knows no bounds and we treasure all the
            moments we have spent together, most notably at Circle. A special
            place in the sense that I had the boldness to dare court you, thus
            commencing an adventure that is truly beautiful.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">
            Play This!
          </h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video3} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">
            Our Circle Date 2.0
          </h2>
          <p className="text-center">
            The circle has always been one of my preferred places where we have
            spent a lot of moments together full of love and happiness. To me,
            it is even more meaningful because that was the place where I dared
            to reveal my feelings and tried to win your love.
          </p>
        </div>

        {/* OUR PICTURE */}
        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={Pic1}
            alt="Our Circle Date 2.0"
          />
          <h2 className="text-2xl font-bold text-center py-8">Our BGC Date</h2>
          <p className="text-center">
            This is the first time I have set foot in BGC, and I must say, I
            appreciate the vibrancy of the place. It was, however, made more
            special when I got to share that moment with you and watch the
            amazing singers who performed in public. It was a moment that was
            full of happiness and love.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={Pic2}
            alt="Our First Meet"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Our First Meet
          </h2>
          <p className="text-center">
            The first time we met at SM North, I was very shy but very much
            taken in by your beauty. This was the turning point in my life that
            I would seriously consider in the future.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={Pic3}
            alt="Our First Picture at SM North"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Our First Meet 2.0
          </h2>
          <p className="text-center">
            Our first picture together at SM North was a moment I’ll never
            forget. I was very shy, but I was completely taken in by your
            beauty, and that moment marked the turning point in my life that I
            would always cherish in the future.
          </p>
        </div>
      </div>
      {/* OTHER MEMORIES */}
      <div className="bg-white h-10 w-[100%] mt-10 flex items-center justify-center shadow-md rounded-md py-10">
        <p className="text-[#8A34CF] font-bold text-center text-sm">
          THIS IS OUR MORE MEMORIES THAT WE'LL CHERISH FOREVER.
        </p>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-10">
        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">
            Play This!
          </h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={OtherVideo1} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">I Love You</h2>
          <p className="text-center">
            This is all about laughing together, having fun, making special
            memories, and enjoying every moment with each other.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic1}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You Are Amazing
          </h2>
          <p className="text-center">
            You are amazing in so many ways. Every day, you show me what
            kindness, strength, and love truly mean. I’m grateful for everything
            you do and for being you.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic6}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Always With You
          </h2>
          <p className="text-center">
            I want to be always with you, through every challenge and every
            moment. Being by your side fills me with joy and comfort. Together,
            we can face anything that comes our way.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic3}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Forever My Person
          </h2>
          <p className="text-center">
            You will always be forever my person. The bond we share is something
            so unique, and I can't imagine life without you. You're my best
            friend, my confidant, and my love.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic4}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Together We Shine
          </h2>
          <p className="text-center">
            Together we shine, lighting up every room we walk into. Our
            connection makes us stronger and brighter. There’s nothing we can’t
            achieve when we’re side by side.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic5}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You Complete Me
          </h2>
          <p className="text-center">
            You complete me in every way possible. I feel whole when I’m with
            you, like I’ve found the missing piece of my heart. Together, we’re
            perfect just the way we are.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic2}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Forever And Always
          </h2>
          <p className="text-center">
            I will love you forever and always, no matter the distance or time.
            Every moment spent with you is a gift I’ll cherish forever. You’re
            my constant, my forever.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic7}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            My Greatest Adventure
          </h2>
          <p className="text-center">
            Being with you is my greatest adventure. Every day with you is a new
            journey full of surprises and joy. I’m excited for all the
            adventures that still await us.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic8}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You Are Enough
          </h2>
          <p className="text-center">
            You are enough, just as you are. In your presence, I find peace and
            happiness. No matter what, you’ll always be perfect in my eyes.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic9}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You Inspire Me
          </h2>
          <p className="text-center">
            You inspire me every day to be better, kinder, and more patient. The
            way you live your life with so much passion and love motivates me. I
            am a better person because of you.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic10}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">Never Let Go</h2>
          <p className="text-center">
            I never want to let go of you, for you are my everything. No matter
            where life takes us, I want to be there with you. You hold my heart,
            and I’ll never let go.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic11}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            My Heart's Treasure
          </h2>
          <p className="text-center">
            You are my heart's treasure, the one I cherish above all else. Every
            smile, every laugh, every moment we share is a precious gift. I am
            blessed to have you in my life.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic12}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Dreams With You
          </h2>
          <p className="text-center">
            I dream of a future with you, where we chase our dreams together.
            Every goal I have feels more achievable with you by my side. Let’s
            make those dreams come true, hand in hand.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic13}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">Hold Me Close</h2>
          <p className="text-center">
            Hold me close and never let me go, for I find my peace in your arms.
            With you, I feel safe, loved, and cherished. Every moment with you
            is a moment I’ll hold dear forever.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic14}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Laughter And Happiness
          </h2>
          <p className="text-center">
            Laughter and happiness fill my heart every time I’m with you. Your
            presence makes everything brighter and easier to face. Together, we
            create a world full of joy and warmth.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic15}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Always Beside You
          </h2>
          <p className="text-center">
            I will always be beside you, through every high and every low. Your
            dreams are my dreams, and your struggles are mine to share.
            Together, we’ll face everything life brings our way.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic17}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You’re My Everything
          </h2>
          <p className="text-center">
            You’re my everything, the center of my world. Without you, life
            wouldn’t be as sweet, and I wouldn’t feel complete. Everything I do,
            I do with you in my heart.
          </p>
        </div>

        <div
          ref={addToRefs}
          className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup"
        >
          <img
            className="w-full h-auto mx-auto rounded-md"
            src={OtherPic18}
            alt="Other Picture"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            You’re My Home
          </h2>
          <p className="text-center">
            You’re my home, the place where I feel most at peace. In your
            embrace, I find comfort and warmth. No matter where life leads us,
            you’ll always be the place I call home.
          </p>
        </div>
      </div>
    </div>
  );
};
