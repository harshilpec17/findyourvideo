import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import Video from "./Video";
import LiveChatContainer from "./LiveChatContainer";
import { useLiveMessage } from "../../hooks/useLiveMessage";
import { useSelector } from "react-redux";
import SubscriberContainer from "./SubscriberContainer";

const Watch = () => {
  const chatData = useSelector((store) => store.chat.chatRandomData);

  const [searchParams] = useSearchParams();

  useLiveMessage();

  return (
    <>
      <div className="px-5 py-4 flex flex-row justify-between w-screen">
        <div>
          <Video id={searchParams.get("v")} />
          <SubscriberContainer />
          <CommentContainer />
        </div>
        {chatData && <LiveChatContainer chatData={chatData} />}
      </div>
    </>
  );
};

export default Watch;
