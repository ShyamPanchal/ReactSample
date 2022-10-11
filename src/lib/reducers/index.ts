import { combineReducers } from "@reduxjs/toolkit";

import sampleReducer from "./reducers/sampleReducer";
import topicReducer from "./reducers/topicReducer";

export default combineReducers({
  sample: sampleReducer,
  topic: topicReducer,
});
