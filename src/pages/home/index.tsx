import * as React from "react";
import { connect } from "react-redux";
import PageContainer from "../../components/pageContainer";
import * as sampleActions from "../../lib/actions/sampleActions";
import { AppState } from "../../lib/appState";

type Props = {
  sampleValue: number;
  callAPI: (data: { value: number }) => void;
};

type State = {};

class HomePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount(): void {}

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {}

  componentWillUnmount(): void {}

  render() {
    return (
      <PageContainer>
        <button
          onClick={() => {
            this.props.callAPI({ value: 12 });
          }}
        >
          {this.props.sampleValue}
        </button>
      </PageContainer>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  sampleValue: state.sample.value,
});

const mapDispatchToProps = (dispatch: any) => ({
  callAPI(data: { value: number }) {
    dispatch(sampleActions.sampleActionIncrement(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
