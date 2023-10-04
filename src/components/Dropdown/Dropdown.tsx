import { FC, useEffect, useRef, useState } from "react";

import { DropdownOption, DropdownProps } from "./types";
import DropdownStyledComponents from "./styled";

const { Container, DropdownInput, DropdownOptions, Text } =
  DropdownStyledComponents;

const Dropdown: FC<DropdownProps> = ({ options, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOptionVisible, setIsOptionVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>();

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const targetNodes = e?.composedPath();

      if (
        !!ref.current &&
        !!targetNodes &&
        targetNodes.some((targetNode) => {
          const node = targetNode as HTMLElement;
          if (!!node.isSameNode) {
            return node.isSameNode(ref.current);
          } else {
            return false;
          }
        })
      ) {
        setIsOptionVisible(true);
      } else {
        setIsOptionVisible(false);
      }
    };
    window.addEventListener("click", handleClose);

    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);

    onChange(option);
  };

  return (
    <Container data-testid="dropdown">
      <DropdownInput ref={ref} data-testid="dropdown-input">
        <Text data-testid="dropdown-text">
          {selectedOption?.title || options[0].title}
        </Text>
      </DropdownInput>
      {isOptionVisible && (
        <DropdownOptions data-testid="dropdown-options">
          {options.map((option, index) => {
            return (
              <li
                data-testid={`dropdown-option-${index}`}
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                <Text data-testid="dropdown-text">{option.title}</Text>
              </li>
            );
          })}
        </DropdownOptions>
      )}
    </Container>
  );
};

export default Dropdown;
