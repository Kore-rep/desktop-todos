import { LuList, LuListFilter } from 'react-icons/lu';
import { Todo } from '../types/Todo';
import useTodos from '../hooks/useTodos';

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
        onClick={() =>
          handleAddTodo(
            new Todo('Water the plants', 'The plants need watering'),
          )
        }
      >
        Add Todo
      </button>
    </div>
  );
}
