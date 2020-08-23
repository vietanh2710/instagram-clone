import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./components/VideosCard/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    //app components will run ONCE when it loads
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    //BEM naming convention
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
