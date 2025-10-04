import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/reels")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setReels(data);
      })
      .catch(() => {
        console.error("Error fetching reels");
      });
  }, []);

  return (
    <div className="reels-main">
      <h2 className="reels-title">🎬 Featured Reels</h2>
      {reels.length === 0 ? (
        <p className="no-reels">
          Reels are currently unavailable due to mock API limitations.
        </p>
      ) : (
        reels.map((reel) => (
          <div key={reel.id} className="reel-card">
            <video
              src={reel.videoUrl}
              controls
              autoPlay
              muted
              loop
              className="reel-video"
            />
            <div className="info">
              <h4 className="reel-username">@{reel.id}</h4>
              <p className="reel-title">{reel.title}</p>
              <span className="reel-likes">❤️ {reel.likes}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;
