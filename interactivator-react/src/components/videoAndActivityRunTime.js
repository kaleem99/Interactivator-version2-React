import "./components.scss";
import { useState } from "react";
function VideoAndActivityRunTime({ state }) {
  const [videoTime, setVideoTime] = useState("");
  const [time, setTime] = useState("");
  window._wq = window._wq || [];
  window._wq.push({
    id: state.video,
    onFind: function (video) {
      video.addPlugin("myPluginName", {
        src: "https://wiggly-tree-nectarine.glitch.me/my-plugin.js",
      });
    },
    onHasData: () => {
      console.log("onHasData");
    },
    onReady: function (video) {
      console.log(video.duration());
      setVideoTime(video.duration());
      setTime(video.time());
    },
    onchange: function (video) {
      console.log(video.time());
    },
    // onplay: myOnReady
  });
  const timeDuration = () => {
    const min = parseInt(videoTime / 60);
    const sec = parseInt(videoTime % 60);
    if (min < 10) {
      return "0" + min + ":" + sec;
    }
    if (sec < 10) {
      return min + ":" + "0" + sec;
    }
    return min + ":" + sec;
  };
  return (
    <div>
      <div className="VideoRuntime">
        <p>Video Runtime:</p>
        <div className="runtime">
          <p className="timeDuration">{timeDuration()}</p>
        </div>
      </div>
      <div className="VideoRuntime">
        <p>Activity Runtime:</p>
        <div className="runtime"></div>
      </div>
    </div>
  );
}

export default VideoAndActivityRunTime;
