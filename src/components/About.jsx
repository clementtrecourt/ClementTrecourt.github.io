import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Je suis Clément Trecourt, ravi de vous rencontrer !</p>
          </div>
          <div>
            <p>
              Je recherche des missions : - Front (ReactJs) - Back
              (Node/MongoDB) - Full-Stack (front + back) - Nouveau projet /
              refonte - Une maquettes *si nécessaire*, je ne suis pas designer.
              J'ai cependant l'habitude de travailler avec la librairie Tailwind
              qui délivre des visuels très professionnels et épurés. N'hésitez
              pas à me contacter, je me ferai un plaisir d'échanger avec vous
              par téléphone ou par visioconférence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
