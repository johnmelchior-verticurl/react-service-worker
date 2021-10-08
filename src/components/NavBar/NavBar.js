import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink
} from "react-router-dom";
import Posts from '../../Pages/Posts/Posts';
import './index.scss';
import Users from '../../Pages/Users/Users';

const NavBar = () => {
	return (
		<Router>
			<nav className="navbar navbar-expand navbar-light bg-light navigation">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item nav-list">
								<NavLink to="/" className="nav-link" exact activeClassName="active">Posts</NavLink>
							</li>
							<li className="nav-item">
							<NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<Switch>
				<Route exact path="/">
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