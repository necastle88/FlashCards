import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title='Go Home'
        onPress={() => navigation.navigate('Home')}
        />
      <Button 
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
      <Button 
        title='Go Back to the first screen in the stack'
        onPress={() => navigation.popToTop()}
      />
    </View>  
  );
}

export default DetailsScreen;