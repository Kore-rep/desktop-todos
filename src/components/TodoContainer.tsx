import { JSX } from 'react';

export default function TodosContainer(props: { children: JSX.Element[] }) {
  const { children } = props;
  return (
    <div className="w-90 rounded-md bg-primaryGreen-500 dark:bg-slate-800 dark:text-white p-1">
      {children}
    </div>
  );
}
