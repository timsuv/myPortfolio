export const Home = () => {
  return (
    <div>
      <div className="heading">
        <h2>About me</h2>
      </div>

      <p className=" text-sm mt-4">
        I am a <strong>full-stack .NET</strong>development student at Chas
        Academy, eager to apply my skills in a real-world setting. With a strong
        foundation in <strong>C#, SQL, HTML & CSS, and JavaScript</strong>, I am
        passionate about learning, problem-solving, and building innovative
        solutions. I am actively seeking an <strong>internship</strong> where I
        can contribute, grow, and gain hands-on experience while collaborating
        with a team of professionals.
      </p>

      <section>
        <div className="text-xl font-bold mt-4">
          <h2>What I'm doing</h2>
        </div>
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-4">
        <div className="border p-3 flex rounded-md border-gray-400 bg-zinc-700 gap-6">
          <div className="flex items-center justify-start gap-3 text-green-500  ">
            <svg
              viewBox="0 0 24 24"
              width="45"
              height="45"
              role="img"
              color="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>.NET icon</title>
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  d="M3.1672 7.5655v8.749H4.19v-6.325a8.979 8.979 0 0 0-.0488-1.1998h.0384a2.9082 2.9082 0 0 0 .2784.5473l4.4973 6.9774h1.2569V7.5655H9.1904v6.1526a9.2574 9.2574 0 0 0 .0619 1.286h-.0234c-.0544-.1056-.173-.3002-.3553-.585L4.4964 7.5656zm9.315 0v8.749h4.65l.0048-.9599h-3.6087v-3.0331h3.1579V11.4h-3.1579V8.4916h3.3884v-.926zm5.4374 0v.926h2.5149v7.823h1.0216v-7.823H24v-.926zM.6534 15.067a.643.643 0 0 0-.4565.2062A.6719.6719 0 0 0 0 15.753a.6623.6623 0 0 0 .1968.4799.6479.6479 0 0 0 .4799.2015.6623.6623 0 0 0 .4799-.2015.6575.6575 0 0 0 .2015-.48.667.667 0 0 0-.2015-.4798.6575.6575 0 0 0-.4799-.2062.643.643 0 0 0-.0234 0z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg">Back-End C#/.NET</h3>
            <p className="text-gray-300 text-sm">
              I have studied C# and .NET, building a strong foundation in
              back-end development, and gained hands-on experience with database
              management, API integration, and object-oriented programming.
            </p>
          </div>
        </div>

        <div className="border p-3 flex rounded-md border-gray-400 bg-zinc-700 gap-6">
          <div className="flex items-center justify-start gap-3 mt-3 text-green-500 ">
            <svg
              viewBox="0 0 24 24"
              width="45"
              height="45"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="nonzero"
                  clipRule="nonzero"
                  d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
                  fill="#10B981"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg">Front-End JavaScript, React</h3>
            <p className="text-gray-300 text-sm">
              I have studied JavaScript and React, gaining a foundation in
              front-end development, building dynamic, user-friendly interfaces.
            </p>
          </div>
        </div>
      </section>
      {/* hfjfj */}
      <section className="container grid grid-cols-1 md:grid-cols-2  gap-4 items-center mt-4">
        <div className="border p-3 flex rounded-md border-gray-400 bg-zinc-700 gap-6">
          <div className="flex items-center justify-start gap-3 text-green-500  ">
            <svg
              viewBox="0 0 24 24"
              width="45"
              height="45"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M21.3,19a2.42,2.42,0,0,1-2.5.56l-2.35,2.35a.34.34,0,0,1-.49,0l-1-1a.36.36,0,0,1,0-.49l2.36-2.35a2.39,2.39,0,0,1,3.39-2.91L19.12,16.8l1,1,1.62-1.62A2.39,2.39,0,0,1,21.3,19ZM22,8v5.76A4.47,4.47,0,0,0,19.5,13a4.57,4.57,0,0,0-1.29.19V9.29H16.66V14A4.5,4.5,0,0,0,15,17.5a4.07,4.07,0,0,0,0,.5H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H20A2,2,0,0,1,22,8ZM11,15,9.09,9.27H7L5.17,15h1.7l.29-1.07H9L9.29,15Zm4.77-3.89a1.67,1.67,0,0,0-.55-1.35,2.43,2.43,0,0,0-1.62-.47h-2V15h1.54V13.11h.44a2.75,2.75,0,0,0,1-.17,1.82,1.82,0,0,0,.67-.44,1.63,1.63,0,0,0,.36-.64A2.36,2.36,0,0,0,15.75,11.11Zm-7.3.62-.12-.44-.15-.58c0-.21-.08-.37-.11-.5a4.63,4.63,0,0,1-.1.48c0,.19-.08.38-.13.57s-.08.34-.12.47l-.24.93H8.69Zm5.59-1a.63.63,0,0,0-.5-.17h-.4v1.31h.31a.9.9,0,0,0,.37-.07.59.59,0,0,0,.27-.22.75.75,0,0,0,.11-.42A.57.57,0,0,0,14,10.71Z"></path>
                <rect width="24" height="24" fill="none"></rect>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg">API</h3>
            <p className="text-gray-300 text-sm">
              I have learned to build APIs, creating minimal
              RESTful services using .NET Core, focusing on back-end
              integration, data handling, and seamless communication between
              applications.
            </p>
          </div>
        </div>

        <div className="border p-3 flex rounded-md border-gray-400 bg-zinc-700 gap-6">
          <div className="flex items-center justify-start gap-3 mt-2 text-green-500 ">
            <svg
              fill="currentColor"
              viewBox="0 0 32 32"
              width="45"
              height="45"
              id="icon"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <defs>
                  <style>.cls-1</style>
                </defs>
                <title>SQL</title>
                <polygon points="24 21 24 9 22 9 22 23 30 23 30 21 24 21"></polygon>
                <path d="M18,9H14a2,2,0,0,0-2,2V21a2,2,0,0,0,2,2h1v2a2,2,0,0,0,2,2h2V25H17V23h1a2,2,0,0,0,2-2V11A2,2,0,0,0,18,9ZM14,21V11h4V21Z"></path>
                <path d="M8,23H2V21H8V17H4a2,2,0,0,1-2-2V11A2,2,0,0,1,4,9h6v2H4v4H8a2,2,0,0,1,2,2v4A2,2,0,0,1,8,23Z"></path>
                <rect
                  id="_Transparent_Rectangle_"
                  data-name="<Transparent Rectangle>"
                ></rect>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg">Database/SQL</h3>
            <p className="text-gray-300 text-sm">
              I have studied databases, MySQL, and Entity Framework, gaining a
              strong foundation in database architecture, data management, and
              efficient querying for back-end development.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
