const nameList = [
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
export function generate() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function formatNumber(num, precision = 2) {
  const map = [
    { suffix: "T", threshold: 1e12 },
    { suffix: "B", threshold: 1e9 },
    { suffix: "M", threshold: 1e6 },
    { suffix: "K", threshold: 1e3 },
    { suffix: "", threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
