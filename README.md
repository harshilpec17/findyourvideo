## Overview

Video streaming web application providing core functionalities to users with a familiar interface for browsing, recommendation, watching, and interacting with videos.<font color="pink"> Leveraging Youtube API such as Search recommendation, Most popular video API, Random user API, Comment API.</font>

### **[findyourvideo.vercel.app](https://findyourvideo.vercel.app/)**

![findyourvideo.com](/video-streaming-app/src/utils/Asset/findyourvideo.png)

## Language and Library

- HTML5
- CSS3
- JavaScript
- Node.js
- React
- React Router
- Redux
- Tailwind CSS
- Babel
- Vercel
- ESLint
- GitHub

## **Key Features:**

- <font color="green">**Debouncing Search-bar:**</font> To minimize API calls triggered by each key press, the application employs a strategy where an API call is made only if the user's typing duration exceeds **200 milliseconds**
  - If the user types the same keyword again within the search bar, Function will cross-references it with already searched keywords. If an exact match is found, it avoids making an additional API call.
  - This approach significantly enhances the application's efficiency by reducing unnecessary API requests.
- <font color="green">**Live Chat Feature: Real-time Interaction :**</font>
  - **Efficient Memory Management:** chat message are added to the chat every **800 milliseconds** without freezing the memory. The feature intelligently deletes the oldest comment at the top and adds the new message at the bottom, ensuring smooth and efficient memory usage.
  - **Random User and Message Generation:** The app utilizes the random user and random message APIs to generate usernames, user photos, and messages for the chat. This adds a layer of dynamism and realism to the chat, mimicking the experience of a live conversation.
  - **Optimized API Calls:** To minimize API calls, the app makes an initial request for 30 random users. It then reuses the same username and user photo for the live chat, reducing unnecessary API requests and optimizing performance.
  - **User Interaction:** Users can actively participate in the chat by adding their messages, enhancing the social and interactive aspects of the app.
  - **Social Media-like Experience:** The live chat feature provides users with a familiar and engaging experience, similar to popular social media platforms, fostering a sense of community and real-time interaction.
- <font color="green"> **Error Handling:** </font> Robust error handling mechanisms are implemented to gracefully manage and display errors, providing users with informative feedback and maintaining a smooth user experience.
- <font color="green">**Shimmer UI:** </font> Shimmer UI effects are integrated to enhance the loading experience, providing users with visual feedback while content is being fetched or processed.
- <font color="green"> **Dynamic Video Comments:** </font> Comments are fetched and displayed based on the selected video ID, ensuring that users see relevant comments for the video they are viewing. It provide the information such as its publish date, channel information (e.g., name, logo), and subscriber count.

## Technology

- **React:** The app's front end is developed using React, a popular JavaScript library for building user interfaces, enabling fast and interactive components.
- **HTML & CSS:** The app's structure and styling are created using HTML and CSS, ensuring a clean and visually appealing layout.
- **Tailwind CSS:** Tailwind CSS is used for rapid UI development, providing utility classes to style elements and components efficiently.
- **React Router:** React Router is utilized for navigation, enabling dynamic routing and rendering of different components based on the URL.
- **Redux Toolkit:** Redux Toolkit is employed for state management, allowing the app to manage complex state logic and data flow efficiently.
- **Vercel:** Vercel is used for deployment, providing a seamless and efficient platform for hosting the app and managing its deployment lifecycle.
- **Custom Hooks:** Custom hooks are created to encapsulate reusable logic, enhancing code reusability and maintainability.

---

### Find me on

[![LinkedIn Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/30px-LinkedIn_logo_initials.png)](https://www.linkedin.com/in/harshil-s-854570248/)

Email: harshilsuthar1995@gmail.com

## **Experience**

### Find Your Movie: [findyourmovie.vercel.app](https://findyourmovie.vercel.app)

- The Movie Recommendation Web App is an innovative platform designed to provide personalized movie recommendations based on the user's mood. Powered by the **GPT-3.5 Turbo model**, the app leverages advanced natural language processing to understand user inputs and generate relevant movie suggestions.

### Find Your Food: [findyourfood.vercel.app](https://findyourfood.vercel.app)

- Food delivery web app is a dynamic and user-friendly
  platform designed to connect users with local restaurants
  for quick and convenient food ordering.
  <font color="pink">
  Key features Include:
  Lazy loading, HOC(Higher Order Component), Dark light
  mode, Internet connectivity check, Shimmer UI</font>
