import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { changeSomething } from "../redux/actions/index";

function mapDispatchToProps(dispatch) {
    return {
        changeSomething: data => dispatch(changeSomething(data))
    };
};

const Input = ( { changeSomething }) => {
    const [message, setMessage] = useState("");
    let refMessage = useRef(message);
    useEffect(() => {
        refMessage.current = message;
    });

    function handleChangeMessage(e) {
        console.log(message);
        setMessage(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Trying to submit", refMessage.current);
        changeSomething(refMessage.current);
        setMessage("");
    };

    useEffect(() => {
        document.getElementById('msg-form').onsubmit = function (e) {
            handleSubmit(e);
        }
    }, []);

    return (
        <form id="msg-form" name="add-message" action="">
        <input
          id="m"
          autoComplete="off"
          value={message}
          onChange={handleChangeMessage}
        />
      </form>
    );
}

const ConnectedInput = connect(null, mapDispatchToProps)(Input);
export default ConnectedInput;