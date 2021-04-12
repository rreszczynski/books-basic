import React, { Component } from 'react';
import './LoginPanel.css';

class LoginPanel extends Component {
	state = {
		user: '',
	};

	componentDidMount() {
		const storedUser = localStorage.getItem('user');
		this.setState({user: storedUser});
	}

	handleChange = (event) => {
		const value = event.target.value;
		this.setState({ user: value });
	};

	handleFormSubmit = () => {
		const {user} = this.state;
		localStorage.setItem('user', user);
	};

	handleLogoutButtonClik = () => {
		localStorage.removeItem('user');
	}

	render() {
		const userStored = localStorage.getItem('user')
		const isEnabled = this.state.user;

		if(!userStored) {
			return (
				<form onSubmit={this.handleFormSubmit}>
					<label>
						Użytkownik: <input name="user" onChange={this.handleChange} />
					</label>
					<button className="loginLogoutButton" type="submit" disabled={!isEnabled}>Zaloguj</button>
				</form>
			);
		}
		else return (
			<form onSubmit={this.handleLogoutButtonClik}>
					<label>
						Użytkownik: {userStored}
					</label>
				<button className="loginLogoutButton" type="submit">Wyloguj</button>
			</form>
		)
	}
}

export default LoginPanel;