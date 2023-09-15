import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

export const options = [
  {
    value: "",
    title: "선택",
  },
  {
    value: "first",
    title: "첫 번째 옵션",
  },
  {
    value: "second",
    title: "두 번째 옵션",
  },
];

describe("Dropdown Component", () => {
  it("UX Test - test id로 렌더가 잘 되는지", async () => {
    render(<App />);

    const dropdown = await screen.findByTestId("dropdown");
    const dropdownInput = await screen.findByTestId("dropdown-input");

    expect(dropdown).toBeInTheDocument();
    expect(dropdownInput).toBeInTheDocument();
  });

  it("UX Test - 클릭 전 옵션 창이 없는지", async () => {
    render(<App />);

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();

    options.forEach(async (option) => {
      expect(screen.queryByText(option.title)).not.toBeInTheDocument();
    });
  });

  it("UX Test - dropdown 클릭 시 옵션 창이 잘 나오는지", async () => {
    render(<App />);

    const dropdown = await screen.findByTestId("dropdown");

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();

    userEvent.click(dropdown);

    expect(await screen.findByTestId("dropdown-options")).toBeInTheDocument();

    options.forEach(async (option, index) => {
      expect(await screen.findByText(option.title)).toBeInTheDocument();
      expect(
        await screen.findByTestId(`dropdown-option-${index}`)
      ).toBeInTheDocument();
    });
  });

  it("UX Test - first options 옵션 클릭 시 옵션 창이 잘 닫히는지", async () => {
    render(<App />);

    const dropdown = await screen.findByTestId("dropdown");

    userEvent.click(dropdown);

    const dropdownOption = await screen.findByTestId(`dropdown-option-0`);
    userEvent.click(dropdownOption);

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
  });

  it("UX Test - 옵션 클릭 시 옵션 값이 잘 입력 되었는지", async () => {
    render(<App />);

    const dropdown = await screen.findByTestId("dropdown");

    userEvent.click(dropdown);

    const dropdownOption = await screen.findByTestId(`dropdown-option-0`);
    userEvent.click(dropdownOption);

    expect(await screen.findByTestId("dropdown-input")).toHaveTextContent(
      options[0].title
    );
  });

  it("UI Test - Dropdown Input Style", async () => {
    const dropdownInput = await screen.findByTestId("dropdown-input");
    expect(dropdownInput).toHaveStyle(`
      display: flex;
      width: 119px;
      height: 40px;
      padding: 9.5px 18px 9.5px 16px;

      border-radius: 6px;
      border: 1px solid #eeeeee;
      background: #ffffff;
    `);
  });
});
