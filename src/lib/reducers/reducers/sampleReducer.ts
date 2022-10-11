import * as sampleTypes from "../../types/sampleTypes";

export type SampleState = {
  value: number;
};

const initialState: SampleState = {
  value: 0,
};

const sampleReducer = (state: SampleState = initialState, action: any) => {
  switch (action.type) {
    case sampleTypes.ACTION_TYPE_REQUESTED: {
      return {
        ...state,
        value: state.value + action.value,
      };
    }

    case sampleTypes.ACTION_TYPE_SUCCESS: {
      return {
        ...state,
        value: Math.max(0, state.value - action.value),
      };
    }

    case sampleTypes.ACTION_TYPE_FAILED: {
      return {
        ...state,
        value: initialState.value,
      };
    }

    default:
      return state;
  }
};

export default sampleReducer;
