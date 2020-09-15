import React from 'react';
import { StyleSheet, Text, View, TouchableNativeFeedback, TextInput } from 'react-native';

import Header from '../components/Header';

const newDeckView = ({ navigation }) => {
  const [value, onChangeText] = React.useState('');
  return(
    <View style={{top: 0 }}>
      
      <View style={styles.cardContainer}>
        <Text style={styles.createADeckheader}>Create a Deck</Text>
        <View style={{ width: 300, alignSelf: 'center'}}>
          <Text style={styles.inputHeader}>Enter a deck title:</Text>
          <TextInput
            style={styles.userInput}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
          <TouchableNativeFeedback onPress={() => navigation.navigate('Decks')}> 
              <View style={styles.submitButton}>
                <Text style={{color: 'white'}}>Sumbit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    marginLeft: 16, 
    marginRight: 16, 
    height: 210,
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
    marginTop: 20,
    marginBottom: 20
  },
  inputHeader: {
    fontSize: 17,
    fontWeight: "500",
    color: '#2C3531',
  }, 
  userInput: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderRadius: 4, 
    marginTop: 8,
  },
  createADeckheader: {
      fontSize: 21,
      fontWeight: "bold",
      color: '#2C3531',
      marginLeft: 16,
      marginBottom: 16,
      marginTop: 10

  }
})

export default newDeckView;