import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
			<View>
				<Text>Hello world</Text>
			</View>
		</SafeAreaView>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	}
})

export default Dashboard;