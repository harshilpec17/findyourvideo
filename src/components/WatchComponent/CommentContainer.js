import React from "react";
import Comment from "./Comment";

const CommentContainer = () => {
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

  const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="ml-5 pl-5 border-l-black border-l-2">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };
  return (
    <>
      <h1 className="font-bold text-2xl ">Comments : </h1>
      <CommentList comments={commentData} />
    </>
  );
};

export default CommentContainer;
