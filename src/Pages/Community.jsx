import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Community() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center bg-[#f5e8df] py-5 lg:py-2 px-10 lg:px-24 rounded-3xl">
        <div className="w-full lg:w-2/3">
          <p className="text-3xl font-semibold lg:text-4xl">
            Hey Book Lovers!!!
          </p>
          <p className="text-xl mt-5 lg:text-2xl">
            Explore new worlds and perspectives through our community
          </p>
        </div>
        <div className="w-full lg:w-1/3">
          <img
            src="https://i.ibb.co/cFRMHrZ/hand-drawn-flat-design-stack-books-illustration-23-2149330605.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-12">
        <p className="text-2xl lg:text-4xl font-medium text-center">
          JOIN OUR COMMIUNTY
        </p>
        <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10 px-10 lg:px-0">
          <button className="px-7 py-1 bg-[#7289d9] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaDiscord size={18} /> Discord
          </button>
          <button className="px-7 py-1 bg-[#1DA1F2] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaTwitter size={18} /> Twitter
          </button>
          <button className="px-7 py-1 bg-[#5B51D8] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaInstagram size={18} /> Instagram
          </button>
          <button className="px-7 py-1 bg-[#1DB954] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaSpotify size={18} /> Spotify
          </button>
          <button className="px-7 py-1 bg-[#2b3137] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaGithub size={18} /> Github
          </button>
          <button className="px-7 py-1 bg-[#0077b5] rounded-3xl text-white flex gap-2 items-center justify-center">
            <FaLinkedin size={18} /> LinkedIn
          </button>
        </div>
      </div>
    </>
  );
}

export default Community;
