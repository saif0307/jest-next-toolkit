import Image from "next/image";
import { Movie } from "types";

interface Props {
	movie: Movie;
}

const Card: React.FC<Props> = ({ movie }) => {
	return (
		<>
			<div className="flex flex-col-reverse lg:flex-row w-full bg-white .bg-gray-800 shadow rounded">
				<div className="w-full lg:w-1/2">
					<div className="pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
						<div className="flex justify-between items-center lg:items-start flex-row-reverse lg:flex-col">
							<p className="text-base text-indigo-700 .text-indigo-600 tracking-normal leading-4">
								Popularity: {movie?.popularity}
							</p>
							<p className="lg:mt-3 text-gray-600 .text-gray-400 text-base font-normal">
								{movie?.release_date}
							</p>
						</div>
						<h2 className="text-gray-800 .text-gray-100 mt-4 mb-2 tracking-normal text-xl lg:text-2xl font-bold">
							{movie?.title}
						</h2>
						<p className="mb-6 font-normal text-gray-600 .text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">
							{movie?.overview}
						</p>
					</div>
				</div>
				<div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
					<Image
					    loading="lazy"
						className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none"
						src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
						alt="banner"
						layout="fill"
					/>
				</div>
			</div>
		</>
	);
};

export default Card;
