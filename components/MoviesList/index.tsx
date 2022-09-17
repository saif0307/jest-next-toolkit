import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { Movie } from "types";

const Index: React.FC = () => {
	const { movies } = useSelector((state: any) => state.movies);

	const getCards = () => {
		return movies.map((movie: Movie) => {
			return <Card key={movie.id} movie={movie} />;
		});
	};

	return <div className="grid grid-cols-2 gap-5 mt-10 px-10">{getCards()}</div>;
};

export default Index;
