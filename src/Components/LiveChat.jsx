import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { generate } from "../Utils/randomNameGenerator";

const LiveChat = () => {
  const containerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [autoScroll, setAutoScroll] = useState(true);

  const lastHeight = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => {
        const newMsg = {
          profileImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s",
          username: generate(),
          message: "Hey, how are you doing?",
        };
        const updated = [newMsg, ...prev];
        return updated.length > 100 ? updated.slice(0, 100) : updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      setAutoScroll(el.scrollTop > -50);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll logic
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prevHeight = el.scrollHeight;
    const prevTop = el.scrollTop;

    requestAnimationFrame(() => {
      if (autoScroll) {
        el.scrollTop = 0;
        if (messages.length > 50) setMessages(messages.slice(0, 25));
      } else {
        el.scrollTop = prevTop - (el.scrollHeight - lastHeight.current - 0.5);
      }
      lastHeight.current = prevHeight;
    });
  }, [messages]);

  return (
    <div className="h-2/3  w-[90%] ml-10 mr-10 mt-9 rounded-lg ">
      <div
        ref={containerRef}
        className="flex flex-col-reverse h-full p-2 overflow-y-auto border border-gray-200 rounded-lg shadow-2xl shadow-black/50"
      >
        {messages.map((chat, index) => (
          <Chat
            key={index}
            profileImg={chat.profileImg}
            username={chat.username}
            message={chat.message}
          />
        ))}
      </div>
      <div className="p-2 border-t border-gray-300">
        <button
          className="px-4 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={() =>
            setMessages((msgs) => [
              {
                profileImg:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7qKgRvChw4p7QLmLJ_Vw2PyM11C6ThI6oA&s",
                username: "You",
                message: "Manual message!",
              },
              ...msgs,
            ])
          }
        >
          Send Manual Message
        </button>
      </div>
    </div>
  );
};

const Chat = ({ profileImg, username, message }) => {
  return (
    <div className="flex py-2 cursor-pointer hover:bg-gray-300">
      <div className="mx-3">
        <img
          className="w-6 h-6 rounded-full"
          alt="Userprofile"
          src={profileImg}
        />
      </div>
      <div className="flex">
        <div className="mx-2 font-semibold text-gray-600">{username}</div>
        <div className="mx-1 text-black">{message}</div>
      </div>
    </div>
  );
};

export default LiveChat;
