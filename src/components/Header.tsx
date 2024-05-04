/* eslint-disable jsx-a11y/label-has-associated-control */
import { LuListFilter, LuPlus } from 'react-icons/lu';
import { Todo } from '../types/Todo';
import useTodos from '../hooks/useTodos';
import DropdownInputItem from './DropdownInputItem';

export interface HeaderProps {
  handleAddTodo: (newTodo: Todo) => any;
}

export default function Header(props: HeaderProps) {
  const { handleAddTodo } = props;
  return (
    <div className="flex flex-row text-center align-top mt-2">
      <div className="dropdown">
        <button
          type="button"
          className="btn rounded-full h-10 w-10 p-0 min-h-10 ml-5 my-auto"
          onClick={() => {}}
        >
          <LuPlus size="20" />
        </button>
        <ul
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-primaryRed-500 w-auto mt-1 gap-1"
        >
          <li className="">
            <DropdownInputItem label="Title" placeholder="Water the plants" />
          </li>
          <li>
            <DropdownInputItem
              label="Description"
              placeholder="The plants are very thirsty"
            />
          </li>
        </ul>
      </div>
      <h1 className="font-extrabold text-5xl ml-auto mr-auto self-stretch leading-8">
        Todoo doos
      </h1>
      <div className="w-[60px]" />
    </div>
  );
}
