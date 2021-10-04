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
		<div className="post-home common-page">
			<h1>Posts</h1>
			<div className="flex-grid">
				{posts && posts.map((post, index) => {
					return (
						<div className="col" key={index}>
							<div className="title">{post?.title}</div>
							<div className="content">{post?.body}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Posts;