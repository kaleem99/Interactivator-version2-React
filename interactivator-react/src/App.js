import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerEmbed from "./Video";
import Lottie from "react-lottie";
import animationData from "./assets/99109-loading (1).json";
import { useDispatch, useSelector } from "react-redux";
import WistiaEmbed from "./WistiaEmbed";
import iframeData from "./IframeData";
import InteractivativeButtons from "./components/InteractiveButtons";
import updateIframe from "./components/updateIframe";
// import { Wistia } from 'wistia/player';
import myObject from "./logs.json";
import { updateData, fetchPageData } from "./components/Helpers";
import RenderFunction from "./components/renderFunctions";
import MainPage from "./Pages/MainPage";

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
  // height: "100vh",
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
    fetchPageData(dispatch, state);
  }, []);

  const setBtnState = (e) => {
    if (e.target.value === "Subtitles") {
      if (e.target.classNameName === "btn") {
        e.target.classNameName = "btn on";
        dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: true });
      } else {
        dispatch({ type: "CHANGE_SUBTITLE_STATE", payload: false });
        e.target.classNameName = "btn";
      }
    } else if (e.target.value === "Interactivities") {
      if (e.target.classNameName === "btn") {
        e.target.classNameName = "btn on";
        dispatch({ type: "CHANGE_INTERACTIVITIES_STATE", payload: true });
      } else {
        dispatch({ type: "CHANGE_INTERACTIVITIES_STATE", payload: false });
        e.target.classNameName = "btn";
      }
    } else if (e.target.value === "Save") {
      updateData(state);
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

  // Using dot notation:

  const renderVideo = () => {
    // console.log(state.videoName);
    return (
      <div>
        <h2 classNameName="VideoName">{state.videoName}</h2>

        <div>
          <button
            value={"Transcript"}
            onClick={(e) => setBtnState(e)}
            classNameName="btn"
          >
            Transcript
          </button>
          <button
            value={"Interactivities"}
            onClick={(e) => setBtnState(e)}
            classNameName="btn"
          >
            Interactivities
          </button>
          <button
            value={"Subtitles"}
            onClick={(e) => setBtnState(e)}
            classNameName="btn"
          >
            Subtitles
          </button>
          <button
            value={"Chapters"}
            onClick={(e) => setBtnState(e)}
            classNameName="btn"
          >
            Chapters
          </button>
        </div>
        {/* <h1>{state.subtitleState.toString()}</h1> */}
        <div
          classNameName="wistia_responsive_padding"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <div
            classNameName="wistia_responsive_wrapper"
            style={{
              height: "100%",
              left: "0",
              position: "absolute",
              top: "0",
              width: "100%",
            }}
          >
            <WistiaEmbed id={state.video} play={true} options={data} />
          </div>
        </div>
      </div>
    );
  };
  const searchInputVideoID = async () => {
    const url = `https://api.wistia.com/v1/medias/${state.videoIDInput}.json`;
    const result = await fetch(url, options).then((data) => data.json());
    if (result.error) {
      return alert(result.error);
    }
    dispatch({
      type: "CHANGE_VIDEO",
      payload: { videoID: result.hashed_id, name: result.name },
    });
    const url2 = `https://api.wistia.com/v1/medias/${state.videoIDInput}/captions.json`;

    const subtitles = await fetch(url2, options).then((data) => data.json());
    dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
    dispatch({ type: "FETCH_CUSTOM_VIDEO_INPUT", payload: result });
  };

  const formattingSubtitles = (data) => {
    let dataArr = data.split("\n");
    const d1 = dataArr.shift();
    const d2 = dataArr.pop();
    const d3 = dataArr.pop();
    return dataArr.join(" ");
  };

  return (
    <>
      {state.videoData.length > 0 ? (
        <MainPage />
      ) : (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
      <div style={{ display: "none" }} className="Ifunction_heading_variables">
        <input
          onChange="updateFunctionList()"
          className="heading_text"
          type="text"
          placeholder="heading"
        />
        <label>offset</label>
        <input
          onChange="updateFunctionList()"
          className="heading_offset"
          type="range"
          min="-50"
          max="50"
        />
        <select
          style={{ width: "auto" }}
          onChange="updateFunctionList()"
          className="heading_Left_or_Right"
          name="heading_Left_or_Right"
          id="heading_Left_or_Right"
        >
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
      </div>
      <div style={{ display: "none" }} className="Ifunction_Add_Quiz_variables">
        <span className="QTKDff">Multiple choice</span>
        <section id="section"></section>
        <div className="QuizInput Ifunction_Add_Quiz" id="QuizInput">
          <h2>Please populate input to add quiz</h2>
          <label>Question</label>
          <br />
          <input
            type="text"
            className="inputQuestion Add_Quiz_text"
            id="QInput1"
            onChange="updateFunctionList()"
          />
          <br />
          <div className="OptionsAndVideo">
            <div className="Inputs Add_Quiz_text">
              <label>Option 1</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
            <div>
              <label>Option 2</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
            <div>
              <label>Option 3</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
            <div>
              <label>Option 4</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
            <div>
              <label>Option 5</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
            <div>
              {" "}
              <label>Option 6</label>
              <input
                className="inputQuestion"
                type="text"
                id="QInput"
                onChange="updateFunctionList()"
              />
            </div>
          </div>
          <div id="Inputs Add_Quiz"></div>
          <br />
          <label>Please choose correct option Answer</label>
          <select
            onChange="updateFunctionList()"
            name="cars"
            id="SelectOptions"
          >
            <option value="none" selected>
              None selected
            </option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
            <option value="Option 6">Option 6</option>
          </select>
          <div id="btnsDiv"></div>
        </div>
      </div>
    </>
  );
}

export default App;
