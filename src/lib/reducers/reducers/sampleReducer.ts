import * as types from "../../types";

type SampleState = {
  key1: string;
};

const initialState: SampleState = {
  key1: "value",
};

const sampleReducer = (state: SampleState = initialState, action: any) => {
  console.log("Sample Reducer called: ", {
    state,
    action,
  });

  if (!action?.type) return state;

  switch (action.type) {
    case types.ACTION_TYPE_REQUESTED: {
      console.log(
        "Returing Respose to : " + types.ACTION_TYPE_REQUESTED,
        action.data
      );
      return action.data;
    }

    default:
      return state;
  }
};

export default sampleReducer;
