import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

const Posts = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => setPosts(response.data));
	}, []);

	console.log("Posts", posts);

	return (
		<div className="container overflow-hidden">
			<h1 className="display-4">Posts</h1>
			<div className="row gy-4">
				{posts && posts.map((post, index) => {
					return (
						<div className="col-4" key={index}>
							<div className="p-3 border bg-light">
								<div className="title">{post?.title}</div>
								<div className="content">{post?.body}</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Posts;