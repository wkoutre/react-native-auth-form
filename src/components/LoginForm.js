import React from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends React.Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	};

	/*
			binding using an arrow function rather than 
			this.submitLogin.bind(this) on the onPress prop below
	*/

		onLoginSuccess = () => {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	onLoginFail = () => {
		this.setState({ error: 'Authentication failed', loading: false });
	}

	submitLogin = () => {
		const { email, password } = this.state;

		this.setState({
			error: '',
			loading: true
		});

		console.log(email, password);

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess.bind(this))
				.catch(this.onLoginFail.bind(this))
			);
	}

	renderButton = () => (
		this.state.loading ?
			<Spinner size='small' /> :
			<Button onPress={() => this.submitLogin()}>Log In</Button>
		);

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						value={this.state.email}
						label={'Email'}
						placeholder='user@gmail.com'
						onChangeText={email => this.setState({ email })}
						autoCapitalize='none'
					/>
				</CardSection>
				<CardSection>
					<Input
						value={this.state.password}
						label={'Password'}
						placeholder='password'
						onChangeText={password => this.setState({ password })}
						autoCapitalize='none'
						secureTextEntry
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>
				{ this.renderButton() }
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
