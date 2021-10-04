import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from "react-router-dom";
import Posts from '../../Pages/Posts/Posts';
import Home from '../../Pages/Home/Home';
import './index.scss';
import Users from '../../Pages/Users/Users';

const NavBar = () => {
	return (
		<Router>
			<div className="navigation">
				<ul>
					<li>
						<NavLink to="/" exact activeClassName="active">Home</NavLink>
					</li>
					<li>
						<NavLink to="/posts" activeClassName="active">Posts</NavLink>
					</li>
					<li>
						<NavLink to="/users" activeClassName="active">Users</NavLink>
					</li>
				</ul>
			</div>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/posts">
					<Posts />
				</Route>
				<Route path="/users">
					<Users />
				</Route>
			</Switch>

		</Router>
	)
}

export default NavBar;