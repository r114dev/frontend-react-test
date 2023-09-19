export interface DropdownProps {
  options: DropdownOption[];
  onChange: (option: DropdownOption) => void;
}

export type DropdownOption = {
  title: string;
  value: string;
};
