import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onWrite} type="text" value={props.text} />
      <button onClick={props.onAdd}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
