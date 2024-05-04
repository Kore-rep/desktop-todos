import clsx from 'clsx';
import { SetStateAction, useState } from 'react';

export interface DropDownInputItemProps {
  placeholder: string;
  label: string;
}
export default function DropdownInputItem(props: DropDownInputItemProps) {
  const { label, placeholder } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [input, setInput] = useState('');

  const setInvisible = () => {
    console.log('setting invis');
    setIsVisible(false);
  };

  const setVisible = () => {
    if (input.length > 0) {
      return;
    }
    setIsVisible(true);
  };

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInput(event.target.value);
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="input bg-black hover:bg-black focus:bg-current flex items-center gap-0">
      <div
        className={clsx(
          'transition-all',
          isVisible
            ? 'visible [mask-repeat:no-repeat] hover:animate-rtltextfadein'
            : 'w-0 invisible',
        )}
      >
        {label}
      </div>
      <div
        className={clsx(
          'transition-all duration-75 divider divider-horizontal mx-1',
          isVisible ? 'visible' : 'w-0 invisible',
        )}
      />
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        onFocus={() => setInvisible()}
        onBlur={() => setVisible()}
        value={input}
        onChange={handleInputChange}
      />
    </label>
  );
}
