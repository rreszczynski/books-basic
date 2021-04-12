import React from 'react';
import LoginPanel from '../LoginPanel/LoginPanel';
import logo from './logo.gif';
import nazwa from './nazwa.gif';
import './HeaderPanel.css';


function headerPanel(props) {
	return (
		<div className="topBar">
			<div>
				<img src={logo} alt="Logo" height="75" />
				<img src={nazwa} alt="Książkowo" height="100" />
			</div>
			<LoginPanel />
		</div>
	)
}

export default headerPanel