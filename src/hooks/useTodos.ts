import { useState } from 'react';
import { current } from 'tailwindcss/colors';
import { Todo } from '../types/Todo';

export type TodoFilter = {
  important: true;
  completed: true;
  outstanding: true;
};

const filterMapping = {
  important: 'isImportant',
  completed: 'isComplete',
  outstanding: 'isOutstanding',
};

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentFilter, setCurrentFilter] = useState<TodoFilter>({
    important: true,
    completed: true,
    outstanding: true,
  });

  const getTodos = () => {
    return todos;
  };

  /**
   *
   * @returns A list of filtered todos, based on the currently selected filter
   */

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (idToRemove: string) => {
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

  const toggleTodoComplete = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
            isOutstanding: !todo.isComplete,
          };
        }
        return todo;
      }),
    );
  };

  const toggleTodoImportant = (todoId: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isImportant: !todo.isImportant,
            isOutstanding: !todo.isComplete,
          };
        }
        return todo;
      }),
    );
  };

  return {
    getTodos,
    addTodo,
    removeTodo,
    toggleTodoComplete,
    toggleTodoImportant,
  };
}
