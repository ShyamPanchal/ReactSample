import * as types from "./types";

const sampleAction = (sample: any) => {
  console.log("Sample action called with: ", sample);
  return {
    type: types.ACTION_TYPE_REQUESTED,
    ...sample
  };
};

export { sampleAction };
