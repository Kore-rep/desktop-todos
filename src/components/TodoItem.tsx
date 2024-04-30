import { Todo } from '../types/Todo';

export interface TodoItemProps {
  children: Todo;
  handleRemoveTodo: (idToRemove: String) => void;
}
export default function TodoItem(props: TodoItemProps) {
  const { children, handleRemoveTodo } = props;
  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="collapse collapse-arrow bg-secondaryGreen-600 w-50 rounded-lg pl-2 text-black"
    >
      <div className="collapse-title flex flex-row">
        {children.title}
        <button
          type="submit"
          className="btn ml-auto h-3 min-h-6"
          onClick={() => handleRemoveTodo(children.id)}
        >
          remove
        </button>
      </div>
      <div className="collapse-content">{children.description}</div>
    </div>
  );
}
