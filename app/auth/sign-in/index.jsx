import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { auth } from '../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const signIn = () => {
    if (!email || !password) {
      Alert.alert('Please fill out all fields');
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        router.replace('/newoperation')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Alert.alert(errorCode);
      });
  }

  return (
    <ScrollView style={{
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
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.GRAY,
        marginTop: 20
      }}
      >
      Welcome Back
      </Text>
      
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
      }}
      >
        Let's sign you in
      </Text>

      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput placeholder='Enter email' style={styles.input} onChangeText={(value) => setEmail(value)}></TextInput>
      </View>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput secureTextEntry={true} placeholder='Enter password' style={styles.input} onChangeText={(value) => setPassword(value)}></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={signIn}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}
        >Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        padding: 15,
        backgroundColor: Colors.WHITE,
        borderRadius: 99,
        marginTop: 20,
        borderWidth: 1
      }}
      onPress={() => router.replace('auth/sign-up')}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}
        >Don't have an account? Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
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