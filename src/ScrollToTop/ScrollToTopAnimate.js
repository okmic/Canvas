import * as React from "react";
import { useScrollBy } from "react-use-window-scroll";

const HookExample = () => {
  const scrollBy = useScrollBy();
  return (
    <div>
      {/* Hard scroll down by 200 pixels */}
      <button onClick={() => scrollBy(200, 0)}>Hard Scroll By 200</button>
      {/* Smooth scroll down by 200 pixels */}
      <button
        onClick={() => scrollBy({ top: 200, left: 0, behavior: "smooth" })}
      >
        Smooth Scroll By 200
      </button> ...
    </div>
  );
};

export default HookExample