import * as React from 'react'
import './App.css'
import useAPI from './useAPI'

const { useState } = React

const AllPosts = ({ setActivePost }) => {
	const { data, error } = useAPI()
	return (
		<>
			<h2>All Posts</h2>
			{!data && !error && <h1>loading...</h1>}
			{error && <h1>Error!</h1>}

			{data &&
				data.map((item) => (
					<div key={item.id} className='post__container'>
						<div style={{ marginTop: '1rem' }}>
							{item.title}
							<button onClick={() => setActivePost(item.id)}>View Post</button>
						</div>
					</div>
				))}
		</>
	)
}

const SinglePost = ({ activePost, setActivePost }) => {
	const { data, error } = useAPI(activePost)

	return (
		<div className='singlePost_container'>
			<h3>Single Post</h3>
			{!data && !error && <h1>Loading single Post...</h1>}
			{error && <h1>Error loading single post!</h1>}
			<div>
				<h3>{data?.title}</h3>
				<div>{data?.body}</div>
			</div>
			<button onClick={() => setActivePost(null)}>Back</button>
		</div>
	)
}

export default function App() {
	const [activePost, setActivePost] = useState(null)

	return (
		<div className='App'>
			<h1>useSWR example</h1>
			{activePost ? (
				<SinglePost activePost={activePost} setActivePost={setActivePost} />
			) : (
				<AllPosts setActivePost={setActivePost} />
			)}
		</div>
	)
}
