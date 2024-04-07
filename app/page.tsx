'use client'

import { Container } from '@components/Container'
import MovieCard from '@components/MovieCard'
import useFetch from '@hooks/useFetch.hook'
import { BASE_URL } from '@utils/constants'

const tmdbToken = process.env.TMDB_TOKEN

export default function Home() {
	const { data, isLoading, error } = useFetch(BASE_URL, tmdbToken)

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	return (
		<Container>
			<section className=" py-16">
				<h1 className="text-8xl font-bold text-slate-800 pb-6">Popular movies</h1>
				<p className="text-md text-slate-600">
					Explore the most popular movies from around the world on TMDB. Keep scrolling.
				</p>
			</section>
			<section className="flex flex-wrap justify-between">
				{data.map((item: any) => (
					<MovieCard
						id={item?.id}
						poster_path={item?.poster_path}
						title={item?.title}
						vote_average={item?.vote_average}
						release_date={item?.release_date}
						original_language={item?.original_language}
						overview={item?.overview}
					/>
				))}
			</section>
		</Container>
	)
}
