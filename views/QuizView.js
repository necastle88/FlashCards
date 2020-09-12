import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const QuizView = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Quiz View</Text>
      <Button
        title="Go to Detials"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default QuizView;