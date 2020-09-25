import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useRoute } from "@react-navigation/native";

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
      <Text>{`${quizQuestionCount + 1}/${cards}`}</Text>
      <Text>{flashcards[quizQuestionCount].question}</Text>

      <Text></Text>
      <TouchableOpacity onPress={() => setIsAnswerVisible(true)}>
        {!isAnswerVisible ? <Text>Check your answer</Text> : null}
      </TouchableOpacity>
      {isAnswerVisible ? (
        <Text>{flashcards[quizQuestionCount].answer}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleCorrectOnpress()}
      >
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIcorrectOnpress()}
      >
        <Text style={styles.buttonText}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View>
      <Text>Complete Menu</Text>
      <Text>{`${(points / cards).toFixed(2) * 100}`}</Text>
      <Text>Percent</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleQuizResetOnpress()}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleGoToDecksOnpress()}
      >
        <Text style={styles.buttonText}>Decks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 40,
    marginLeft: 22,
    width: 315,
    height: 500,
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
    marginBottom: 20,
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
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
});

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(QuizView);
