import React from "react";
import { connect } from "react-redux";
import ConnectedInput from "./ConnectedInput";


const mapStateToProps = state => {
  return { messages: state.messages };
};

const Component = ({ messages }) => {

  return (
    <div>
      <h1>This Component is Connected to the Store!</h1>
      <ul>
        {
          messages.map((msg, i) => <li key={`msg-${i}`}>{msg}</li>)
        }
      </ul>
      <ConnectedInput />
    </div>
  )
};
const ConnectedComponent = connect(mapStateToProps)(Component);
export default ConnectedComponent;