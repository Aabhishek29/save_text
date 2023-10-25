import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./home";
import {navigationRef} from './RootNavigation'
import Login from "./login";
import SignUp from "./signup";

const Stack = createStackNavigator();


const linking = {
  prefixes: [
      "http://localhost:19006"
  ],
  config: {
		screens: {
    	SaveText: {
				path: '/',
    	  screens: {
    	    Home: '/',
					Login: '/login',
					SignUp: '/signup',
    	  }
    	}
		}
  }
}


const Routes = () => {
  return(
    <NavigationContainer
			ref={navigationRef}
			linking={linking}
			fallback={<Text>Loading...</Text>}
		>
      <Stack.Navigator
        initialRouteName="SaveText"
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;