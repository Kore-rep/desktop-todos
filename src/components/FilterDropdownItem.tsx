/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
export interface FilterDropdownItemProps {
  itemName: string;
  selected: boolean;
  onItemClick: any;
}

export default function FilterDropdownItem(props: FilterDropdownItemProps) {
  const { itemName, selected, onItemClick } = props;
  const [checked, setChecked] = useState(selected);
  const handleItemClick = () => {
    setChecked(!checked);
  };

  return (
    <li>
      <a onClick={() => handleItemClick()}>
        <input
          type="checkbox"
          onClick={() => onItemClick()}
          checked={checked}
        />
        {itemName}
      </a>
    </li>
  );
}
