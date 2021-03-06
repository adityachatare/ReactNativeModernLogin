import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default class App extends React.Component {
	render() {
		state = {
			email: "",
			password: ""
		}
		return (
			<View style={styles.container}>
				<Text style={styles.logo}>Holla..</Text>
				<View style={styles.inputView}>
					<TextInput style={styles.inputText}
						placeholder="Email.." placeholderTextColor="#003f5c" onChangeText={text => this.setState({ email: text })}
					></TextInput>


				</View>
				<View style={styles.inputView}>
					<TextInput style={styles.inputText} secureTextEntry
						placeholder="Password.." placeholderTextColor="#003f5c" onChangeText={text => this.setState({ password: text })}
					></TextInput>
				</View>
				<TouchableOpacity ><Text style={styles.forgot}>Forgot Passowrd?</Text></TouchableOpacity>
				<TouchableOpacity style={styles.loginbtn}><Text >Login</Text></TouchableOpacity>
				{/* <TouchableOpacity style={styles.loginbtn}><Text >Login</Text></TouchableOpacity> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#003f5c",
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		fontWeight: 'bold',
		fontSize: 50,
		color: '#fb5b5a',
		marginBottom: 40
	},
	inputView: {
		width: "80%",
		backgroundColor: "#465881",
		borderRadius: 25,
		height: 50,
		marginBottom: 20,
		justifyContent: 'center',
		padding: 20
	},
	inputText: {
		height: 50,
		color: 'white'
	},
	forgot: {
		color: "white",
		fontSize: 11
	},
	loginbtn: {
		width: "80%",
		backgroundColor: "#fb5b5a",
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 10
	}
});