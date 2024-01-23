import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { API_KEY, COMMENT_API } from "../../utils/Constant";

const CommentContainer = ({ id }) => {
  const [comment, setComment] = useState("");

  const commentData = [
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [],
            },
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [
                {
                  name: "Harshil Suthar",
                  text: "Lorem ipsum hello dollar lor dav",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
      ],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [],
        },
      ],
    },
    {
      name: "Harshil Suthar",
      text: "Lorem ipsum hello dollar lor dav",
      replies: [
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [
                {
                  name: "Harshil Suthar",
                  text: "Lorem ipsum hello dollar lor dav",
                  replies: [],
                },
              ],
            },
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [
                {
                  name: "Harshil Suthar",
                  text: "Lorem ipsum hello dollar lor dav",
                  replies: [
                    {
                      name: "Harshil Suthar",
                      text: "Lorem ipsum hello dollar lor dav",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Harshil Suthar",
          text: "Lorem ipsum hello dollar lor dav",
          replies: [
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [],
            },
            {
              name: "Harshil Suthar",
              text: "Lorem ipsum hello dollar lor dav",
              replies: [],
            },
          ],
        },
      ],
    },
  ];

  const getComment = async () => {
    const data = await fetch(`${COMMENT_API + id + "&key=" + API_KEY}`);
    const json = await data.json();
    const result = json.items;
    setComment(result);
    console.log(result);
  };

  useEffect(() => {
    getComment();
  }, []);

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment
          text={comment.snippet?.topLevelComment?.snippet?.textOriginal}
        />
        <div className="ml-5 pl-5 border-l-black border-l-2">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

  if (comment === null) return;
  return (
    <>
      <h1 className="font-bold text-2xl py-4 ">Comments : </h1>
      {comment &&
        comment.map((x) => (
          <div key={x.id}>
            <Comment
              text={x.snippet?.topLevelComment?.snippet?.textOriginal}
              name={x.snippet?.topLevelComment?.snippet?.authorDisplayName}
              image={x.snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
              timeStamp={x.snippet.topLevelComment.snippet.publishedAt}
            />
          </div>
        ))}
    </>
  );
};

export default CommentContainer;
