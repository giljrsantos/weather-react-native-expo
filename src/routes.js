import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();
import Currentday from './pages/Currentday';
import Nextdays from './pages/Nextdays';



export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                  
                <AppStack.Screen name="Currentday" component={Currentday} />
                <AppStack.Screen name="Nextdays" component={Nextdays} />
                                             
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

