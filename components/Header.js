import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Header = ({ text }) => {
  return(
    <View style={styles.header}>
      <Text style={styles.sectionHeading}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    width: '100%', 
    paddingLeft: 16,
    alignContent: "center",
    marginBottom: 10
  },
  sectionHeading: {
    fontSize: 21,
    fontWeight: '700',
    color: '#232F34',  }
})

export default Header;