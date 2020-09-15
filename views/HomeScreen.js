import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import Deck from '../components/Deck';
import data from '../data';

const HomeScreen = ({ navigation }) => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', marginTop: 10 }}>
      <Text style={styles.cardCountText}>99 Decks</Text>
      {data.map((deck, index) => {
        {console.log(deck.name)}
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

export default HomeScreen;