import { FC, useMemo, useState } from "react";

import { RegionDropdownProps } from "./types";

import Dropdown, { DropdownOption } from "../Dropdown";

const defaultSelectOption = { value: "", title: "선택" };

const RegionDropdown: FC<RegionDropdownProps> = ({ regions, onChange }) => {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption>(defaultSelectOption);

  const handleChange = (option: DropdownOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  const selectedRegion = useMemo(
    () => regions.find((region) => region.code === selectedOption?.value),
    [regions, selectedOption?.value]
  );

  const hasChild = selectedRegion && selectedRegion.children.length > 0;

  return regions.length > 0 ? (
    <>
      <Dropdown
        options={[
          defaultSelectOption,
          ...regions
            .filter(({ name }) => !!name)
            .map(({ code, name }) => ({
              value: code,
              title: name,
            })),
        ]}
        onChange={handleChange}
      />
      {hasChild && (
        <RegionDropdown
          key={selectedOption.value}
          regions={selectedRegion.children.filter(({ name }) => !!name)}
          onChange={onChange}
        />
      )}
    </>
  ) : null;
};

export default RegionDropdown;
