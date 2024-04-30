import { useState } from 'react';
import { Todo } from '../types/Todo';

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = () => {
    return todos;
  };

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (idToRemove: String) => {
    setTodos([...todos.filter((todo) => todo.id !== idToRemove)]);
  };

  // TODO: Remove
  // const completeTodo = (idToComplete: String) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === idToComplete) {
  //         return { ...todo, isComplete: true };
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  // const uncompleteTodo = (idToUncomplete: String) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === idToUncomplete) {
  //         return { ...todo, isComplete: false };
  //       }
  //       return todo;
  //     }),
  //   );
  // };

  const toggleTodoComplete = (todoId: String) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      }),
    );
  };

  return { getTodos, addTodo, removeTodo, toggleTodoComplete };
}
