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
	Button,
	ImageBackground
} from 'react-native';

const Home = ({navigation}) => {
	
	const navigateToLogin = () => {
		navigation.navigate("Login");
	}

	const navigateToSignUp = () => {
		navigation.navigate("SignUp");
	}
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={require('../assets/home_background.jpg')} style={styles.container}>
				<View style={{width: '100%', padding: 10, backgroundColor: '#fff', display: 'flex', flexDirection: 'row'}}>
					{/* <Image source={require('../assets/save_text.png')} style={{height: 50, width: 80}}  /> */}
					<Text style={{fontSize: 32, color: '#000', fontWeight: '700', fontFamily: 'Roboto', marginLeft: '5%'}}>SaveText</Text>
				</View>
				<View style={styles.contentView}>
					<Text style={{fontSize: 46, color: '#000', fontWeight: '700', fontFamily: 'Roboto', marginLeft: '5%'}}>Welcome To SaveText</Text>
					<Text style={{fontSize: 26, color: '#000', fontWeight: '700', fontFamily: 'Roboto', marginLeft: '5%', marginTop: 30}}>Secure workspace to store and access your confidential documents</Text>
					<View style={{width: '50%', justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
						<TouchableOpacity style={styles.loginBtn} onPress={navigateToLogin}>
							<Text style={{color: 'white', fontWeight: '500'}}>Login</Text>
						</TouchableOpacity>
						<Text style={{fontSize: 26, color: '#000', fontWeight: '700', fontFamily: 'Roboto', marginTop: 30, marginBottom: 30}}>OR</Text>
						<TouchableOpacity style={styles.loginBtn} onPress={navigateToSignUp}>
							<Text style={{color: 'white', fontWeight: '500'}}>Don't have account? SignUp</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
	contentView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
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