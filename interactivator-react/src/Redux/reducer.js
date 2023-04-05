import { actionsObject } from "./actionTypes";

const initialState = {
  video: "",
  videoData: [],
  videoName: "",
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
      console.log(action);
      return {
        ...state,
        videoData: action.payload,
        video: action.payload[0].hashed_id,
        videoName: action.payload[0].name,
      };
    case "CHANGE_VIDEO":
      console.log(action.payload);
      return {
        ...state,
        video: action.payload,
      };
    default:
      return state;
  }
};