import * as topicTypes from "../types/topicTypes";

export const topicActionStatus = (data: any) => {
  return {
    type: topicTypes.TOPIC_ACTION_TYPE_STATUS,
    ...data,
  };
};

export const topicActionOther = (data: any) => {
  return {
    type: topicTypes.TOPIC_ACTION_TYPE_OTHER,
    ...data,
  };
};
