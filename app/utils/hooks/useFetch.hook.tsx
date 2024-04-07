import { useState, useEffect } from 'react'

const useFetch = (url: string, token: string = '') => {
	const [data, setData] = useState<any[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [page, setPage] = useState<number>(1)

	const fetchData = async () => {
		try {
			const response = await fetch(url + page, {
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWE2NDE4MTJlNDg1OTdmNmE0MGIzOGFlOTY1YjU5NSIsInN1YiI6IjU5NjNkMjdjOTI1MTQxNWE0MDBjYWYxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OelJ0KDMxbqP1_rhZoNd19dtAdIXdk6JEtS8m1EGDB4`,
					'Content-Type': 'application/json'
				}
			})
			if (!response.ok) {
				throw new Error(`Failed to fetch data: ${response.status}`)
			}
			const responseData = await response.json()
			setData((prev: any) => [...prev, ...responseData?.results])
			setError(null)
		} catch (error: any) {
			setError(error.message || 'Failed to fetch data')
		} finally {
			setIsLoading(false)
		}
	}

	const handleScroll = () => {
		try {
			if (
				window.innerHeight + document.documentElement.scrollTop + 1 >=
				document.documentElement.scrollHeight
			) {
				console.log('SETPAGE')
				setPage((prev: number) => prev + 1)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		fetchData()
	}, [page])

	return { data, isLoading, error }
}

export default useFetch
