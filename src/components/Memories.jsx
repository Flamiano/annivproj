import React, { useEffect, useRef } from 'react';
import Video1 from '../assets/vid1.mov';
import Video2 from '../assets/vid2.mov';
import Video3 from '../assets/vid3.mov';
import Pic1 from '../assets/pic2.jpg';
import Pic2 from '../assets/pic3.jpg';
import Pic3 from '../assets/pic4.jpg';
import { Navbar } from './Navbar';

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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Check if the element is at least 50% visible
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          entry.target.classList.add('memories-visible');
        } else {
          entry.target.classList.remove('memories-visible');
        }
      });
    }, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    // Observe each section
    sectionsRef.current.forEach(section => {
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
        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">Play This!</h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video1} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">Our Museum Date</h2>
          <p className="text-center">
            Our museum date was a beautiful journey through art, history, and shared wonder, making every moment unforgettable.
          </p>
        </div>

        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">Play This!</h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video2} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">Our Circle Date</h2>
          <p className="text-center">
            Our love for each other knows no bounds and we treasure all the moments we have spent together, most notably at Circle. A special place in the sense that I had the boldness to dare court you, thus commencing an adventure that is truly beautiful.
          </p>
        </div>

        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <h3 className="text-2xl font-bold text-center mb-3 text-[#8A34CF]">Play This!</h3>
          <video className="w-50 h-50 mx-auto" controls>
            <source src={Video3} type="video/mp4" />
          </video>
          <h2 className="text-2xl font-bold text-center py-8">Our Circle Date 2.0</h2>
          <p className="text-center">
            The circle has always been one of my preferred places where we have spent a lot of moments together full of love and happiness. To me, it is even more meaningful because that was the place where I dared to reveal my feelings and tried to win your love.
          </p>
        </div>

        {/* OUR PICTURE */}
        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <img className="w-full h-auto mx-auto rounded-md" src={Pic1} alt="Our Circle Date 2.0" />
          <h2 className="text-2xl font-bold text-center py-8">Our BGC Date</h2>
          <p className="text-center">
            This is the first time I have set foot in BGC, and I must say, I appreciate the vibrancy of the place. It was, however, made more special when I got to share that moment with you and watch the amazing singers who performed in public. It was a moment that was full of happiness and love.
          </p>
        </div>

        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <img className="w-full h-auto mx-auto rounded-md" src={Pic2} alt="Our First Meet" />
          <h2 className="text-2xl font-bold text-center py-8">Our First Meet</h2>
          <p className="text-center">
            The first time we met at SM North, I was very shy but very much taken in by your beauty. This was the turning point in my life that I would seriously consider in the future.
          </p>
        </div>

        <div ref={addToRefs} className="w-full text-[#171717] bg-[#CFCBCE] rounded-md shadow-xl flex flex-col p-4 md:my-0 my-0 hover:scale-105 transform transition duration-300 memories-fadeinup">
          <img className="w-full h-auto mx-auto rounded-md" src={Pic3} alt="Our First Picture at SM North" />
          <h2 className="text-2xl font-bold text-center py-8">Our First Meet 2.0</h2>
          <p className="text-center">
            Our first picture together at SM North was a moment I’ll never forget. I was very shy, but I was completely taken in by your beauty, and that moment marked the turning point in my life that I would always cherish in the future.
          </p>
        </div>
      </div>
    </div>
  );
};
