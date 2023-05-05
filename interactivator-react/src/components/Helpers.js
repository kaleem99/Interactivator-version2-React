// convert seconds to hours, minutes and seconds
import fetchJsonData from "./fetchJsonData";

const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};
const hhmmss = (input) => {
  // for converting from UI time to srt time
  const date = new Date(parseInt(input.split(".")[0]) * 1000);
  let output = date.toISOString().substr(11, 8);
  for (let i = 0; i < input.length; i++) {
    if (input[i] === ".") {
      output += "," + parseFloat(input).toFixed(3).split(".")[1];
    }
  }
  return output;
};

const updateData = async (state) => {
  let wistiaKey = process.env.REACT_APP_WISTIA_KEY;
  let WistiaHeaders = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + wistiaKey,
  };
  let result = [];
  let CCs = [];
  let CCElements = document.getElementsByTagName("textarea");

  for (let i = 0; i < CCElements.length; i++) {
    let CCsTimes = CCElements[i].id.split("/");
    CCs.push(CCElements[i].id.split("/"));
    result.push(
      `\n${i + 1}\n${hhmmss(CCsTimes[0].toString())} --> ${hhmmss(
        CCsTimes[1].toString()
      )}\n${CCElements[i].value} \n`
    );
  }

  let object = {};
  object["caption_file"] = result.join("");
  const requestOptions = {
    method: "PUT",
    headers: WistiaHeaders,
    body: JSON.stringify(object),
  };
  const response = await fetch(
    "https://api.wistia.com/v1/medias/" + state.video + "/captions/eng.json",
    requestOptions
  );
  if (response.ok) {
    alert("Captions have been successfully updates.");
  } else {
    alert("Error, captions were not updated.");
  }
};
const changeVideo = async (videoID, dispatch, state) => {
  alert(200);
  const videoIDNAME = state.videoData.filter(
    (data) => data.name === videoID && data.hashed_id
  );
  dispatch({
    type: "CHANGE_VIDEO",
    payload: { videoID: videoIDNAME[0].hashed_id, name: videoIDNAME[0].name },
  });
  const url2 = `https://api.wistia.com/v1/medias/${videoIDNAME[0].hashed_id}/captions.json`;

  const subtitles = await fetch(url2, options).then((data) => data.json());
  dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
};

const fetchPageData = async (dispatch, state) => {
  const url = `https://api.wistia.com/v1/medias.json?page=${state.Page}`;
  const result = await fetch(url, options).then((data) => data.json());
  const jsonDataIntrAndOutro = await fetchJsonData();
  result.jsonData = jsonDataIntrAndOutro;
  dispatch({ type: "FETCH_VIDEO", payload: result });
  const url2 = `https://api.wistia.com/v1/medias/${result[0].hashed_id}/captions.json`;
  const subtitles = await fetch(url2, options).then((data) => data.json());
  dispatch({ type: "FETCH_SUBTITLE", payload: subtitles[0].text });
};

const searchInputVideoID = async (state, dispatch, updateIframeData) => {
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
  // updateIframeData();
};
export { updateData, changeVideo, fetchPageData, searchInputVideoID };
