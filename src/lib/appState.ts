import { SampleState } from "./reducers/reducers/sampleReducer";
import { TopicState } from "./reducers/reducers/topicReducer";

export type AppState = {
  sample: SampleState;
  topic: TopicState;
};
