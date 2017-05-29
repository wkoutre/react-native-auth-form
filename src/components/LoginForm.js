import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends React.Component {
	state = { text: '' };

	submitLogin = () => {
		if (this.state.text)
			console.log(this.state.text);
		else console.log('no text');
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.text}
						label={'label span'}
						onChangeText={text => this.setState({ text })}
					/>
				</CardSection>
				<CardSection />
				<CardSection>
					<Button onPress={() => this.submitLogin()}>Log In</Button>
				</CardSection>
			</Card>
		);
	}
}

export default LoginForm;
