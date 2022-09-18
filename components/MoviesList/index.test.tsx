import Index from "@/components/MoviesList";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";

describe("Home", () => {
  it("renders a component", () => {
    const { container } = render(
      <Provider store={store}>
        <Index />
      </Provider>
    );
    screen.debug();
    expect(container?.firstChild).toHaveClass("grid");
    expect(container?.firstChild).toHaveClass("grid grid-cols-2");
  });
});
