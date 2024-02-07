import React, { useState } from "react";

const ContactUs = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [emailToggle, setEmailToggle] = useState(false);
  return (
    <>
      <div className=" w-full text-[#D1D7E0]">
        <div className="container mx-auto py-8 bg-black">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-[#12100E] shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    alt="profile"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">Harshil Suthar</h1>
                  <p className="text-gray-700">Frontend Developer</p>
                </div>
                <div className="flex flex-col ">
                  <h3 className="font-semibold text-center mt-3 -mb-2">
                    Find me on
                  </h3>
                  <div className="flex justify-center items-center gap-6 my-6">
                    <div
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/in/harshil-s-854570248/"
                        )
                      }
                    >
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
                        alt="Linkedin Logo"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      />
                    </div>
                    <div
                      onClick={() =>
                        openInNewTab("https://github.com/harshilpec17")
                      }
                    >
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png"
                        alt="GitHub Logo"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      />
                    </div>
                    <div onClick={() => setEmailToggle(!emailToggle)}>
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/free-email-532-433830.png?f=webp&w=512"
                        alt="Email"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      ></img>
                    </div>
                  </div>

                  <span className="bg-orange-400 text-center font-semibold text-black px-2">
                    {emailToggle ? "harshilsuthar1995@gmail.com" : null}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-[#12100E] shadow rounded-lg p-6">
                <div className="my-2">
                  <h2 className="text-xl font-bold mb-2 text-red-400">
                    Overview
                  </h2>
                  <p className="text-gray-100">
                    Video streaming web application providing core
                    functionalities to users with a familiar interface for
                    browsing, recommendation, watching, and interacting with
                    videos. Leveraging Youtube API such as{" "}
                    <span className="font-semibold">
                      Search recommendation, Most popular video API, Random user
                      API, Comment API.
                    </span>
                  </p>
                </div>
                <h2 className="text-xl font-bold mt-4  text-red-400">
                  Language and Library
                </h2>
                <div className="flex gap-3 mt-4 flex-wrap">
                  <img
                    alt="HTML"
                    src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  ></img>
                  <img
                    alt="CSS"
                    src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  ></img>
                  <img
                    alt="Javascript"
                    src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                  ></img>

                  <img
                    alt="NodeJS"
                    src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                  ></img>

                  <img
                    alt="React"
                    src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  ></img>
                  <img
                    alt="React Router"
                    src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                  ></img>
                  <img
                    alt="Redux"
                    src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                  ></img>
                  <img
                    alt="Tailwind CSS"
                    src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                  ></img>
                  <img
                    alt="Babel"
                    src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black"
                  ></img>
                  <img
                    alt="Netlify"
                    src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"
                  ></img>
                  <img
                    alt="ES Lint"
                    src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
                  ></img>
                  <img
                    alt="GitHub"
                    src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                  ></img>
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-red-400">Technology</h2>
                </div>
                <div className="my-2">
                  <ul>
                    <li>
                      <span className="font-bold text-blue-400">React:</span>{" "}
                      Frontend library for building dynamic user interfaces.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        Redux Toolkit:
                      </span>{" "}
                      State management library for managing application state.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        Tailwind CSS:
                      </span>{" "}
                      Utility-first CSS framework for rapid UI development.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        Shimmer UI:
                      </span>{" "}
                      creating loading effects to enhance user experience.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        React Router:
                      </span>{" "}
                      Library for declarative routing in React applications.
                    </li>
                  </ul>
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-bold text-red-400">
                    Key Features:
                  </h2>
                </div>
                <div className="my-2">
                  <p>
                    <span className="font-bold text-yellow-400">
                      Debouncing searchbar :
                    </span>{" "}
                    To minimize API calls triggered by each key press, the
                    application employs a strategy where an API call is made
                    only if the user's typing duration exceeds{" "}
                    <span className="text-red-500 font bold">
                      200 milliseconds
                    </span>
                    . <br />- If the user types the same keyword again within
                    the search bar, Function will cross-references it with
                    already searched keywords. If an exact match is found, it
                    avoids making an additional API call. <br />- This approach
                    significantly enhances the application's efficiency by
                    reducing unnecessary API requests.
                  </p>
                  <p>
                    <span className="font-bold text-yellow-400">
                      Caching Live Chat :
                    </span>{" "}
                  </p>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 mr-2">at ABC Company</span>
                      <span className="text-gray-700">2017 - 2019</span>
                    </p>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
