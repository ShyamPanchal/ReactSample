import { call, put, takeEvery } from "redux-saga/effects";
import { callAPI } from "../../../api/user";

import * as topicActions from "../../actions/topicActions";
import * as topicTypes from "../../types/topicTypes";

function* getTopic(action: {
  type: typeof topicTypes.TOPIC_ACTION_TYPE_OTHER;
  value: any;
}) {
  try {
    const response: object = yield call(callAPI, action.value);
    yield put(
      topicActions.topicActionStatus({ value: action.value, result: response })
    );
  } catch (error) {
    console.error(error);
    yield put(topicActions.topicActionStatus({ value: action.value, error }));
  }
}

function* topicSaga() {
  yield takeEvery(topicTypes.TOPIC_ACTION_TYPE_OTHER, getTopic);
}

export default topicSaga;
