import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Salut, mon nom est</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Clément Trecourt
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Un developpeur Full Stack.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Bonjour ! 👋🏼
          <br />
          Développeur Full-Stack, passionné de nouvelles technologies et pleins
          de bonnes idées, je propose un développement performant dans la
          simplicité. Ma stack de prédilection se compose de React.js, Node.js
          et MongoDB.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Voir mon travail
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
