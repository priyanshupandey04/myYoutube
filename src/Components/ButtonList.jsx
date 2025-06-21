import React, { useRef, useState, useEffect } from "react";
import ButtonComponent from "./ButtonComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ButtonList = () => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const buttons = [
    "Gaming",
    "Darshan Raval",
    "BCCI",
    "Live",
    "Batter",
    "Indian pop music",
    "Cricket",
    "Universities",
    "Trains",
    "Gadgets",
    "Comedy",
    "Recently uploaded",
    "Watched",
    "Trending",
    "Latest",
    "Podcasts",
    "Beauty",
    "Sports",
    "Vlogs",
    "Podcasters",
    "E-sports",
  ];

  //   Property	What it means (in px)
  // scrollLeft	      How far you've scrolled horizontally from the left edge
  // scrollWidth	    Total width of the scrollable content (including hidden part)
  // clientWidth	    Width of the visible part of the container (the viewport window)
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollWidth - (el.clientWidth + el.scrollLeft) > 5);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    updateScrollButtons();
    const handleScroll = () => updateScrollButtons();
    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full py-2 bg-white">
      {/* Left Arrow */}
      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-1 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Scrollable tags container */}
      <div
        ref={scrollRef}
        className="px-8 overflow-x-auto no-scrollbar scroll-smooth"
      >
        <div className="flex gap-3 w-max">
          {buttons.map((name, index) => (
            <ButtonComponent key={index} name={name} />
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-1 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2"
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
