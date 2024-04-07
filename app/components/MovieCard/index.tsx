import React from 'react'
import { MovieCardPropsType } from './MovieCard.types'

const MovieCard = ({
	id = '',
	poster_path = '',
	title = 'Movie',
	vote_average = 0,
	release_date = '',
	original_language = 'EN',
	overview = ''
}: MovieCardPropsType) => (
	<div
		key={id}
		className="border rounded-lg mb-8 lg:w-[300px] mx-auto hover:scale-105 transition duration-75 cursor-pointer">
		<div className="md:lg:h-[450px]">
			<img
				src={`http://image.tmdb.org/t/p/original${poster_path}`}
				alt="movie poster"
				className="rounded-t-lg"
				loading="lazy"
			/>
		</div>
		<div className="p-2 flex flex-col justify-between gap-2 ">
			<div className="flex items-start justify-between min-h-[55px] pt-1">
				<h1 className="font-bold text-slate-700 text-sm">{title.substring(0, 35)}</h1>
				<div className="border ml-1 px-3 py-1 rounded-md text-sm font-semibold text-slate-700 flex flex-nowrap items-center justify-center">
					{vote_average?.toFixed(1)}
				</div>
			</div>
			<div className="text-xs text-slate-700">
				<span className="pr-2">{release_date.split('-')[0]}</span>•
				<span className="px-2">Scifi</span>•<span className="px-2">UA/13</span>•
				<span className="px-2">{original_language?.toUpperCase()}</span>
			</div>
			<p title={overview} className="text-xs text-slate-600">
				{overview.substring(0, 50)}...
			</p>
			<div className="flex justify-around items-center gap-2 pt-2">
				<button className="w-full border-none bg-blue-700 px-8 py-2 text-white rounded-md hover:bg-blue-800">
					▸ Watch now
				</button>
				<button className="bg-slate-500 px-4 py-2 rounded-md w-[30%] text-white hover:bg-slate-600">
					+
				</button>
			</div>
		</div>
	</div>
)

export default React.memo(MovieCard)
