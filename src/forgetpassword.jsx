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

const ForgetPassword = ({ navigation }) => {
	const [a, setA] = useState("");
	const [b, setB] = useState("");
	const [c, setC] = useState("");
	const [d, setD] = useState("");
	const [e, setE] = useState("");
	const [f, setF] = useState("");


	const signupScreen = () => {
		navigation.navigate("SignUp")
	}

	const forgetPassword = () => {
		// forget password
	}

	const loginUser = () => {
		// login User
	}

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../assets/app_bg.jpg')} style={styles.container}>
				<View style={styles.scrollContainer}>
					<View style={styles.loginContainer}>
						<Text style={styles.label1}>Forget Password</Text>
						<Text style={styles.label2}>
							Don't have account an account?{" "}
							<Text onPress={signupScreen} style={styles.link}>
								SignUp
							</Text>
						</Text>
						<View style={{ marginTop: 50 }}>
							<Text style={styles.label2}>Enter 6 Digit OTP </Text>
							<View style={{ display: 'flex', flexDirection: 'row' }}>
								<TextInput
									value={a}
									onChangeText={setA}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
								<TextInput
									value={b}
									onChangeText={setB}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
								<TextInput
									value={c}
									onChangeText={setC}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
								<TextInput
									value={d}
									onChangeText={setD}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
								<TextInput
									value={e}
									onChangeText={setE}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
								<TextInput
									value={f}
									onChangeText={setF}
									placeholderTextColor={"#a8a8a8"}
									style={styles.textInput}
								/>
							</View>
							<View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 5 }}>
								<Text style={styles.link}>Resend OTP?</Text>
							</View>
							<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
								<TouchableOpacity style={styles.loginBtn}>
									<Text style={{ color: 'white', fontWeight: '500' }}>Verify OTP</Text>
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
		width: 50,
		padding: 10,
		marginTop: 10,
		borderWidth: 4,
		borderRadius: 10,
		marginTop: 50,
		marginRight: 20,
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

export default ForgetPassword;