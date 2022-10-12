import * as sampleTypes from "../types/sampleTypes";

const sampleActionIncrement = (sample: any) => {
  return {
    type: sampleTypes.ACTION_TYPE_REQUESTED,
    ...sample,
  };
};

const sampleActionDecrement = (sample: any) => {
  return {
    type: sampleTypes.ACTION_TYPE_SUCCEEDED,
    ...sample,
  };
};

const sampleActionReset = (sample: any) => {
  return {
    type: sampleTypes.ACTION_TYPE_FAILED,
  };
};

export { sampleActionIncrement, sampleActionDecrement, sampleActionReset };
