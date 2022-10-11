import * as types from "./types";

const sampleActionIncrement = (sample: any) => {
  return {
    type: types.ACTION_TYPE_REQUESTED,
    ...sample,
  };
};

const sampleActionDecrement = (sample: any) => {
  return {
    type: types.ACTION_TYPE_SUCCESS,
    ...sample,
  };
};

const sampleActionReset = (sample: any) => {
  return {
    type: types.ACTION_TYPE_FAILED,
  };
};

export { sampleActionIncrement, sampleActionDecrement, sampleActionReset };
