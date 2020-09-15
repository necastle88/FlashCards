import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image
} from 'react-native'
import { Feather } from '@expo/vector-icons';
import DeleteFlyOut from './DeleteFlyOut';
import { useNavigation } from '@react-navigation/native';


const Deck = ({ cardTitle, numberOfCards, cardId, cards }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const navigation = useNavigation();

  if (cardTitle.length > 32) {
    cardTitle = `${cardTitle.slice(0, 32)}...`
  }

  const onPressHandler = () => {
    if(isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }
  


  return(
    <TouchableNativeFeedback onPress={() => navigation.navigate('Deck Details', {
        id: cardId,
        deckName: cardTitle,
        deckCards: cards
    })
  }>
      <View style={styles.cardBackground} >
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.cardTitle}>{cardTitle}</Text>
          <Text style={styles.subHead}>{numberOfCards ? numberOfCards : '0'} Cards</Text>
        </View>
        <View style={{ marginTop: 16, marginRight: 7 }}>
          {!isOpen ? 
            <TouchableOpacity onPress={() => onPressHandler()}>
            <Feather name="more-vertical" size={24} color="black" />
          </TouchableOpacity>
        : null
      }
        </View>
        {isOpen ? 
        <View style={{ elevation: 5, marginLeft: -400}}>
          <DeleteFlyOut id={cardId} exitMenu={onPressHandler} /> 
        </View>
        : null}
      </View>
    </TouchableNativeFeedback>
    
  )
}

const styles = StyleSheet.create({
  cardBackground: {
    flexDirection: 'row',
    width: 330,
    height: 80,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1, },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingLeft: 20,
    paddingBottom: 4,
    justifyContent: "space-between",
    marginBottom: 12
  },
  cardTitle: {
    fontSize: 21,
    fontWeight: "bold",
    color: '#2C3531',
    marginBottom: 1
  },
  subHead: {
    fontSize: 14,
    color: '#2C3531',
    opacity: .9
  },
  moreButton: {

  }
})

export default Deck;