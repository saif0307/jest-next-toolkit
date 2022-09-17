import Index from "@/components/Card/Card";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "@/components/store/store";
import { Movie } from "types";
let movie: Movie;
describe("Card Component", () => {
	it("renders a card", () => {
		render(
			<Provider store={store}>
				<Index movie={movie} />
			</Provider>
		);
	});
});
