import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";

const url = "https://api.wistia.com/v1/medias.json";

const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  width: "100%",
  height: "100vh",
};
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
function App() {
  const [videoData, setVideoData] = useState([]);
  const [defaultVideoName, setDefaultVideoName] = useState("");
  const [video, setVideo] = useState("");
  useEffect(() => {
    fetch(url, options)
      .then((data) => data.json())
      .then((data) => fetchVideoData(data));
  }, []);
  console.log(videoData);
  // console.log(videoData.length);
  const changeVideo = (videoID) => {
    console.log(videoID);
    const videoIDNAME = videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    console.log(videoIDNAME[0].hashed_id);
    setVideo(videoIDNAME[0].hashed_id);
    setDefaultVideoName(videoIDNAME[0].name);
  };
  const fetchVideoData = (data) => {
    setVideoData(data);
    setVideo(data[0].hashed_id);
  };
  const renderVideo = () => {
    return (
      <div>
        <h2>{defaultVideoName}</h2>
        <div
          className="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            className="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <iframe
              src={`https://fast.wistia.com/embed/medias/${video}`}
              title="1"
              allowtransparency="true"
              frameBorder="0"
              scrolling="no"
              className="wistia_embed"
              name="wistia_embed"
              allowFullScreen=""
              mozallowfullscreen=""
              webkitallowfullscreen=""
              oallowfullscreen=""
              msallowfullscreen=""
              width={"100%"}
              height={"100%"}
              alt=""
            ></iframe>
          </div>
        </div>
        <br></br>
        <select
          name="UPVideos"
          id="UPVIDEOS"
          onChange={(e) => changeVideo(e.target.value)}
        >
          {videoData.map((data) => (
            <option value={data.name}>{data.name}</option>
          ))}
        </select>
        <br></br>
      </div>
    );
  };
  return (
    <div style={styles} className="Interactivator">
      {/* <VideoPlayerEmbed
        embedId={defaultVideoName}
        setState={setVideoData}
        videoData={videoData}
      /> */}
      {videoData.length > 0 ? (
        <div className="videoDiv">{renderVideo()}
        <details>
					<summary>
						Embed Code
					</summary>
					<div id="textDisplayCode">Hello</div>
					<div id="iFrame" contenteditable="true" onclick="copyTextToClipBoard()" oninput="reverseUpdate()">
					</div>
				</details>
        </div>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <div></div>
    </div>
  );
}

export default App;
