import React from "react";

function VideoComponent(props) {
  return (
    <div>
      <iframe
        width="813"
        height="457"
        src="https://www.youtube.com/embed/agKrrTYidrE?list=PLgKSAx6n4vh-C26g20E5_BW3CEA7OMmdV"
        title="Аниме Клип - Gangnam Style."
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
