import { all, fork } from "redux-saga/effects";

import sampleSaga from "./sagas/sampleSaga";
import topicSaga from "./sagas/topicSaga";

export default function* rootSaga() {
  yield all([fork(topicSaga), fork(sampleSaga)]);
}
