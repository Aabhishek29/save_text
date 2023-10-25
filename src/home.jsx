import React, { useState } from "react";
import {
  View,
	Text,
	SafeAreaView,
	Image,
	ScrollView,
	StyleSheet,
	Platform,
	TextInput,
	TouchableOpacity,
	Button
} from 'react-native';

const Home = ({navigation}) => {
	const [email, setEmail] = useState("");
	const [pswd, setPswd] = useState("");

	const forgetPassword = () => {
		// forget password
	}

	const loginUser = () => {
		// login User
	}

	return (
		<SafeAreaView style={styles.container}>
			<Button onPress={()=> {
				console.log(navigation)
				navigation.navigate("SignUp")
			}} title="Press" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#a8a8a8',
	},
	scrollContainer: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginContainer: { 
		flex: Platform.OS === "web" ? 0.4 : 1,
		backgroundColor: '#fff',
		marginRight: 50,
		padding: 50,
		borderRadius: 15
	},
	label1: {
		fontSize: 22,
		color: 'black',
		fontWeight: '700'
	},
	label2: {
		fontSize: 16,
		color: '#4d4d4d',
		fontWeight: '500'
	},
	link: {
		color: 'blue', 
		fontSize: 12, 
		fontWeight: '500',
		textDecorationLine: 'underline'
	},
	textInput: {
		padding: 10,
		marginTop: 10,
		borderWidth: 1,
		fontWeight: '500',
		borderColor: '#a8a8a8'
	},
	image: {
		width: 350,
		height: 350,
		borderRadius: 15,
		elevation: 20,
    	shadowColor: '#52006A',
	},
	loginBtn: {
		backgroundColor: '#075ef5',
		padding: 10, width: '50%', 
		justifyContent: 'center', 
		alignItems: 'center', 
		borderRadius: 10
	}
})

export default Home;