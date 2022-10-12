import React from "react";
import { useDispatch } from "react-redux"; // react hooks
import * as sampleActions from "../../lib/actions/sampleActions";
import * as topicActions from "../../lib/actions/topicActions";
import "./sample.css";

function SamplePage() {
  const dispatch = useDispatch();
  const sample = {
    value: 100,
  };
  return (
    <React.Fragment>
      <div className="button-space">
        <button
          onClick={() => {
            dispatch(sampleActions.sampleActionIncrement(sample));
          }}
        >
          Increment Button
        </button>
      </div>

      <div className="button-space">
        <button
          onClick={() => {
            dispatch(sampleActions.sampleActionDecrement(sample));
          }}
        >
          Decrement Button
        </button>
      </div>

      <div className="button-space">
        <button
          onClick={() => {
            dispatch(sampleActions.sampleActionReset(sample));
          }}
        >
          Reset Button
        </button>
      </div>

      <div className="button-space">
        <button
          onClick={() => {
            dispatch(topicActions.topicActionOther({ value: 999 }));
          }}
        >
          Call Topic
        </button>
      </div>
    </React.Fragment>
  );
}

export default SamplePage;
