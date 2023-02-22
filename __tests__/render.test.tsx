import { render, screen } from "@testing-library/react";
import { LoadDataButton } from "../src/pages/birthdays/components";

test("that button renders", () => {
    render(<LoadDataButton isLoading={false} onClick={() => null} />);
    const buttonElement = screen.getByTestId("load-data-button");
    
    expect(buttonElement).toBeInTheDocument();
});