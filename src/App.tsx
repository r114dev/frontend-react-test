import { FC } from "react";

import { options } from "./App.spec";

import "./style.css";
import Dropdown from "./components/Dropdown";

const App: FC = () => {
  return <Dropdown options={options} />;
};

export default App;
