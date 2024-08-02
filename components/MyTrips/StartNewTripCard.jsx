import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
  const router = useRouter();

  return (
    <View style={{
      padding: 20,
      marginTop: 50,
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }}>
      <Entypo name="location" size={30} color="black" />

      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-medium'
      }}>
        No trips planned yet
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}
          onPress={() => {router.push('/register-trip/search-destination')}}
        >Create new trip</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  },

  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
  }
})