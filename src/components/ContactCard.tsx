import myMemoji from "../img/meMemoji.png";
import { MapModal } from "./MapModal";
export const ContactCard = () => {
  return (
    <div className="col-span-12 lg:col-span-3 border bg-zinc-800 border-gray-400 rounded-2xl p-3 flex flex-row md:flex-col items-center gap-3 lg:h-[500px] ">
      <section className="flex flex-col gap-3 items-center lg:border-b border-b-gray-400 ">
        <div className="img_container border-gray-700 bg-zinc-600 border rounded-2xl w-1/2">
          <img
            className="object-cover  mx-auto"
            src={myMemoji}
            alt="This should be my picture, I hope you can see it"
          />
        </div>
        <h1 className="text-xl">Timofey Suvorov</h1>

        <span className="text-xs bg-zinc-600 rounded-lg p-1 mb-4">
          Fullstack developer
        </span>
      </section>
      <section className="">
      <section className="text-xs flex flex-col gap-6">
        <div className="flex flex-row gap-3 items-center ">
          <div className="text-green-500 border-t border-l rounded-md p-2 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 6L12 11L4 6H20ZM4 18V8L12 13L20 8V18H4Z" />
            </svg>
          </div>

          <div>
            <h3>Email</h3>
            <a href="mailto:timsuvorov@icloud.com">timsuvorov@icloud.com</a>
          </div>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className="text-green-500 border-t border-l rounded-md p-2 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.4 11.4 0 003.61 1.11 1 1 0 01.84 1v3.44a1 1 0 01-1 1A17 17 0 013 4.56a1 1 0 011-1h3.44a1 1 0 011 .84 11.4 11.4 0 001.11 3.61 1 1 0 01-.21 1.11l-2.2 2.2z" />
            </svg>
          </div>
          <div>
            <h3>Phone</h3>
            <a>0761772149</a>
          </div>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className="text-green-500 border-t border-l rounded-md p-2 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />{" "}
            </svg>
          </div>
          <div>
            <h3>Stockholm, Sweden</h3>
            <MapModal />
          </div>
        </div>
      </section>
      <section className="flex flex-row gap-3 mt-3">
        <a
          href="https://linkedin.com/in/timofey-suvorov-99a35a224"
          target="_blank"
        >
          <div className="text-gray-400 hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
            </svg>
          </div>
        </a>
        <a href="https://github.com/timsuv" target="_blank">
          <div className="text-gray-400 hover:text-gray-200">
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
          </div>
        </a>
      </section>
      </section>
      
    </div>
  );
};
