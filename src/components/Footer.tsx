"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import MagicButton from "./MagicButton";

const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    icon: <FaGithub size={20} />,
    link: "https://github.com/shivena99",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    link: "https://www.linkedin.com/in/shiven-agarwal/",
  },
];

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-emerald">collaborate</span> on
          research or engineering?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how we can work
          together on AI research and intelligent systems.
        </p>
        <a href="mailto:sagar147@asu.edu">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2025 Shiven Agarwal
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
