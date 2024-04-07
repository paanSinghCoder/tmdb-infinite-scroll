'use client'

import { Suspense } from 'react'
import { Container } from '@components/Container'
import Header from '@components/Header'
import Loader from '@components/Loader'
import MovieCard from '@components/MovieCard'
import { MovieCardPropsType } from '@components/MovieCard/MovieCard.types'
import useFetch from '@hooks/useFetch.hook'
import { BASE_URL } from '@utils/constants'

export default function Home() {
	const tmdbToken = process.env.TMDB_TOKEN
	const { data, isLoading, error } = useFetch(BASE_URL, tmdbToken)

	return (
		<Container>
			<Suspense fallback={<Loader />}>
				<Header />
			</Suspense>
			<section className="flex flex-wrap justify-between">
				{data.map((item: MovieCardPropsType) => (
					<MovieCard
						key={item?.id}
						poster_path={item?.poster_path}
						title={item?.title}
						vote_average={item?.vote_average}
						release_date={item?.release_date}
						original_language={item?.original_language}
						overview={item?.overview}
					/>
				))}
				{isLoading && <Loader />}
				{error && <div className="text-red-500">Error: {error}. Please refresh the page.</div>}
			</section>
		</Container>
	)
}
