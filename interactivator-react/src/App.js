import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";
import { useDispatch, useSelector } from "react-redux";
const url = "https://api.wistia.com/v1/medias.json";

const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};
const buttons = {};
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
  const [transcripts, setTranscripts] = useState("");
  const [InteractiveButtons, setInteractiveButtons] = useState({
    Subtitles: false,
    Text: "",
  });
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch(url, options).then((data) => data.json());

      dispatch({ type: "FETCH_VIDEO", payload: result });
      const url2 = `https://api.wistia.com/v1/medias/${state.video}/captions.json`;
      const subtitles = await fetch(url2, options).then((data) => data.json());
      console.log(subtitles);
    };
    fetchdata();
  }, []);
  const changeVideo = (videoID) => {
    const videoIDNAME = state.videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    dispatch({ type: "CHANGE_VIDEO", payload: videoIDNAME[0].hashed_id });
  };
  const fetchVideoData = (data) => {
    setVideoData(data);
    setVideo(data[0].hashed_id);
    // fetchSubtitleData(data[0].hashed_id);
  };
  const fetchSubtitleData = (videId) => {
    // fetch(url2, options)
    //   .then((data) => data.json())
    //   .then((data) =>
    //     setInteractiveButtons((prevState) => ({
    //       ...prevState,
    //       Text: data.text,
    //     }))
    //   );
    console.log(InteractiveButtons.Text);
    // .toString().replace(/^\d+\n([\d:,]+ --> [\d:,]+\n)/gm, '[]')
  };
  const setBtnState = (e) => {
    if (e.target.className === "btn") {
      e.target.className = "btn on";
      setInteractiveButtons((prevState) => ({
        ...prevState,
        [e.target.value]: true,
      }));
    } else {
      setInteractiveButtons((prevState) => ({
        ...prevState,
        [e.target.value]: false,
        // Text: "",
      }));
      e.target.className = "btn";
    }
  };
  const renderVideo = () => {
    return (
      <div>
        <h2 className="VideoName">{state.videoName}</h2>
        <button
          value={"Subtitles"}
          onClick={(e) => setBtnState(e)}
          className="btn"
        >
          Subtitles
        </button>
        <h1>{InteractiveButtons.Subtitles.toString()}</h1>
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
              src={`https://fast.wistia.com/embed/medias/${state.video}`}
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
          {state.videoData.map((data) => (
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
      {state.videoData.length > 0 ? (
        <div className="videoDiv">
          {renderVideo()}
          <details>
            <summary>Embed Code</summary>
            <div id="textDisplayCode">Hello</div>
            <div
              id="iFrame"
              // contentEditable="true"
              // onClick="copyTextToClipBoard()"
              // onInput="reverseUpdate()"
            ></div>
          </details>
        </div>
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <div className="Interactives">
        {/* {InteractiveButtons.Subtitles === true
          ? InteractiveButtons.Text.map((data) => {
              return (
                <div>
                  <textarea className="TextAreaSubtitles">{data}</textarea>
                  <br></br>
                </div>
              );
            })
          : ""} */}
        {InteractiveButtons.Subtitles === true &&
          InteractiveButtons.Text.split("-->").map((data) => {
            return (
              <div>
                <textarea className="TextAreaSubtitles">{data}</textarea>
                <br></br>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
