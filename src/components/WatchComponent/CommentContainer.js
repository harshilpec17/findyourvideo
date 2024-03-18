import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { API_KEY, COMMENT_API } from "../../utils/Constant/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideoComment } from "../../utils/Redux/chatSlice";

const CommentContainer = ({ id }) => {
  const dispatch = useDispatch();
  const comment = useSelector((store) => store.chat.videoComment);

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

    dispatch(addVideoComment(result));
  };

  useEffect(() => {
    getComment();
  }, [id]);

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="ml-5 pl-5 border-l-black border-l-2">
          <CommentList comments={comment} />
        </div>
      </div>
    ));
  };

  if (comment === null) return;
  return (
    <>
      <h1 className="font-bold text-2xl py-4 text-white ">Comments : </h1>
      {comment &&
        comment.map((x) => (
          <div key={x.id}>
            <Comment data={x} />
          </div>
        ))}
    </>
  );
};

export default CommentContainer;
