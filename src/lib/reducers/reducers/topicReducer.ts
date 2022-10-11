import * as topicTypes from "../../types/topicTypes";

export type TopicState = {
  value: number;
};

const initialState: TopicState = {
  value: 0,
};

const topicReducer = (state: TopicState = initialState, action: any) => {
  switch (action.type) {
    case topicTypes.TOPIC_ACTION_TYPE_STATUS: {
      return {
        ...state,
        value: action.value,
      };
    }

    default:
      return state;
  }
};

export default topicReducer;
