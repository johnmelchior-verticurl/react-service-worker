import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = (props) => {
	const [users, setUsers] = useState();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				setUsers(response.data);
				localStorage.setItem("users", JSON.stringify( response.data));
			})
			.catch((err) => {
				let data = localStorage.getItem("users");
				setUsers(JSON.parse(data));
			});;
	}, []);

	return (
		<div className="container overflow-hidden">
			<h1 class="display-4">Users</h1>
			<div className="row gy-4">
				{users && users.map((user, index) => {
					return (
						<div className="col-md-6 col-sm-12 col-xl-4 col-xs-12" key={index}>
							<div className="p-3 border bg-light">
								<div className="title">{user?.name}</div>
								<div className="content">{user?.username}</div>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Users;