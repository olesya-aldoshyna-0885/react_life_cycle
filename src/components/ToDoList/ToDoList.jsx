import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import ToDo from '../ToDo/ToDo';
import FormToDo from '../FormToDo/FormToDo';

import { nanoid } from 'nanoid';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');

  useEffect(() => {
    const localTodo = localStorage.getItem('todo');
    if (localTodo) setTodoList(JSON.parse(localTodo));
  }, []);

  useEffect(() => {
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    });
  };

  const handleDelete = id => {
    setTodoList(prevTodoList => {
      return prevTodoList.filter(todo => todo.id !== id);
    });

    toast.error('Delete successfully');
  };

  const addToDo = value => {
    setTodoList(prevTodoList => {
      return [
        ...prevTodoList,
        {
          id: nanoid(),
          title: value,
          completed: false,
        },
      ];
    });

    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormToDo addToDo={addToDo} />
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ToDoList;
