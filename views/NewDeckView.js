import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import { addDeck } from "../redux/actions/index";

const newDeckView = ({ navigation, dispatch }) => {
  const [title, setTitle] = React.useState("");
  const [checkFields, setCheckFields] = React.useState(false)

  const onSubmitHandler = (title) => {
    
    if(title) {
    dispatch(addDeck(title));
    setTitle('');
    setCheckFields(false)
    navigation.navigate("Decks");
    } else {
      setCheckFields(true)
    }
  };

  return (
    <View style={{ top: 0 }}>
      <View style={styles.cardContainer}>
        <Text style={styles.createADeckheader}>Create a Deck</Text>
        <View style={{ width: 300, alignSelf: "center" }}>
          <Text style={styles.inputHeader}>Enter a deck title:</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={(text) => setTitle(text)}
            value={title}
          />
          {checkFields ? <Text style={{color: '#c80815', marginBottom: -10 }}>Please enter a deck title</Text> : null}
          <TouchableNativeFeedback onPress={() => onSubmitHandler(title)}>
            <View style={styles.submitButton}>
              <Text style={{ color: "white" }}>Sumbit</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
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
    marginTop: 20,
    marginBottom: 20,
  },
  inputHeader: {
    fontSize: 17,
    fontWeight: "500",
    color: "#2C3531",
  },
  userInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 8,
  },
  createADeckheader: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#2C3531",
    marginLeft: '10%',
    marginBottom: 16,
    marginTop: 10,
  },
});

export default connect(null, null)(newDeckView);
