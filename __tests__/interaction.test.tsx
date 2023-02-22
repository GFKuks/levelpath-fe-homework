import { fireEvent, render, screen } from "@testing-library/react";
import { LoadDataButton } from "../src/pages/birthdays/components";

test("that button is interactable if not loading", () => {
    const onClick = jest.fn();
    render(<LoadDataButton isLoading={false} onClick={onClick} />);
    const buttonElement = screen.getByTestId("load-data-button");
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
});

test("that button is disabled if loading", () => {
    const onClick = jest.fn();
    render(<LoadDataButton isLoading={true} onClick={onClick} />);
    const buttonElement = screen.getByTestId("load-data-button");
    
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(0);
});