import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Video from "./Video";
import LiveChatContainer from "./LiveChatContainer";
import { useLiveMessage } from "../../hooks/useLiveMessage";
import { useSelector } from "react-redux";
import SubscriberContainer from "./SubscriberContainer";
import { useChannelInfo } from "../../hooks/useChannelInfo";

const Watch = () => {
  const chatData = useSelector((store) => store.chat.chatRandomData);
  const channelInfo = useSelector((store) => store.selectVideo.channelInfo);

  const [searchParams] = useSearchParams();

  useLiveMessage();
  useChannelInfo();

  return (
    <>
      <div className="px-5 py-4 flex flex-row justify-between w-screen">
        <div className="w-[70%]">
          <Video id={searchParams.get("v")} />
          {channelInfo && <SubscriberContainer channel={channelInfo} />}
          <CommentContainer id={searchParams.get("v")} />
        </div>
        {chatData && <LiveChatContainer chatData={chatData} />}
      </div>
    </>
  );
};

export default Watch;
