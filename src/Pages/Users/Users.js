import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = (props) => {
	const [users, setUsers] = useState();

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((response) => setUsers(response.data));
	}, []);

	return (
		<div className="user-page common-page">
			<h1>Users</h1>
			<div className="flex-grid">
				{users && users.map((user, index) => {
					return (
						<div className="col" key={index}>
							<div className="title">{user?.name}</div>
							<div className="content">{user?.username}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Users;