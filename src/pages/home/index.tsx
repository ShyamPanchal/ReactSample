import * as React from "react";
import { connect } from "react-redux";
import * as sampleActions from "../../lib/actions/sampleActions";
import { AppState } from "../../lib/appState";

type Props = {
  sampleValue: number;
  callAPI: (data: string) => void;
};

type State = {};

class HomeComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.callAPI({ value: 12 });
          }}
        >
          {this.props.sampleValue}
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  sampleValue: state.sample.value,
});

const mapDispatchToProps = (dispatch) => ({
  callAPI(data: string) {
    dispatch(sampleActions.sampleActionIncrement(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
