import { Link, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Video from "./Video";
import LiveChatContainer from "./LiveChatContainer";
import { useLiveMessage } from "../../hooks/useLiveMessage";
import { useSelector } from "react-redux";
import SubscriberContainer from "./SubscriberContainer";
import { useChannelInfo } from "../../hooks/useChannelInfo";
import VideoCard from "../VideoContainer/VideoCard";
import { useEffect } from "react";

const Watch = () => {
  const chatData = useSelector((store) => store.chat.chatRandomData);
  const channelInfo = useSelector((store) => store.selectVideo.channelInfo);
  const video = useSelector((store) => store.video.mostPopularVideo);

  const [searchParams] = useSearchParams();

  useLiveMessage();
  useChannelInfo();

  const id = searchParams.get("v");

  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <>
      <div className="px-5 py-4 flex flex-row justify-between w-screen bg-zinc-950">
        <div className="w-[70%]">
          <Video id={searchParams.get("v")} />
          {channelInfo && <SubscriberContainer channel={channelInfo} />}
          <CommentContainer id={searchParams.get("v")} />
        </div>
        <div className="w-[29%] flex flex-col items-center gap-5">
          {chatData && <LiveChatContainer chatData={chatData} />}
          <div className="w-full px-10 overflow-y-scroll h-screen">
            {video.map((x) => (
              <div key={x.id}>
                <Link to={"?v=" + x.id}>
                  <VideoCard popularVideo={x} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
