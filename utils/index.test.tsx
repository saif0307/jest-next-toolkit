import { Movie } from "types";
import { getMovies } from "./index";
describe("Get all movies", () => {
  it("observes something", async () => {
    jest.fn(async () => {
      const response: Movie[] = await getMovies();
      expect(response).toBeInstanceOf(Array);
      expect(response[0]).toBeInstanceOf(Object);
      expect(response[0]).toHaveProperty("id");
      expect(response[0]).toHaveProperty("title");
      expect(response[0]).toHaveProperty("overview");
      expect(response[0]).toHaveProperty("poster_path");
      expect(response[0]).toHaveProperty("release_date");
      expect(response[0]).toHaveProperty("vote_average");
      expect(response[0]).toHaveProperty("vote_count");
      expect(response[0]).toHaveProperty("popularity");
    });
  });
});
