import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {
	state = {
		loggedIn: null,
	};

	componentWillMount() {
			firebase.initializeApp({
			apiKey: 'AIzaSyDbiuOXry4wmgJLR-BSTr9cy2B8VBQaWGE',
			authDomain: 'react-native-auth-8ccdc.firebaseapp.com',
			databaseURL: 'https://react-native-auth-8ccdc.firebaseio.com',
			projectId: 'react-native-auth-8ccdc',
			storageBucket: 'react-native-auth-8ccdc.appspot.com',
			messagingSenderId: '801715351939'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	showContent = () => {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</CardSection>
				);					
			case false:
				return <LoginForm />;
			default:
				return (<Spinner size='large' />);
		}
	}

	render() {
		return (
			<View>
			<Header headerText='APP' />
			{this.showContent()}				
			</View>
			
		);
	}
}

export default App;
