import { FC } from "react";

import { DropdownProps } from "./types";

const Dropdown: FC<DropdownProps> = ({ options }) => {
  return (
    <div data-testid="dropdown">
      <div data-testid="dropdown-input">
        <span data-testid="dropdown-text"></span>
      </div>
      <ul data-testid="dropdown-options">
        {options.map((option, index) => {
          return (
            <li key={option.value} data-testid={`dropdown-option-${index}`}>
              <span data-testid="dropdown-text">{option.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
