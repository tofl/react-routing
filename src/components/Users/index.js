import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const CurrentUser = (props) => (
	<p>{props.match.params.id}</p>
);

class Users extends React.Component {
	render() {
		console.log(this.props);
		return (
			<>
				<h1>Users</h1>
				<p>{ this.props.match.params.id }</p>
				<ul>
					<li><NavLink activeClassName="active" to="/users/1">User 1</NavLink></li>
					<li><NavLink activeClassName="active" to="/users/2">User 2</NavLink></li>
					<li><NavLink activeClassName="active" to="/users/3">User 3</NavLink></li>
				</ul>
				<Route path="/users/:id" component={ CurrentUser } />
			</>
		);
	}
}

export default Users;