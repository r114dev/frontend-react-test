export type Region = {
  code: string;
  region1: string;
  region2: string;
  region3: string;
  region4: string;
};

export type SeperateRegion = {
  code: string;
  name: string;
  children: SeperateRegion[];
};

export type ProgressState = "ready" | "success" | "fail";
