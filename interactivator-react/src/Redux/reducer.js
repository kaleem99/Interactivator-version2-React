import { actionsObject } from "./actionTypes";

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
};
// const url = "https://api.wistia.com/v1/medias.json";

export const fetchVideoReducer = (state = initialState, action) => {
  let courseCode = "";

  switch (action.type) {
    case "FETCH_VIDEO":
      courseCode = action.payload[0].project.name.trim("").replace(/\s/gi, "-");
      return {
        ...state,
        videoData: action.payload,
        video: action.payload[0].hashed_id,
        videoName: action.payload[0].name,
        // courseCode: courseCode,
        jsonDataIntrAndOutro: action.payload.jsonData,
      };
    case "CHANGE_VIDEO":
      return {
        ...state,
        video: action.payload.videoID,
        videoName: action.payload.name,
        // jsonDataIntrAndOutro: jsonData,
      };
    case "FETCH_SUBTITLE":
      // console.log(action.payload);
      return {
        ...state,
        subtitle: action.payload,
      };
    case "CHANGE_SUBTITLE_STATE":
      return {
        ...state,
        subtitleState: action.payload,
      };
    case "CHANGE_NEXT_PAGE_DATA":
      state.Page += 1;
      console.log(state.Page);
      return {
        ...state,
        Page: state.Page,
      };
    case "CHANGE_PREVIOUS_PAGE_DATA":
      state.Page -= 1;
      console.log(state.Page);
      return {
        ...state,
        Page: state.Page,
      };
    case "CUSTOM_VIDEO_INPUT":
      return {
        ...state,
        videoIDInput: action.payload,
      };
    case "FETCH_CUSTOM_VIDEO_INPUT":
      courseCode = action.payload.project.name.trim("").replace(/\s/gi, "-");
      console.log(courseCode);
      console.log(action.payload);
      return {
        ...state,
        // courseCode: courseCode,
        // jsonDataIntrAndOutro: jsonData,
      };
    default:
      return state;
  }
};
