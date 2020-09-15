import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../components/Header';

const DeckDetails = ({navigation}) => {
  const [isAddQuestionVisible, setIsAddQuestionVisible] = React.useState(false);

  const route = useRoute();
  const cardId = route.params.id;
  console.log(route.params.deckCards)

  return(
    <View style={{top: 0 }}>
      <View style={styles.cardContainer}>
        <Header text={route.params.deckName} />
        <Text style={styles.numberOfQuestionsText}>{`${route.params.deckCards.length} cards`}</Text>
        {!isAddQuestionVisible 
          ? <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableNativeFeedback onPress={() => setIsAddQuestionVisible(true)}> 
          <View style={styles.showAddQuestionBtn}>
            <Text style={{color: 'white'}}>Add Question</Text>
          </View>
         </TouchableNativeFeedback> 
         <TouchableNativeFeedback onPress={() => navigation.navigate('Quiz')}> 
          <View style={styles.startQuizBtn}>
            <Text style={{color: 'white'}}>Start Quiz</Text>
          </View>
         </TouchableNativeFeedback> 
          </View>
          : null}
        {isAddQuestionVisible ?
        <View style={{ width: 300, alignSelf: 'center'}}>
          <Text style={styles.inputHeader}>Question:</Text>
          <TextInput
            style={styles.userInput}
        />
        <Text style={styles.inputHeader}>Answer:</Text>
        <TextInput
          style={styles.userInput}
      />
          <TouchableNativeFeedback onPress={() => setIsAddQuestionVisible(false)}> 
              <View style={styles.submitButton}>
                <Text style={{color: 'white'}}>Sumbit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        : null 
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    marginLeft: 16, 
    marginRight: 16, 
    width: 330, 
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1, },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  submitButton: {
    height: 45, 
    width: '100%',
    fontSize: 60, 
    color: 'white', 
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 13,
    marginBottom: 20
  },
  showAddQuestionBtn: {
    height: 45, 
    width: '42%',
    fontSize: 60, 
    color: 'white', 
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 13,
    marginBottom: 20
  },
    startQuizBtn: {
    height: 45, 
    width: '42%',
    fontSize: 60, 
    color: 'white', 
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 13,
    marginBottom: 20
  },
  inputHeader: {
    fontSize: 18,
    fontWeight: "500",
    color: '#2C3531',
  }, 
  userInput: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 4, 
    marginTop: 5,
    marginBottom: 5 
  },
  numberOfQuestionsText: {
    fontSize: 14,
    fontWeight: "500",
    color: '#2C3531',
    opacity: .9,
    marginLeft: 16,
    marginTop: -8,
    marginBottom:10
  }
})

export default DeckDetails;