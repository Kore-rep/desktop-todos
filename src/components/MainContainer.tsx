import Header from './Header';
import TodosContainer from './TodosContainer';
import TodoItem from './TodoItem';
import { Todo } from '../types/Todo';
import useTodos from '../hooks/useTodos';

export default function MainContainer() {
  const { getTodos, addTodo, removeTodo, toggleTodoComplete } = useTodos();

  return (
    <div className="bg-slate-500 p-1 flex flex-col w-full">
      <Header handleAddTodo={addTodo} />
      <TodosContainer>
        {getTodos().map((todo) => {
          return <TodoItem handleRemoveTodo={removeTodo}>{todo}</TodoItem>;
        })}
      </TodosContainer>
    </div>
  );
}
