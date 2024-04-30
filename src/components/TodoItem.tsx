import { clsx } from 'clsx';
import { LuFlag, LuFlagOff, LuTrash } from 'react-icons/lu';
import { Todo } from '../types/Todo';

export interface TodoItemProps {
  children: Todo;
  handleRemoveTodo: (idToRemove: string) => void;
  handleCompleteTodo: (idToComplete: string) => void;
  handleToggleImportantTodo: (idToToggle: string) => void;
}
export default function TodoItem(props: TodoItemProps) {
  const {
    children,
    handleRemoveTodo,
    handleCompleteTodo,
    handleToggleImportantTodo,
  } = props;
  const ICON_SIZE = '20';

  // eslint-disable-next-line no-nested-ternary
  const collapseColor = children.isComplete
    ? 'bg-primaryGreen-600'
    : children.isImportant
    ? 'bg-primaryRed-500'
    : 'bg-primaryYellow-400';
  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className={clsx(
        'collapse  rounded-lg pl-0 w-50 text-black focus:bg-secondaryYellow-600 transition-all my-2 group',
        children.description && 'collapse-arrow',
        !children.description && 'collapse-close',
        collapseColor,
      )}
    >
      <div className="collapse-title flex flex-row font-bold">
        <input
          type="checkbox"
          className="checkbox checkbox-sm mr-2 border-primaryYellow-500"
          onClick={() => handleCompleteTodo(children.id)}
        />
        <button
          type="button"
          className="btn btn-ghost mr-auto h-6 min-h-6"
          onClick={() => handleToggleImportantTodo(children.id)}
        >
          {children.isImportant ? (
            <LuFlagOff size={ICON_SIZE} />
          ) : (
            <LuFlag size={ICON_SIZE} />
          )}
        </button>
        {children.title}
        <button
          type="button"
          className="btn btn-ghost ml-auto h-3 min-h-6"
          onClick={() => handleRemoveTodo(children.id)}
        >
          <LuTrash size={ICON_SIZE} />
        </button>
      </div>
      <div className="collapse-content">{children.description}</div>
    </div>
  );
}
