import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm'

class App extends React.Component {
	componentWillMount() {
			firebase.initializeApp({
			apiKey: 'AIzaSyDbiuOXry4wmgJLR-BSTr9cy2B8VBQaWGE',
			authDomain: 'react-native-auth-8ccdc.firebaseapp.com',
			databaseURL: 'https://react-native-auth-8ccdc.firebaseio.com',
			projectId: 'react-native-auth-8ccdc',
			storageBucket: 'react-native-auth-8ccdc.appspot.com',
			messagingSenderId: '801715351939'
		});
	}

	render() {
		return (
			<View>
				<Header headerText='Please Log In' />
				<LoginForm />
			</View>
			
		);
	}
}

export default App;
