import Index from "@/components/MoviesList";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";

describe("Home", () => {
	it("renders a component", () => {
		render(
			<Provider store={store}>
				<Index />
			</Provider>
		);
	});
});
