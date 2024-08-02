import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { AuthCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { RegisterTripContext } from '@/context/RegisterTripContext';

export default function SearchDestination() {
  const navigation = useNavigation();
  const router = useRouter();
  const {tripData, setTripData} = useContext(RegisterTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  return (
    <View style={{
      padding: 25,
      marginTop: 60,
      backgroundColor: Colors.WHITE,
      height: '100%',
      paddingTop: 20
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        color: Colors.PRIMARY,
        marginTop: 20
      }}
      >
        What is your final destination city?
      </Text>

      <GooglePlacesAutocomplete
        placeholder='Search destination'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setTripData({
            locationInfo: {
              name: data.description,
              placeId: data.place_id
            }
          });

          router.push('/register-trip/select-dates');
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: 'en',
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 25
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  },

  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 20
  }
})