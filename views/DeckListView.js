import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const DeckListView = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deck List</Text>
      <Button
        title="Go to Detials"
        onPress={() => navigation.navigate('DeckDetials')}
      />
    </View>
  );
}

export default DeckListView;