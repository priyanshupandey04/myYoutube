import React from "react";

const dummyComments = [
  {
    name: "Priyanshu",
    comment: "I love this video",
    date: "2022-03-01",
    replies: [
      {
        name: "Adam",
        comment: "I also love this video",
        date: "2022-03-02",
        replies: [
          {
            name: "John",
            comment: "According to me this is the best video",
            date: "2022-03-03",
            replies: [
              {
                name: "Rampank",
                comment: "Not only this is the best video",
                date: "2022-03-04",
                replies: [
                  {
                    name: "Adam",
                    comment: "dude this is the best video",
                    date: "2022-03-05",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "John",
            comment: "How about this one",
            date: "2022-03-06",
            replies: [
              {
                name: "John",
                comment: "The beautiful one",
                date: "2022-03-07",
                replies: [
                  {
                    name: "Adam",
                    comment: "elegant",
                    date: "2022-03-08",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rahul",
    comment: "How much is the distance to delhi",
    date: "2022-03-09",
    replies: [
      {
        name: "Priyanshu",
        comment: "I am not sure",
        date: "2022-03-10",
        replies: [
          {
            name: "John",
            comment: "I am not sure either",
            date: "2022-03-11",
            replies: [
              {
                name: "Rampank",
                comment: "I am not sure either",
                date: "2022-03-12",
                replies: [
                  {
                    name: "Adam",
                    comment: "I am not sure either",
                    date: "2022-03-13",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Arnav",
    comment: "I got to know this place is best known for its food",
    date: "2022-03-14",
    replies: [
      {
        name: "wasim",
        comment: "Its near to the airport",
        date: "2022-03-15",
        replies: [
          {
            name: "Priyanshu",
            comment: "I love this place",
            date: "2022-03-16",
            replies: [
              {
                name: "Rampank",
                comment: "I love this place",
                date: "2022-03-17",
                replies: [
                  {
                    name: "Adam",
                    comment: "I love this place",
                    date: "2022-03-18",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Rampank",
    comment: "I like this place",
    date: "2022-03-19",
    replies: [],
  },
  {
    name: "Kabir",
    comment: "I like this place",
    date: "2022-03-20",
    replies: [],
  },
  {
    name: "Arjit Singh",
    comment: "He is the best youtuber",
    date: "2022-03-21",
    replies: [],
  },
  {
    name: "Laxman",
    comment: "Dad made me visit this place",
    date: "2022-03-22",
    replies: [
      {
        name: "Harsh",
        comment: "How much is it worth",
        date: "2022-03-23",
        replies: [],
      },
    ],
  },
];

const CommentComponent = ({ comment }) => {
  return (
    <>
      <div className="flex my-3 w-fit">
        <div className="mr-3">
          <img
            className="w-12 h-12 pt-1 rounded-full"
            alt="profile"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s"
          />
        </div>
        <div>
          <div className="font-semibold">{comment.name}</div>
          <div>{comment.comment}</div>
        </div>
      </div>
      <div className="ml-5 border-l-2 border-gray-900">
        {comment.replies.map((reply, index) => (
          <CommentComponent key={index} comment={reply} />
        ))}
      </div>
    </>
  );
};

const Comments = () => {
  return (
    <div className="h-fit ">
      {dummyComments.map((comment, index) => (
        <CommentComponent key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
