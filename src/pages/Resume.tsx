export const Resume = () => {
  return (
    <div className="flex flex-col">
      <div className="heading">
        <h2>Resume</h2>
      </div>
      <div className="container mt-6 grid md:grid-cols-2 md:gap-3 grid-cols-1 gap-4">
        <ol className="relative border-s h-64 border-gray-200 dark:border-gray-700 ml-3  ">
          <li className="mb-6 ms-6">
            <span className="timelineIcon text-green-500">
              <svg
                fill="currentColor"
                viewBox="0 0 1024 1024"
                width={35}
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                strokeWidth="26"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M197.769 791.767l60.672-286.853c2.341-11.066-4.733-21.934-15.799-24.275s-21.934 4.733-24.275 15.799l-60.672 286.853c-2.341 11.066 4.733 21.934 15.799 24.275s21.934-4.733 24.275-15.799zm571.063-286.786l61.778 287.068c2.38 11.058 13.273 18.093 24.33 15.713s18.093-13.273 15.713-24.33l-61.778-287.068c-2.38-11.058-13.273-18.093-24.33-15.713s-18.093 13.273-15.713 24.33z"></path>
                  <path d="M967.45 386.902L535.9 208.126c-10.609-4.399-30.569-4.442-41.207-.088L57.821 386.901l436.881 178.857c10.624 4.355 30.583 4.313 41.207-.085L967.45 386.901zM551.583 603.516c-20.609 8.533-51.787 8.599-72.409.145L24.437 417.494c-32.587-13.359-32.587-47.847.009-61.188l454.73-186.174c20.641-8.448 51.818-8.382 72.407.156l448.836 185.936c32.466 13.442 32.466 47.913.004 61.354l-448.84 185.938zm288.673 166.569c-98 57.565-209.669 88.356-325.888 88.356-116.363 0-228.162-30.866-326.246-88.564-9.749-5.735-22.301-2.481-28.036 7.268s-2.481 22.301 7.268 28.036c104.336 61.377 223.297 94.22 347.014 94.22 123.564 0 242.386-32.763 346.634-93.998 9.753-5.729 13.015-18.279 7.286-28.032s-18.279-13.015-28.032-7.286z"></path>
                  <path d="M983.919 383.052v296.233c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V383.052c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"></path>
                </g>
              </svg>
            </span>
            <h4 className="timelineHeading">Education</h4>
          </li>
          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                ChasAcademy{" "}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2024 - Current (Major 2026)
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Fullstack .NET developer
              </p>
            </span>
          </li>

          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                Stockholm University
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2020 - June2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Bachelor Translator
              </p>
            </span>
          </li>
          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                French School{" "}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2020 - June 2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Bachelor Translator
              </p>
            </span>
          </li>
        </ol>
        <ol className="relative border-s h-64 border-gray-200 dark:border-gray-700 ml-3 mt-14 ">
          <li className="mb-6 ms-6">
            <span className="timelineIcon text-green-500">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </span>
            <h4 className="timelineHeading ">Experiences</h4>
          </li>
          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                Ritorno{" "}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2018 - Current
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Barista/Admin/WordPress/Slack Manager
              </p>
            </span>
          </li>

          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                Stockholm University
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2020 - June2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Bachelor Translator
              </p>
            </span>
          </li>
          <li className="mb-4 ms-6 flex items-top">
            <span className="timelineIcon ">
              <div className="rounded-full bg-green-800 h-4 w-4 flex justify-center items-center">
                <div className="rounded-full bg-green-500 w-2 h-2 border-1"></div>
              </div>
            </span>
            <span>
              <h4 className="mb-1 text-md  text-gray-900 dark:text-white">
                French School{" "}
              </h4>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Sept 2020 - June2023
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Bachelor Translator
              </p>
            </span>
          </li>
        </ol>
      </div>
      <section className="bg-zinc-500 mt-20 rounded-lg border-2 border-gray-400 p-3">
        <h4 className="font-bold text-md">My skills</h4>
        <section className="mb-2">
          <div className="flex justify-between mb-1 ">
            <span className="text-sm text-blue-700 dark:text-white mt-2">
              C# and .NET Base
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-400 h-2.5 rounded-full w-[100%]"></div>
          </div>

        </section>
        <section className="mb-2">
          <div className="flex justify-between mb-1 ">
            <span className="text-sm text-blue-700 dark:text-white mt-2">
              Databases (SQL)
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              100%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-400 h-2.5 rounded-full w-[100%]"></div>
          </div>

        </section>
        <section className="mb-2">
          <div className="flex justify-between mb-1 ">
            <span className="text-sm text-blue-700 dark:text-white mt-2">
              Backend programming C#
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              10%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-400 h-2.5 rounded-full w-[10%]"></div>
          </div>

        </section>
        <section>
          <div className="flex justify-between mb-1 ">
            <span className="text-sm text-blue-700 dark:text-white mt-2">
              Frontend programming (JS, React)
            </span>
            <span className="text-sm font-medium text-blue-700 dark:text-white">
              10%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-400 h-2.5 rounded-full w-[10%]"></div>
          </div>

        </section>

      </section>
    </div>
  );
};
