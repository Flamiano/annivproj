import React from "react";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

export const Main = () => {
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#8A34CF] font-bold p-2 text-mainfadeinup">
          I LOVE YOU MORE THAN ANYTHING
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-mainfadeinup">
          Sharmaine Boyboy
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 text-mainfadeinup">
            Happy 2nd Anniversary,{" "}
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#8A34CF] react-typed"
            strings={["Babe", "Love", "Baby"]}
            typeSpeed={150}
            backSpeed={160}
            loop
          />
        </div>
        <div>
          <p className="md:text-2xl text-xl font-bold text-gray-500 text-mainfadeinup">
            I love you more than words could ever express.
          </p>

          <Link to="/message">
            <button className="bg-[#8A34CF] text-[#171717] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#4e1f75] hover:text-yellow-100 ease-in-out transition duration-500 text-mainfadeinup">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
