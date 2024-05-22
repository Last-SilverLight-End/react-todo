import { useState } from 'react';
import Form from './components/Form';
import Item from './components/Item';

function App() {
  const [todoLists, setTodoLists] = useState([]);
  // 만약 todolist가 존재 않하면 작동
  const CheckTodo = () => {};
  const GetAddTodo = todo => {
    let check = true;
    const newID = Math.floor(Math.random() * 100);
    do {
      if (todoLists.id.indexof(newID) !== -1) {
        check = false;
      }
    } while (check);
    setTodoLists([
      {
        id: newID,
        todo,
        isCompleted: false,
      },
      ...todoLists,
    ]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form onAddTodo={GetAddTodo} />
      {CheckTodo}
      <ul>
        {todoLists.map(({ id, todo, isCompleted }) => (
          <Item
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onCompleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
