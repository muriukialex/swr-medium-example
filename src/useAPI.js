import useSWR from 'swr'

const API = `https://jsonplaceholder.typicode.com/posts`

const fetcher = (url) => fetch(url).then((res) => res.json())

const useAPI = (id = '') => {
	const { data, error } = useSWR(API + `/${id}`, fetcher)

	return {
		data: data,
		error: error,
	}
}

export default useAPI
