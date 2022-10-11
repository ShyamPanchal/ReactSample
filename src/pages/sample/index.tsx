import React from "react";
import { useDispatch } from "react-redux";
import {
  sampleActionDecrement,
  sampleActionIncrement,
  sampleActionReset,
} from "../../lib/actions";

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
            dispatch(sampleActionIncrement(sample));
          }}
        >
          Increment Button
        </button>
      </div>

      <div className="button-space">
        <button
          onClick={() => {
            dispatch(sampleActionDecrement(sample));
          }}
        >
          Decrement Button
        </button>
      </div>

      <div className="button-space">
        <button
          onClick={() => {
            dispatch(sampleActionReset(sample));
          }}
        >
          Reset Button
        </button>
      </div>
    </React.Fragment>
  );
}

export default SamplePage;
