import clsx from 'clsx';
import { JSX } from 'react';

export default function TodosContainer(props: { children: JSX.Element[] }) {
  const { children } = props;
  return (
    <div
      className={clsx(
        'rounded-md bg-transparent dark:bg-slate-800 dark:text-white m-1 flex flex-col r mx-5',
        children.length === 0 ? 'p-0' : 'p-1',
      )}
    >
      {children}
    </div>
  );
}
