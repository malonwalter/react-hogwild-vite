import React, { useState } from "react";

function HogCard({ hog, handleHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      aria-label="hog card"
      className="ui card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="image">
        <img alt={`Photo of ${hog.name}`} src={hog.image} />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <div>
  <p>{`Specialty: ${hog.specialty}`}</p>
  <p>{hog.weight}</p>
  <p>{hog.greased ? "Greased" : "Nongreased"}</p>
  <p>{hog["highest medal achieved"]}</p>
</div>
        )}
      </div>

      <div className="extra content">
        <button
          className="ui button"
          onClick={(e) => {
            e.stopPropagation();
            handleHideHog(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;