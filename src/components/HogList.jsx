import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs, handleHideHog }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <div className="ui eight wide column" key={hog.name}>
          <HogCard hog={hog} handleHideHog={handleHideHog} />
        </div>
      ))}
    </div>
  );
}

export default HogList;