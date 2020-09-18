import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import Deck from '../components/Deck';
import { connect } from 'react-redux';

const HomeScreen = ({ navigation, state }) => {
  const data = Object.values(state.addDeckReducer.flashCards)
  console.log(state)

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
      <Text style={styles.cardCountText}>99 Decks</Text>
      {state.flashCards === null ? 
        <Text>Click add from below to create a new deck</Text>
        : data.map((deck, index) => {
        return <Deck key={`${deck.name}_${index}`} cardTitle={deck.name} numberOfCards={deck.cards.length} cards={deck.cards}/>
      })
    }
    </View>
  );
}

const styles = StyleSheet.create({
  cardCountText: {
    alignSelf: 'flex-start', 
      marginLeft: 16,
      marginBottom: 5,
      fontSize: 14,
      color: 'black',
      opacity: .5
  }
})

const mapStateToProps = (state) => {
  return {
    state
  }
}
export default connect(mapStateToProps)(HomeScreen);