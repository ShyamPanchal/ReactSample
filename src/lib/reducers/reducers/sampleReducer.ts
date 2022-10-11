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
      console.log("Returing Respose to : " + action.type, action);
      return {
        ...state,
        value: state.value + action.value,
      };
    }

    case types.ACTION_TYPE_SUCCESS: {
      console.log("Returing Respose to : " + action.type, action.data);
      return state;
    }

    default:
      return state;
  }
};

export default sampleReducer;
