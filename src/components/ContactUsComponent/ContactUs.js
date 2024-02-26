import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/Redux/appSlice";

const ContactUs = () => {
  const dispatch = useDispatch();
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [emailToggle, setEmailToggle] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
    window.scrollTo(0, 0);
  }, []);

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
                  <div className="flex flex-col items-center justify-between">
                    <h2 className="text-xl font-bold mt-4  text-red-400">
                      Language and Library
                    </h2>
                    <div className=" flex flex-col gap-3 mt-4">
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
                        alt="Vercel"
                        src="https://img.shields.io/badge/vercel-%23121011.svg?style=for-the-badge&logo=vercel&logoColor=white"
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
                  </div>
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
                    <span className="font-semibold text-pink-400">
                      Search recommendation, Most popular video API, Random user
                      API, Comment API.
                    </span>
                  </p>
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-bold text-red-400">Technology</h2>
                </div>
                <div className="my-2">
                  <ul className="text-gray-100">
                    <li>
                      <span className="font-bold py-1 text-blue-400">
                        React:{" "}
                      </span>{" "}
                      The app's front end is developed using React, a popular
                      JavaScript library for building user interfaces, enabling
                      fast and interactive components.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        HTML & CSS:
                      </span>{" "}
                      The app's structure and styling are created using HTML and
                      CSS, ensuring a clean and visually appealing layout.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        Tailwind CSS:
                      </span>{" "}
                      Tailwind CSS is used for rapid UI development, providing
                      utility classes to style elements and components
                      efficiently.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">
                        React Router:
                      </span>{" "}
                      React Router is utilized for navigation, enabling dynamic
                      routing and rendering of different components based on the
                      URL.
                    </li>

                    <li>
                      <span className="font-bold text-blue-400">
                        Redux Toolkit:
                      </span>{" "}
                      Redux Toolkit is employed for state management, allowing
                      the app to manage complex state logic and data flow
                      efficiently.
                    </li>
                    <li>
                      <span className="font-bold text-blue-400">Vercel:</span>{" "}
                      Vercel is used for deployment, providing a seamless and
                      efficient platform for hosting the app and managing its
                      deployment lifecycle.
                    </li>

                    <li>
                      <span className="font-bold text-blue-400">
                        Custom Hooks:
                      </span>{" "}
                      Custom hooks are created to encapsulate reusable logic,
                      enhancing code reusability and maintainability.
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
                    <span className="font-bold text-yellow-200 text-xl">
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
                  <p className="pt-4 text-xl">
                    <span className="font-bold text-yellow-200">
                      Live Chat Feature: Real-time Interaction :
                    </span>{" "}
                  </p>
                  <ul>
                    <li>
                      <span className="text-green-500">
                        Efficient Memory Management:
                      </span>{" "}
                      chat message are added to the chat every 800 milliseconds
                      without freezing the memory. The feature intelligently
                      deletes the oldest comment at the top and adds the new
                      message at the bottom, ensuring smooth and efficient
                      memory usage.
                    </li>
                    <li>
                      <span className="text-green-500">
                        Random User and Message Generation:
                      </span>{" "}
                      The app utilizes the random user and random message APIs
                      to generate usernames, user photos, and messages for the
                      chat. This adds a layer of dynamism and realism to the
                      chat, mimicking the experience of a live conversation.
                    </li>
                    <li>
                      <span className="text-green-500">
                        Optimized API Calls:
                      </span>{" "}
                      To minimize API calls, the app makes an initial request
                      for 30 random users. It then reuses the same username and
                      user photo for the live chat, reducing unnecessary API
                      requests and optimizing performance.
                    </li>
                    <li>
                      <span className="text-green-500">User Interaction:</span>{" "}
                      Users can actively participate in the chat by adding their
                      messages, enhancing the social and interactive aspects of
                      the app.
                    </li>
                    <li>
                      <span className="text-green-500">
                        Social Media-like Experience:
                      </span>{" "}
                      The live chat feature provides users with a familiar and
                      engaging experience, similar to popular social media
                      platforms, fostering a sense of community and real-time
                      interaction.
                    </li>
                  </ul>
                  <p className="pt-4">
                    <span className="font-bold text-xl text-yellow-200">
                      Error Handling:
                    </span>{" "}
                    Robust error handling mechanisms are implemented to
                    gracefully manage and display errors, providing users with
                    informative feedback and maintaining a smooth user
                    experience.
                  </p>
                  <p className="pt-4">
                    <span className="font-bold text-xl text-yellow-200">
                      Shimmer UI:
                    </span>{" "}
                    Shimmer UI effects are integrated to enhance the loading
                    experience, providing users with visual feedback while
                    content is being fetched or processed.
                  </p>

                  <p className="pt-4">
                    <span className="font-bold text-xl text-yellow-200">
                      Dynamic Video Comments:
                    </span>{" "}
                    Comments are fetched and displayed based on the selected
                    video ID, ensuring that users see relevant comments for the
                    video they are viewing. It provide the information such as
                    its publish date, channel information (e.g., name, logo),
                    and subscriber count.
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
