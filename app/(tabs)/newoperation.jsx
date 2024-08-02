import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function NewOperation() {
  const router = useRouter();

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%',
     justifyContent: 'center',

    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35
      }}>I would like to...</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/register-trip/search-destination')}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 25,
            padding: 20
          }}
        >Register a new trip</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 25,
            padding: 20
          }}
        >Place a new order</Text>
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
    borderRadius: 99,
    marginTop: 25
  }
})