import { LuListFilter, LuPlus } from 'react-icons/lu';
import { Todo } from '../types/Todo';
import useTodos from '../hooks/useTodos';

export interface HeaderProps {
  handleAddTodo: (newTodo: Todo) => any;
}

export default function Header(props: HeaderProps) {
  const { handleAddTodo } = props;
  return (
    <div className="flex flex-row text-center align-middle mt-2">
      <button
        type="button"
        className="btn rounded-full h-10 w-10 p-0 min-h-10 ml-5 my-auto"
        onClick={() =>
          handleAddTodo(
            new Todo('Water the plants', 'The plants need watering'),
          )
        }
      >
        <LuPlus size="20" />
      </button>
      <div className="font-extrabold text-5xl mr-auto ml-auto">Todoo doos</div>
    </div>
  );
}
