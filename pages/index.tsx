import { setMovies } from "features/moviesSlice";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieArray } from "types";
import Movies from "../components/MoviesList";

const Home: NextPage<MovieArray> = ({ movies }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(setMovies(movies));
	}, [movies]);
	return (
		<>
			<Head>
				<title>Movies App</title>
			</Head>
			<Movies />
		</>
	);
};

export default Home;
export const getServerSideProps = async () => {
	const res = await fetch(
		"https://api.themoviedb.org/3/movie/popular?api_key=6ddb52795907072b02f903812832c791&language=en-US&page=1"
	);
	const data = await res.json();
	return {
		props: {
			movies: data.results,
		},
	};
};
