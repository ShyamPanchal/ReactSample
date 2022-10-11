import { combineReducers } from "@reduxjs/toolkit";

import sampleReducer from "./reducers/sampleReducer";
import topicReducer from "./reducers/topicReducer";

import { persistReducer } from "redux-persist";
import storage from "../storage";

const globalConfig = {
  storage,
};

const config = {
  ...globalConfig,
  key: "root",
  blacklist: ["topic"], // topic will not be persisted
};

const samplePersistConfig = {
  ...globalConfig,
  key: "userProfile",
};

const appReducer = combineReducers({
  sample: persistReducer(samplePersistConfig, sampleReducer),
  topic: topicReducer,
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default persistReducer(config, rootReducer);
