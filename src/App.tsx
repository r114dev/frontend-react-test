import { FC } from "react";

import "./style.css";
import regionsJson from "./regions.json";

import RegionDropdown from "./components/RegionDropdown";
import { solution } from "./solution";

const data = solution(regionsJson.regions);

const App: FC = () => {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <RegionDropdown regions={data} onChange={console.log} />
    </div>
  );
};

export default App;
