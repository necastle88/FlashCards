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

const DeleteFlyOut = ({ cardId, exitMenu }) => {
  return(
    <TouchableNativeFeedback onPress={() => alert('delete')}>
      <View style={styles.cardBackground} >
        <View style={{ justifyContent: 'center'}}>
          <Text style={styles.subHead}>Delete</Text>
        </View>
        <View style={{ marginTop: 10, marginRight: 8}}>
          <TouchableOpacity onPress={exitMenu}>
            <Feather name="x-circle" size={24} color="white" />       
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#c80815',
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
  subHead: {
    fontSize: 21,
    color: '#fff',
    fontWeight: 'bold',
    opacity: .9
  },
})

export default DeleteFlyOut;