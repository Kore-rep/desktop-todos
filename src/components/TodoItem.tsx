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
        'collapse rounded-xl pl-0 text-black focus:bg-secondaryYellow-600 transition-all my-2 group shadow-md',
        children.description && 'collapse-arrow',
        !children.description && 'collapse-close',
        collapseColor,
      )}
    >
      <div className="collapse-title flex flex-row font-bold mr-auto">
        <input
          type="checkbox"
          className="checkbox checkbox-sm border-slate-800 my-auto border-2"
          onClick={() => handleCompleteTodo(children.id)}
        />
        <button
          type="button"
          className="btn btn-ghost h-6 min-h-6 my-auto"
          onClick={() => handleToggleImportantTodo(children.id)}
        >
          {children.isImportant ? (
            <LuFlagOff className="my-0" size={ICON_SIZE} />
          ) : (
            <LuFlag className="my-0" size={ICON_SIZE} />
          )}
        </button>
        {children.title}
        <button
          type="button"
          className="btn btn-ghost ml-auto h-3 min-h-6 my-0"
          onClick={() => handleRemoveTodo(children.id)}
        >
          <LuTrash className="my-0" size={ICON_SIZE} />
        </button>
      </div>
      <div className="collapse-content">{children.description}</div>
    </div>
  );
}
