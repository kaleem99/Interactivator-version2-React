import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";
import { useDispatch, useSelector } from "react-redux";
import WistiaEmbed from "./WistiaEmbed";
// import { Wistia } from 'wistia/player';
const url = "https://api.wistia.com/v1/medias.json?type=Video";

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
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchdata = async () => {
      const result = await fetch(url, options).then((data) => data.json());
      // .then((data) => data.filter((v, i) => console.log(v.type)));

      dispatch({ type: "FETCH_VIDEO", payload: result });
      // if (state.video !== "") {
      const url2 = `https://api.wistia.com/v1/medias/${state.video}/captions.json`;
      const subtitles = await fetch(url2, options).then((data) => data.json());
      dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
      // }
    };
    fetchdata();
  }, []);
  const changeVideo = (videoID) => {
    const videoIDNAME = state.videoData.filter(
      (data) => data.name === videoID && data.hashed_id
    );
    dispatch({ type: "CHANGE_VIDEO", payload: videoIDNAME[0].hashed_id });
  };

  const setBtnState = (e) => {
    if (e.target.className === "btn") {
      e.target.className = "btn on";
      dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: true });
    } else {
      dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: false });
      e.target.className = "btn";
    }
  };
  const data = {
    preload: true,
    muted: true,
    playsinline: true,
    autoPlay: true,
    silentAutoPlay: true,
    endVideoBehavior: "loop",
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
        <h1>{state.subtitleState.toString()}</h1>
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
            {/* <iframe
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
            ></iframe> */}
            <WistiaEmbed id={state.video} play={true} options={data} />;
          </div>
        </div>
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
        {state.subtitleState === true &&
          state.subtitle.split("-->").map((data) => {
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
