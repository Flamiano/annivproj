import React from "react";
import Pic1 from "../assets/pic1.jpg";
import letterPDF from "../assets/letter.pdf";

export const Message = () => {
  {/* FOR LETTER */}
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = letterPDF; 
    link.download = "iloveyou.pdf";
    link.click();
  };
  return (
    <div className="w-full bg-[#CFCBCE] py-8 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 text-[#171717]">
        <img
          className="w-[500px] mx-auto my-2 rounded-lg message-fadeinup"
          src={Pic1}
          alt="Me and You"
        />
        <div className="flex flex-col justify-center message-fadeinup">
          {" "}
          {/* Apply animation class here */}
          <p className="text-[#8A34CF] font-bold">My Sophy</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Me and You
          </h1>
          <p>
            My Dearest – Happy 2nd Anniversary! Two years back, we met at a
            place SM North and that turning point in my life, we have never
            looked back since that day, joy and love has been me every day. From
            the many walks we took in Memorial Circle, where every laugh and
            every memory became a piece of us, to the gaming sessions spent in
            TimeZone, everything about you is simply surreal. You are my wife,
            my best friend and the one I love most in this world. I cherish so
            many things you offered to me – so many beautiful days spent
            together and I appreciate you so much. Let’s explore to new
            experiences, more joy and praise the bond that gets stronger every
            single day especially love, while I love you – to infinity and
            beyond!
          </p>
          <button
            onClick={handleDownload}
            className="bg-[#171717] text-[#CFCBCE] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#424242] ease-in-out transition duration-500"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
