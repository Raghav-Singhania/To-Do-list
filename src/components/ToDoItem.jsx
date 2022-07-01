import React from "react";

function ToDoItem(props){
    return(
        <li onClick={()=>{
            return props.onChecked(props.id);
        }} >
        {props.text}
        </li>
    );
}

export default ToDoItem;


//{/* <li onClick={handleOnClick} style={{textDecoration:isDone?"line-through":"none"}}>
//      {props.text}
//      </li> */}