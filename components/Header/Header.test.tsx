import Index from "@/components/Header/Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";

describe("Header", () => {
	it("renders a component", () => {
		render(
			<Provider store={store}>
				<Index />
			</Provider>
		);
	});
});
