import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';


const QuizView = ({ navigation }) => {
  const [isAnswerVisible, setIsAnswerVisible] = React.useState(false);

  const route = useRoute();
  const cards = route.params.deckcards;
  const cardsLength = cards.length;
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`0/${cardsLength}`}</Text>
      <Text></Text>
      <TouchableOpacity onPress={() => setIsAnswerVisible(true) }>
        { !isAnswerVisible ? <Text>Answer</Text> : null }
      </TouchableOpacity>
      {isAnswerVisible ? <Text>Answer text</Text> : null}
      <Button
        title="Correct"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
      title="Incorrect"
      onPress={() => navigation.navigate('Details')}
    />
    </View>
  );
}

export default QuizView;