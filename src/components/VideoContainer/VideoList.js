import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useChannelInfo } from "../../hooks/useChannelInfo";
import { ShimmerVideoContainer } from "./ShimmerVideoContainer";

const VideoList = () => {
  const video = useSelector((store) => store.video.mostPopularVideo);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useChannelInfo();

  return video === null ? (
    <ShimmerVideoContainer />
  ) : (
    <>
      <div
        className={`flex py-3 flex-wrap ${
          isMenuOpen
            ? "w-[83%] mx-[17%] justify-between"
            : "w-[100%] justify-around"
        } relative `}
      >
        {video.map((x) => (
          <div key={x.id}>
            <Link to={"watch?v=" + x.id}>
              <VideoCard popularVideo={x} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoList;
