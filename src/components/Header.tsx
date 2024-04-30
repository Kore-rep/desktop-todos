import { LuList, LuListFilter } from 'react-icons/lu';
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
        onClick={() =>
          handleAddTodo(
            new Todo('Water the plants', 'The plants need watering'),
          )
        }
      >
        Add Todo
      </button>
      <button type="button" className="btn btn-ghost" onClick={() => {}}>
        <LuListFilter size="20" />
      </button>
    </div>
  );
}
