import { put, takeEvery } from "redux-saga/effects";

import * as topicActions from "../../actions/topicActions";
import * as topicTypes from "../../types/topicTypes";

function* getSample(action: {
  type: typeof topicTypes.TOPIC_ACTION_TYPE_OTHER;
  value: any;
}) {
  console.log("Do Something...");
  yield put(topicActions.topicActionStatus({ value: action.value }));
}

function* sampleSaga() {
  yield takeEvery(topicTypes.TOPIC_ACTION_TYPE_OTHER, getSample);
}

export default sampleSaga;
