import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

const Posts = () => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((response) => {
				setPosts(response.data);
				localStorage.setItem("posts", JSON.stringify(response.data))
			})
			.catch((err) => {
				let data = localStorage.getItem("posts");
				setPosts(JSON.parse(data));
			});
	}, []);

	return (
		<div className="container">
			<h1 className="display-4">Posts</h1>
			<div className="row gy-4">
				{posts && posts.map((post, index) => {
					return (
						<div className="col-md-6 col-sm-12 col-xl-4 col-xs-12" key={index}>
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