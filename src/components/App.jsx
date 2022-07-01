import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

  const [inputText, setInputText] = React.useState("");
  const [items, setItems] = React.useState([]);

  function handleInputChange(event){
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function addItem(){
    setItems((prevItems)=>{
      return [
        ...prevItems,inputText
      ];
    })
    setInputText("");
  }

  function deleteItem(id){
    setItems((prevItems)=>{
      return prevItems.filter((val, index)=>{
        return index!==id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea text={inputText} onAdd={addItem} onWrite={handleInputChange} />
      <div>
        <ul>
          {items.map((todoItem, index)=>{
            return <ToDoItem key={index} id={index} onChecked={deleteItem} text={todoItem} />
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
