import "@testing-library/jest-dom";
import "jest-styled-components";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Dropdown Component - UX Test", () => {
  it("test id로 렌더가 잘 되는지", async () => {
    render(<App />);

    const dropdown = await screen.findByTestId("dropdown");
    const dropdownInput = await screen.findByTestId("dropdown-input");

    expect(dropdown).toBeInTheDocument();
    expect(dropdownInput).toBeInTheDocument();
  });

  it("클릭 전 옵션 창이 없는지", async () => {
    render(<App />);

    await screen.findByTestId("dropdown");

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
  });

  it("dropdown 클릭 시 옵션 창이 잘 나오는지", async () => {
    render(<App />);

    const dropdownInput = await screen.findByTestId("dropdown-input");

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();

    userEvent.click(dropdownInput);

    expect(await screen.findByTestId("dropdown-options")).toBeInTheDocument();
  });

  it("첫 번째 옵션 클릭 시 옵션 창이 잘 닫히는지", async () => {
    render(<App />);

    const dropdownInput = await screen.findByTestId("dropdown-input");

    userEvent.click(dropdownInput);

    const dropdownOption = await screen.findByTestId(`dropdown-option-0`);
    userEvent.click(dropdownOption);

    expect(screen.queryByTestId("dropdown-options")).not.toBeInTheDocument();
  });

  it("옵션 클릭 시 옵션 값이 잘 입력 되었는지", async () => {
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

describe("Dropdown Component - UI Test", () => {
  it("Dropdown 크기가 올바른지(width, height, padding)", async () => {
    render(<App />);

    const dropdownInput = (await screen.findAllByTestId("dropdown-input"))[0];

    expect(dropdownInput).toHaveStyleRule("width", "119px");
    expect(dropdownInput).toHaveStyleRule("height", "40px");
    expect(dropdownInput).toHaveStyleRule("padding", "9.5px 18px 9.5px 16px");
  });

  it("Dropdown 폰트가 올바른지", async () => {
    render(<App />);

    const dropdownText = (await screen.findAllByTestId("dropdown-text"))[0];

    expect(dropdownText).toHaveStyleRule("font-size", "14px");
    expect(dropdownText).toHaveStyleRule("font-family", "Pretendard");
    expect(dropdownText).toHaveStyleRule("font-weight", "500");
  });
});
