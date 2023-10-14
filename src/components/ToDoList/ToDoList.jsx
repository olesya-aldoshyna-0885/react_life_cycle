import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import toast from 'react-hot-toast';
// import { nanoid } from 'nanoid';

import ToDo from '../ToDo/ToDo';
import FormToDo from '../FormToDo/FormToDo';
import FormFilterTodo from '../FormToDo/FormFilterTodo';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../../store/todo/actions';

const ToDoList = () => {
  // const [todoList, setTodoList] = useState('');
  const { todo: todoList } = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const [filteredTodoList, setFilteredTodoList] = useState(todoList);

  const [searchParams, setSearchParams] = useSearchParams();

  const filterText = searchParams.get('filter') ?? '';
  // console.log('searchParams', Object.fromEntries([...searchParams]));

  // useEffect(() => {
  //   const localTodo = localStorage.getItem('todo');
  //   if (localTodo) setTodoList(JSON.parse(localTodo));
  // }, []);

  // useEffect(() => {
  //   todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  // }, [todoList]);

  useEffect(() => {
    todoList &&
      setFilteredTodoList(
        todoList.filter(todo =>
          todo.title.toLowerCase().includes(filterText.trim().toLowerCase())
        )
      );
  }, [searchParams, todoList, filterText]);

  const handleCheckCompleted = id => {
    // setTodoList(prevTodoList => {
    //   return prevTodoList.map(todo =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   );
    // });
  };

  const handleDelete = id => {
    // setTodoList(prevTodoList => {
    //   return prevTodoList.filter(todo => todo.id !== id);
    // });
    toast.error('Delete successfully');
  };

  const addToDo = value => {
    // setTodoList(prevTodoList => {
    //   return [
    //     ...prevTodoList,
    //     {
    //       id: nanoid(),
    //       title: value,
    //       completed: false,
    //     },
    //   ];
    // });
    dispatch(createTodo(value));
    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormFilterTodo
        setSearchParams={setSearchParams}
        filterText={filterText}
      />
      <FormToDo addToDo={addToDo} />
      {filteredTodoList && (
        <ul className="list-group list-group-flush">
          {filteredTodoList.map(todo => (
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
