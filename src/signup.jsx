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
	ImageBackground
} from 'react-native';

const SignUp = ({navigation}) => {
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pswd, setPswd] = useState("");

	const loginScreen = () => {
		navigation.navigate("Login")
	}

	const signupUser = () => {
		// login User
	}

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../assets/app_bg.jpg')} style={styles.container}>
				<View style={styles.scrollContainer}>
					<View style={styles.loginContainer}>
						<Text style={styles.label1}>SignUp</Text>
						<Text style={styles.label2}>
							Already have an account?{" "}
							<Text onPress={loginScreen} style={styles.link}>
								Login
							</Text>
						</Text>
						<View style={{marginTop: 50}}>
            	        <Text style={styles.label2}>Name</Text>
							<TextInput
								value={name}
								onChangeText={setName}
								placeholder="mark"
								placeholderTextColor={"#a8a8a8"}
								style={styles.textInput}
							/>
							<Text style={[styles.label2, {marginTop: 20}]}>Email Address</Text>
							<TextInput
								value={email}
								onChangeText={setEmail}
								placeholder="Example@email.com"
								placeholderTextColor={"#a8a8a8"}
								style={styles.textInput}
							/>
							<Text style={[styles.label2, {marginTop: 20}]}>Password</Text>
							<TextInput
								value={pswd}
								onChangeText={setPswd}
								placeholder="Enter 6 characters or more"
								placeholderTextColor={"#a8a8a8"}
								style={styles.textInput}
							/>
            	            <Text style={[styles.label2, {marginTop: 20}]}>Confirm Password</Text>
							<TextInput
								value={pswd}
								onChangeText={setPswd}
								placeholder="Enter 6 characters or more"
								placeholderTextColor={"#a8a8a8"}
								style={styles.textInput}
							/>
							<View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
								<TouchableOpacity style={styles.loginBtn} onPress={signupUser}>
									<Text style={{color: 'white', fontWeight: '500'}}>SignUp</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View>
						<Image source={require("../assets/save_text_icon.png")} style={styles.image} />
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ededed',
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
		borderRadius: 15,
		borderWidth: 5,
		borderColor: '#a8a8a8'
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

export default SignUp;