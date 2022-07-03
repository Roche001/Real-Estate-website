import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section id="Video">
      <div className="h2">
        <h5>Video Tour</h5>
        <h2>Featured House Tour Video</h2>
      </div>

      <div className="video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/etqSWXfXg8g?autoplay=1&cc_load_policy=1&color=white&controls=0&disablekb=1&loop=1&modestbranding=1&mute=1&playlist=etqSWXfXg8g"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          width="1200rem"
          height="500rem"
          frameborder="0"
        >
          {" "}
          Selected Video
        </iframe>
      </div>
    </section>
  );
};

export default Video;
