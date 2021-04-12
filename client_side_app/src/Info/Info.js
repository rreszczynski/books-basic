import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './Info.css';

class Info extends Component {
	constructor(props) {
		super(props);

		this.state = {
			goBack: false,
		}
	}


	buttonClicked = () => {
		this.setState({goBack: true});
	}

	render() {
		// przekierowanie po pomyslnym dodaniu danych do bazy
		const goBack = this.state.goBack;
		if (goBack) {
		   	return <Redirect to='/' />;
		}
		return (
		  	<div>
		    	<div id="message">
			    	Nowa książka została pomyślnie dodana do bazy.
		    	</div>
		    	<button id="confirmButton" onClick={this.buttonClicked}>Wróć</button>
		   	</div>
		)
   }

}

export default Info