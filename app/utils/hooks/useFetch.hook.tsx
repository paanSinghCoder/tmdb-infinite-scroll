import { useState, useEffect } from 'react'

const useFetch = (url: string, token: string = '') => {
	const [data, setData] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState<number>(1)

	/*
	 * @desc Fetch popular movies list with page number.
	 * @return Array[]
	 * @reference https://developer.themoviedb.org/reference/movie-popular-list
	 */
	const fetchData = async () => {
		try {
			const response = await fetch(url + page, {
				headers: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json'
				}
			})
			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`)
			}
			const responseData = await response.json()
			setData(prev => [...prev, ...responseData?.results])
			setError(null)
		} catch (error: unknown | any) {
			setError(error?.message ?? 'Failed to fetch data')
		} finally {
			setIsLoading(false)
		}
	}

	/*
	 * @desc Triggers setPage when user scrolls to the bottom of the page.
	 */
	const handleScroll = () => {
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				setPage((prev: number) => prev + 1)
			}
		} catch (error) {
			console.log(error)
		}
	}

	/*
	 * @desc Add scroll event listener to window object.
	 */
	useEffect(() => {
		try {
			window.addEventListener('scroll', handleScroll)
		} catch (error) {
			console.error(error)
		}

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		fetchData()
	}, [page])

	return { data, isLoading, error }
}

export default useFetch
