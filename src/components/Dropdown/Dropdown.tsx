import { FC } from "react";

import { DropdownProps } from "./types";

const Dropdown: FC<DropdownProps> = ({ options }) => {
  return (
    <div data-testid="dropdown">
      <div data-testid="dropdown-input"></div>
      <ul data-testid="dropdown-options">
        {options.map((option, index) => {
          return (
            <li key={option.value} data-testid={`dropdown-option-${index}`}>
              {option.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
