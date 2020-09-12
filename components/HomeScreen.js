import React from 'react';
import { View, Text } from 'react-native';

import Card from '../components/Card'


const HomeScreen = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 15 }}>
      <Text style={{
        alignSelf: 'flex-start', 
        marginLeft: 16,
        marginBottom: 5,
        fontSize: 14,
        color: 'black',
        opacity: .5
      }}>99 Decks</Text>
      <Card cardTitle={'Really really really long title'} numberOfCards={10} navigation={navigation}/>
      <Card cardTitle={'Really really really long'} numberOfCards={10} />
      <Card cardTitle={'Really long title'} numberOfCards={null} />
    </View>
  );
}

export default HomeScreen;