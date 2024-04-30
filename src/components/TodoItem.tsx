export interface TodoItemProps {
  title: String;
  description: String;
}
export default function TodoItem(props: TodoItemProps) {
  const { title, description } = props;
  return (
    <div
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
      className="collapse collapse-arrow bg-secondaryGreen-600 w-50 rounded-lg pl-2 text-black"
    >
      <div className="collapse-title ">{title}</div>
      <div className="collapse-content">{description}</div>
    </div>
  );
}
