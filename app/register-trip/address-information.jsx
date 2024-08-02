import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors'
import { RegisterTripContext } from '@/context/RegisterTripContext';
import { Ionicons } from '@expo/vector-icons';

export default function addresInfo() {
  const navigation = useNavigation();
  const router = useRouter();

  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [address, setAddress] = useState();
  const [zipcode, setZipcode] = useState();

  const {tripData, setTripData} = useContext(RegisterTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const updateTripInfo = () => {
    if (!city || !state || !address || !zipcode) {
      Alert.alert('Please fill all the required information')
      return;
    }

    setTripData({
        ...tripData,
        address: {
          city: city,
          state: state,
          address: address,
          zipcode: zipcode
        }
    });

    router.push('register-trip/review-trip')
  };

  useEffect(() => {
    console.log(tripData);
  }, [tripData])

  return (
    <ScrollView style={{
      padding: 25,
      backgroundColor: Colors.WHITE,
      height: '100%',
      paddingTop: 75
    }}>
      <TouchableOpacity style={{paddingBottom: 10}} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
      }}
      >
      I will receive the package at...
      </Text>

      {/* City */}
      <View style={{
        marginTop: 15
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>City</Text>
        <TextInput placeholder='Enter city' style={styles.input} onChangeText={(value) => setCity(value)}></TextInput>
      </View>

      {/* State */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>State</Text>
        <TextInput placeholder='Enter state' style={styles.input} onChangeText={(value) => setState(value)}></TextInput>
      </View>

      {/* Address (where the package will be delivered to you) */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Address</Text>
        <TextInput placeholder='Enter address' style={styles.input} onChangeText={(value) => setAddress(value)}></TextInput>
      </View>

      {/* Zip Code */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Zip Code</Text>
        <TextInput keyboardType="numeric" placeholder='Enter zip code' style={styles.input} onChangeText={(value) => setZipcode(value)}></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={updateTripInfo}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}
        >Review Trip</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginTop: 20
  }
})