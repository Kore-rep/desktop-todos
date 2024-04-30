import { Todo } from '../types/Todo';

export interface HeaderProps {
  handleAddTodo: (newTodo: Todo) => any;
}

export default function Header(props: HeaderProps) {
  const { handleAddTodo } = props;
  return (
    <div className="flex flex-row">
      <button
        type="button"
        className="btn"
        onClick={() => handleAddTodo(new Todo('A', 'B'))}
      >
        Add Todo
      </button>
    </div>
  );
}
