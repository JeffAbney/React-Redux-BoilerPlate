import React from "react";
import { connect } from "react-redux";
import { changeSomething } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
  return {
    changeSomething: data => dispatch(changeSomething(data))
  };
}

const mapStateToProps = state => {
  return { sliceOfState: state.sliceOfState };
};

function handleAction(event) {
 this.props.changeSomething(data);
}

const Component = ({ sliceOfState }) => (
  <div>
      <h1>This Component is Connected to the Store!</h1>
      <p>{sliceOfState}</p>
  </div>
);
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Component);
export default ConnectedComponent;