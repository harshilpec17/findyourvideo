import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/Redux/chatSlice";

const LiveChat = ({ data }) => {
  const dispatch = useDispatch();

  const [finalChat, setFinalChat] = useState(null);

  const finalMessage = useSelector((store) => store.chat.randomMessage);

  console.log(data);
  const textList = [
    "Great video! Really enjoyed it. 👍",
    "This content is fantastic! 😊",
    "The video kept me hooked till the end! 🎥👏",
    "Awesome content! Keep it up! 🌟",
    "I can't get enough of this video! 🤩",
    "Impressive video quality and content! 👌",
    "Thoroughly enjoyed watching this! 😄",
    "The video is absolutely captivating! 💖",
    "This content is top-notch! 🚀",
    "Couldn't stop watching! Amazing job! 🤯",
    "Informative and entertaining video! 📚😃",
    "I'm addicted to this video! 🎬",
    "Such a well-produced video! 🌈",
    "This content deserves more views! 👀",
    "Incredible video! Loved every minute of it. ❤️",
    "Engaging and entertaining content! 🤹‍♂️",
    "I can't resist watching this again! 🔄",
    "This video is a masterpiece! 🎨",
    "Addictive content, can't stop watching! 📺",
    "Thumbs up for this amazing video! 👍👍",
    "This content is a breath of fresh air! 🌬️",
    "The video quality is superb! 🌟",
    "Absolutely loved the content! 💯",
    "This video is a gem! 💎",
    "I'm hooked on this video! 🎣",
    "Great work on this content! 👏",
    "The video is simply outstanding! 🌠",
    "I keep coming back to watch this! 🔄",
    "This content is gold! 🏆",
    "Video excellence at its finest! 🌟🎥",
  ];

  function generateText() {
    return textList[Math.floor(Math.random() * textList.length)];
  }

  function generateData() {
    const generatedName = data[Math.floor(Math.random() * data.length)];
    let name = generatedName?.name?.first;
    return name;
  }

  function generateImage() {
    const generatedImage = data[Math.floor(Math.random() * data.length)];
    let image = generatedImage?.picture?.medium;
    return image;
  }

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateData(),
          text: generateText(),
          image: generateImage(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  console.log(finalChat);

  return (
    <>
      <div className="flex flex-col-reverse">
        {finalMessage !== undefined &&
          finalMessage.map((x) => (
            <ChatMessage image={x.image} text={x.text} name={x.name} />
          ))}
      </div>
    </>
  );
};

export default LiveChat;
