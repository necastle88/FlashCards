import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useRoute } from "@react-navigation/native";
import QuizCompletion from '../components/QuizCompletion';

const QuizView = ({ navigation, state }) => {
  const [isAnswerVisible, setIsAnswerVisible] = React.useState(false);
  const [quizQuestionCount, setQuizQuestionCount] = React.useState(0);
  const [points, setPoints] = React.useState(0);

  const route = useRoute();

  const cards = route.params.deckCards;
  const cardID = route.params.cardID;

  const flashcards = state.addDeckReducer.flashCards[cardID].cards;

  const handleCorrectOnpress = () => {
    setQuizQuestionCount(quizQuestionCount + 1);
    setIsAnswerVisible(false);
    setPoints(points + 1);
  };

  const handleIcorrectOnpress = () => {
    setQuizQuestionCount(quizQuestionCount + 1);
    setIsAnswerVisible(false);
  };

  const handleQuizResetOnpress = () => {
    setQuizQuestionCount(0);
    setIsAnswerVisible(false);
    setPoints(0);
  };

  const handleGoToDecksOnpress = () => {
    navigation.navigate("Decks");
  };

  return quizQuestionCount < cards ? (
    <View style={styles.cardContainer}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={styles.numberOfQuestions}>{`${
          quizQuestionCount + 1
        }/${cards}`}</Text>
        <TouchableOpacity onPress={() => setIsAnswerVisible(true)}>
          {!isAnswerVisible ? <Text style={styles.answerText}>Show Answer</Text> : null}
        </TouchableOpacity>
        {isAnswerVisible ? (
          <Text style={styles.answerText} >{flashcards[quizQuestionCount].answer}</Text>
        ) : null}
      </View>

      <Text style={styles.flashcardQuestion}>
        {flashcards[quizQuestionCount].question}
      </Text>
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.correctButton}
          onPress={() => handleCorrectOnpress()}
        >
          <Text style={styles.buttonText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleIcorrectOnpress()}
        >
          <Text style={styles.buttonText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    /*complete quiz component */
    <QuizCompletion 
      quizReset={handleQuizResetOnpress} 
      toHome={handleGoToDecksOnpress} 
      points={points}
      cards={cards}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    marginLeft: 22,
    width: 315,
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 24,
  },
  button: {
    height: 45,
    width: "42%",
    fontSize: 60,
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
    marginBottom: 10,
  },
  IncorrectButton: {
    height: 45,
    width: "42%",
    fontSize: 60,
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  correctButton: {
    height: 45,
    width: "42%",
    fontSize: 60,
    backgroundColor: "#116466",
    borderWidth: 1,
    borderColor: "#116466",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 13,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 10,
  },
  numberOfQuestions: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3531",
    opacity: 0.9,
  },
  answerText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#2C3531",
    opacity: 0.7,
  },
  flashcardQuestion: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2C3531",
    width: "100%",
    marginTop: 18,
  },
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(QuizView);
