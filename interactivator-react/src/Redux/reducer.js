import { actionsObject } from "./actionTypes";
import logsFile from "../logs.json";
const initialState = {
  video: "",
  videoData: [],
  videoName: "",
  subtitle: "",
  subtitleState: false,
  Page: 1,
  courseCode: "NUS-BCA",
  videoIDInput: "",
  jsonDataIntrAndOutro: "",
  newSubtitle: "",
  functionList: [],
  InteractivityState: false,
  popup: false,
  PopupType: "",
  functArgs: "",
  index: 0,
};
// const url = "https://api.wistia.com/v1/medias.json";
const fetchLogsFile = (action) => {
  const objectFile = logsFile[action.payload[0].hashed_id];
  let resultTimeLines = [];
  if (objectFile && objectFile.functionList.length > 0) {
    resultTimeLines = objectFile.functionList
      .split(";")
      .filter((data) => data !== "");
  }
  return resultTimeLines;
};
export const fetchVideoReducer = (state = initialState, action) => {
  let courseCode = "";
  let resultTimeLines;
  switch (action.type) {
    case "FETCH_VIDEO":
      courseCode = action.payload[0].project.name.trim("").replace(/\s/gi, "-");
      resultTimeLines = fetchLogsFile(action);
      return {
        ...state,
        videoData: action.payload,
        video: action.payload[0].hashed_id,
        videoName: action.payload[0].name,
        // courseCode: courseCode,]
        functionList: resultTimeLines,
        jsonDataIntrAndOutro: action.payload.jsonData,
      };
    case "CHANGE_VIDEO":
      // resultTimeLines = fetchLogsFile(action);
      return {
        ...state,
        video: action.payload.videoID,
        videoName: action.payload.name,
        // jsonDataIntrAndOutro: jsonData,
        // functionList: resultTimeLines,
      };
    case "POPUP":
      return {
        ...state,
        popup: action.payload,
        PopupType: action.actionType,
        index: action.index,
      };
    case "FETCH_SUBTITLE":
      function getSecs(input) {
        // for converting srt time to seconds for use in UI
        const t = input.trim().split(":");
        const seconds = parseFloat(t[2].replace(",", ".")).toFixed(3);
        return (
          parseFloat(t[0]) * 3600 +
          parseFloat(t[1]) * 60 +
          parseFloat(seconds)
        ).toString();
      }
      let CCs = [];
      let segments = action.payload.split("-->");
      let speakers = [];
      let newLines = [];
      let notes = [];
      let chapters = [];
      for (let x = 0; x < segments.length; x++) {
        let CC = [];
        if (x > 0) {
          let segment = segments[x];
          let start = getSecs(segments[x - 1].split("\n").slice(-1)[0]);
          let end = getSecs(segment.split("\n")[0]);
          CC.push(start);
          CC.push(end);
          let textPart = segment
            .split("\n\n")[0]
            .split("\n")
            .slice(1)
            .join("\n")
            .trim();
          CC.push(textPart);
          CC.push("CCs");
          if (newLines.includes(start + "/" + end)) {
            CC.push("checked");
            CC.push(" on");
          } else {
            CC.push("");
            CC.push("");
          }
          if (speakers[start]) {
            CC.push(speakers[start]);
          } else {
            CC.push("");
          }
          if (notes[start]) {
            CC.push(notes[start]);
          } else {
            CC.push("");
          }
          CCs.push(CC);
        }
      }

      CCs = CCs.concat(chapters);
      return {
        ...state,
        subtitle: CCs,
      };
    case "CHANGE_SUBTITLE_STATE":
      return {
        ...state,
        subtitleState: action.payload,
      };
    case "CHANGE_NEXT_PAGE_DATA":
      state.Page += 1;
      return {
        ...state,
        Page: state.Page,
      };
    case "CHANGE_PREVIOUS_PAGE_DATA":
      state.Page -= 1;
      return {
        ...state,
        Page: state.Page,
      };
    case "CUSTOM_VIDEO_INPUT":
      resultTimeLines = fetchLogsFile({
        payload: [{ hashed_id: action.payload }],
      });

      return {
        ...state,
        videoIDInput: action.payload,
        functionList: resultTimeLines,
      };
    case "FETCH_CUSTOM_VIDEO_INPUT":
      courseCode = action.payload.project.name.trim("").replace(/\s/gi, "-");

      return {
        ...state,
        // courseCode: courseCode,
        // jsonDataIntrAndOutro: jsonData,
      };
    case "CHANGE_INTERACTIVITIES_STATE":
      return { ...state, InteractivityState: action.payload };
    case "UPDATING_CAPTIONS":
      const newCaptions = action.payload.newCaption;
      // const index = action.payload.index;
      // const newData = state.subtitle.split(/\n\s*\n/);
      // newData[index] = '1\n00:00:10,120 --> 00:00:15,640\nIn 2009, a man named Cristopher Coach\nbought 5,000,000 bitcoins on a whim. 200';

      return {
        ...state,
        // newSubtitle: newData
        // courseCode: courseCode,
        // jsonDataIntrAndOutro: jsonData,
      };
    case "FUNCTION_LIST":
      const functionList = action.payload;
      let result = "";
      if (functionList.functionList) {
        result = functionList.functionList
          .split(";")
          .filter((arr) => arr !== "");
      }
      return {
        ...state,
        functionList: result,
      };
    default:
      return state;
  }
};
