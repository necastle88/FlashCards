import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import configureStore from './redux/configStore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import HomeScreen from './views/HomeScreen';
import NewDeckView from './views/NewDeckView';
import DeckDetailsView from './views/DeckDetailsView';
import QuizView from './views/QuizView';

//Dummy data

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  

  const createBottomNav = () => {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Decks') {
              iconName = focused ? 'cards' : 'cards-outline'           ;
            } else if (route.name === 'Add') {
              iconName = focused ? 'plus-box' : 'plus-box-outline';
            }
              return <MaterialCommunityIcons 
              name={iconName} 
              size={size} 
              color={color} 
              style={{alignSelf: 'center', margin: 20}}
              />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#116466',
          inactiveTintColor: 'gray',
          labelStyle: { fontSize: 14, paddingBottom: 8},
          style: {
            padding: 10,
            height: 65,
          },
        }}
        >
          <Tab.Screen name="Decks" component={HomeScreen} />
          <Tab.Screen name="Add" component={NewDeckView} />
        </Tab.Navigator>
    )
  }

  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Mobile Flash Cards' children={createBottomNav} />
          <Stack.Screen name='Deck Details' component={DeckDetailsView} />
          <Stack.Screen name='Quiz' component={QuizView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
