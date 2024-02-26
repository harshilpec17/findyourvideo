import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { calculateTime } from "../../hooks/useCalculateTime";

const Comment = ({ data }) => {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    textOriginal,
    publishedAt,
  } = data.snippet?.topLevelComment?.snippet;

  console.log(data);

  const [time, setTime] = useState();
  useEffect(() => {
    setTime(calculateTime(publishedAt));

    // Update time every minute (60,000 milliseconds)
    const intervalId = setInterval(calculateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [publishedAt]);

  if (data === null) return;

  return (
    <>
      <div className="flex items-center py-1 text-white">
        {authorProfileImageUrl ? (
          <img
            alt="user"
            src={authorProfileImageUrl}
            className="w-10 h-10 rounded-full"
          ></img>
        ) : (
          <img
            alt="user"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNhPfPQ0f1BFPpk4lGR3gBEzewX20j0F2BSQ&usqp=CAU"
            }
            className="w-10 h-10 rounded-full"
          ></img>
        )}
        <div className="px-4 rounded-md w-full">
          <div className="flex items-center">
            <p className="font-semibold text-white">{authorDisplayName}</p>
            <p className="text-gray-400 text-xs pl-3">{time}</p>
          </div>
          <p className="text-gray-200 pl-1 text-base font-normal">
            {textOriginal}
          </p>
        </div>
      </div>
    </>
  );
};

const CommentBox = ({ comment, handle, rep }) => {
  return (
    <div>
      <Comment data={comment} />
      {comment.replies && (
        <div className="ml-20 my-2 pl-3 border-l border-l-gray-500 ">
          <div
            onClick={handle}
            className="flex items-center gap-2 cursor-pointer font-medium text-blue-600"
          >
            Replies ({comment.replies.comments.length}){" "}
            {rep ? (
              <FaChevronUp size={15} className="mt-1" />
            ) : (
              <FaChevronDown size={15} className="mt-1" />
            )}
          </div>
          {rep && <CommentList comments={comment.replies.comments} />}
        </div>
      )}
    </div>
  );
};

const CommentList = ({ comments }) => {
  const [showIndex, setShowIndex] = useState(null);
  const handleShow = (index) => {
    if (showIndex !== index) {
      setShowIndex(index);
    } else {
      setShowIndex(null);
    }
  };

  comments.map((comment, index) => (
    <CommentBox
      key={comment.id}
      rep={index === showIndex ? true : false}
      handle={() => handleShow(index)}
      comment={comment}
      index={index}
    />
  ));
};

const commentContainer = () => {
  <CommentList comments={Comment} />;
};

export default Comment;
