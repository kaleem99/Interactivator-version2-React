import { createStore } from "redux";
import { fetchVideoReducer } from "./reducer";
const store = createStore(fetchVideoReducer);

export default store;
