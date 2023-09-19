import "@testing-library/jest-dom";
import "jest-styled-components";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

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

    await screen.findByTestId("dropdown");

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
  });

  it("UX Test - dropdown 클릭 시 옵션 창이 잘 나오는지", async () => {
    render(<App />);

    const dropdownInput = await screen.findByTestId("dropdown-input");

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();

    userEvent.click(dropdownInput);

    expect(await screen.findByTestId("dropdown-options")).toBeInTheDocument();
  });

  it("UX Test - 첫 번째 옵션 클릭 시 옵션 창이 잘 닫히는지", async () => {
    render(<App />);

    const dropdownInput = await screen.findByTestId("dropdown-input");

    userEvent.click(dropdownInput);

    const dropdownOption = await screen.findByTestId(`dropdown-option-0`);
    userEvent.click(dropdownOption);

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
  });

  it("UX Test - 옵션 클릭 시 옵션 값이 잘 입력 되었는지", async () => {
    render(<App />);

    const dropdownInput = (await screen.findAllByTestId("dropdown-input"))[0];

    userEvent.click(dropdownInput);

    const dropdownOption = await screen.findByTestId(`dropdown-option-1`);
    userEvent.click(dropdownOption);

    const title = dropdownOption.textContent;

    expect(
      (await screen.findAllByTestId("dropdown-input"))[0]
    ).toHaveTextContent(title || "");
  });
});
