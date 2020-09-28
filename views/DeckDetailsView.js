import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { connect } from "react-redux";

import { addFlashcard } from '../redux/actions/index';
import Header from "../components/Header";

const DeckDetails = ({ navigation, dispatch, state }) => {
  
  const [isAddQuestionVisible, setIsAddQuestionVisible] = React.useState(false);
  const [question, setQuestion] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [checkFields, setCheckFields] = React.useState(false)

  const route = useRoute();
  const cardId = route.params.cardId;

  let cardLength = state.addDeckReducer.flashCards[cardId].cards.length

  const addFlashCardHandler = () => {
    const flashCard = {
      question,
      answer
    }
    if(answer && question) {
      dispatch(addFlashcard(flashCard, cardId));
      setQuestion('');
      setAnswer('');
      setCheckFields(false)
      setIsAddQuestionVisible(false);
    } else {
      setCheckFields(true)
    }
    
  };

 
  return (
    <View style={{ top: 0 }}>
      <View style={styles.cardContainer}>
        <Header text={route.params.deckName} />
        <Text
          style={styles.numberOfQuestionsText}
        >{`${cardLength} cards`}</Text>
        {!isAddQuestionVisible ? (
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly"}}
          >
            <TouchableNativeFeedback
              onPress={() => setIsAddQuestionVisible(true)}
            >
              <View style={{
                height: 45,
                width: `${cardLength > 0  ? '42%' : '88%'}`,
                fontSize: 60,
                color: "white",
                backgroundColor: "#116466",
                borderWidth: 1,
                borderColor: "#116466",
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 13,
                marginBottom: 20,
              }}>
                <Text style={{color: "white"}}>Add Question</Text>
              </View>
            </TouchableNativeFeedback>
            {cardLength > 0 
              ? 
            <TouchableNativeFeedback
              onPress={() =>
                navigation.navigate("Quiz", {
                  deckCards: cardLength,
                  cardID: cardId
                })
              }
            >
              <View style={styles.startQuizBtn}>
                <Text style={{ color: "white" }}>Start Quiz</Text>
              </View>
            </TouchableNativeFeedback> 
            : null
            }
          </View>
        ) : null}
        {isAddQuestionVisible ? (
          <View style={{ width: '92%', alignSelf: "center" }}>
            <Text style={styles.inputHeader}>Question:</Text>
            <TextInput 
              style={styles.userInput} 
              onChangeText={question => setQuestion(question)}
              value={question}
              />
            <Text style={styles.inputHeader}>Answer:</Text>
            <TextInput style={styles.userInput} 
              style={styles.userInput} 
              onChangeText={answer => setAnswer(answer)}
              value={answer}
            />
            {checkFields ? <Text style={{color: '#c80815'}}>Please Fill out all fields</Text> : null}
            <TouchableNativeFeedback
              onPress={() => addFlashCardHandler()}
            >
              <View style={styles.submitButton}>
                <Text style={{ color: "white" }}>Sumbit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 30,
    marginLeft: 16,
    marginRight: 16,
    width: '92%',
    justifyContent: "flex-start",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  submitButton: {
    height: 45,
    width: "100%",
    fontSize: 60,
    color: "white",
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 30,
  },
  startQuizBtn: {
    height: 45,
    width: "42%",
    fontSize: 60,
    color: "white",
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 20,
  },
  inputHeader: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2C3531",
  },
  userInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  numberOfQuestionsText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3531",
    opacity: 0.9,
    marginLeft: 16,
    marginTop: -8,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(DeckDetails);
