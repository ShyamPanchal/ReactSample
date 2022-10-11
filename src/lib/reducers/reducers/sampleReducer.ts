import * as types from "../../types";

type SampleState = {
  value: number;
};

const initialState: SampleState = {
  value: 0,
};

const sampleReducer = (state: SampleState = initialState, action: any) => {
  switch (action.type) {
    case types.ACTION_TYPE_REQUESTED: {
      return {
        ...state,
        value: state.value + action.value,
      };
    }

    case types.ACTION_TYPE_SUCCESS: {
      return {
        ...state,
        value: Math.max(0, state.value - action.value),
      };
    }

    case types.ACTION_TYPE_FAILED: {
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
