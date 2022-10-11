import { useDispatch } from "react-redux";
import { sampleAction } from "../../lib/actions";

function SamplePage() {
  const dispatch = useDispatch();
  const sample = {
    value: 100,
  };
  return (
    <div className="button-space">
      <button
        onClick={() => {
          dispatch(sampleAction(sample));
        }}
      >
        Increment Button
      </button>
    </div>
  );
}

export default SamplePage;
