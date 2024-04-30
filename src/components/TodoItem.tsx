export interface TodoItemProps {
  text: String;
}
export default function TodoItem(props: TodoItemProps) {
  const { text } = props;
  return (
    <div className="bg-secondaryGreen-600 w-50 rounded-lg pl-2">{text}</div>
  );
}
