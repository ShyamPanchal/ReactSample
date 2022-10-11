import * as topicTypes from "../types/topicTypes";

export const topicActionStatus = (data: any) => {
  console.log("Action called : topicActionStatus");
  return {
    type: topicTypes.TOPIC_ACTION_TYPE_STATUS,
    ...data,
  };
};
