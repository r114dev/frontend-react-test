type Region = {
  code: string;
  name: string;
  children: Region[];
};

export interface RegionDropdownProps {
  regions: Region[];
  onChange: (value: any) => void;
}
