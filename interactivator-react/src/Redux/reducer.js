import { actionsObject } from "./actionTypes";

const initialState = {
  video: "",
  videoData: [],
  videoName: "",
  subtitle: "",
  subtitleState: false,
  Page: "page=2",
};
const url = "https://api.wistia.com/v1/medias.json";
const options = {
  headers: {
    Authorization:
      "Bearer 185e6a59d70559fdf59fe891201cf3f96d0c6e645b9aa4e7e1f0bf645ad2bed9",
  },
  method: "get",
};

export const fetchVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VIDEO":
      return {
        ...state,
        videoData: action.payload,
        video: action.payload[0].hashed_id,
        videoName: action.payload[0].name,
      };
    case "CHANGE_VIDEO":
      return {
        ...state,
        video: action.payload.videoID,
        videoName: action.payload.name,
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
    case "CHANGE_PAGE_DATA":
      return {
        ...state,
        Page: action.payload,
      };
    default:
      return state;
  }
};
