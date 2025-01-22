import { useState } from "react";
import VeloRent from "../img/VeloRent.png"
import VeloRent1 from "../img/VeloRent1.png";
import VeloRent2 from "../img/VeloRent2.png";
import VeloRent3 from "../img/VeloRent3.png";
import VeloRent4 from "../img/VeloRent4.png";
import VeloRent5 from "../img/VeloRent5.png";
import VeloRent6 from "../img/VeloRent6.png";


export const MyProjects = () => {
  const images = [
    VeloRent,
    VeloRent1,
    VeloRent2,
    VeloRent3,
    VeloRent4,
    VeloRent5,
    VeloRent6
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (<>
    <div className="heading">
      <h2 >My projects</h2>
    </div>
    <div className="p-1 flex flex-col gap-3 mt-5">
      <div className="card">
        <div className="cardCarousel">

          <div className="relative w-full max-w-3xl mx-auto">
            {/* Bildvisning */}
            <div className="relative p-5  overflow-hidden rounded-lg">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="mx-auto h-auto w-4/5 object-cover"
              />
            </div>

            {/* Navigeringsknappar */}
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Indikatorer */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex
                    ? "bg-gray-800"
                    : "bg-gray-400 hover:bg-gray-600"
                    }`}
                />
              ))}
            </div>
          </div>


        </div>
        <div className="cardText">
          <h3 className="cardHeading">VeloRent</h3>
          <p className="text-sm mt-2">This is a console app project where i created an app where it is possible for an user to login/register
            and rent a car. There are 3 different locations with different cars. The user has the possibility
            to update and cancel his bookings.
          </p>
          <div className="techStack">
            <h4 className="techStack__title">Tech Stacks</h4>
            <ol className="techStack__list">

              <li className="techStack__items"><svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg><span className="text-white">.NET</span></li>
              <li className="techStack__items"><svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg><span className="text-white">SQL</span></li>
              <li className="techStack__items"><svg width="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg><span className="text-white">Spectre.Console</span></li>
            </ol>
            <div className="githubLink">
              <a href="https://github.com/timsuv/VeloRent"><div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                  width="30"
                  height="30"
                >
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                </svg>
              </div>Github</a>

            </div>
          </div>
        </div>
      </div>

    </div>

  </>

  )
}