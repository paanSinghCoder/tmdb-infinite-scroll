'use client'

import { Container } from '@components/Container'
import Loader from '@components/Loader'
import MovieCard from '@components/MovieCard'
import useFetch from '@hooks/useFetch.hook'
import { BASE_URL } from '@utils/constants'

const tmdbToken = process.env.TMDB_TOKEN

export default function Home() {
	const { data, isLoading, error } = useFetch(BASE_URL, tmdbToken)

	if (data.length < 1 && isLoading) {
		return <Loader />
	}

	if (error) {
		return <div className="text-red-500">Error: {error}. Please refresh the page.</div>
	}

	return (
		<Container>
			<section className="py-16">
				<h1 className="lg:text-8xl text-5xl font-bold text-slate-800 pb-6 px-2 lg:px-0">
					Popular movies
				</h1>
				<p className="text-md text-slate-600 px-2 lg:px-0">
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
			{isLoading && <Loader />}
		</Container>
	)
}
