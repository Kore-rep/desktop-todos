import clsx from 'clsx';
import { JSX } from 'react';

export default function TodosContainer(props: { children: JSX.Element[] }) {
  const { children } = props;
  return (
    <div
      className={clsx(
        'w-90 rounded-md bg-secondaryGreen-600 dark:bg-slate-800 dark:text-white m-1',
        children.length === 0 ? 'p-0' : 'p-1',
      )}
    >
      {children}
    </div>
  );
}
