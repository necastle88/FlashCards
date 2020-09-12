import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import configureStore from './redux/configStore';

import HomeScreen from './views/HomeScreen';
import DeckListView from './views/DeckListView';
import DetialsScreen from './views/DetialsScreen';
import IndividualDeckView from './views/IndividualDeckView';
import NewDeckView from './views/NewDeckView';
import NewQuestionView from './views/NewQuestionView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={configureStore(null)}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Decks" component={HomeScreen} />
          <Stack.Screen name="DeckList" component={DeckListView} />
          <Stack.Screen name="DeckDetials" component={DetialsScreen} />
          <Stack.Screen name="IndividualDeck" component={IndividualDeckView} />
          <Stack.Screen name="NewDeck" component={NewDeckView} />
          <Stack.Screen name="NewQuestion" component={NewQuestionView} />
          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
