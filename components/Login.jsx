import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function Login() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={require('@/assets/images/bg.png')}
        style={{
          width: '120%',
          height: 500
        }}
      />

      <View style={styles.container}>
        <Text style={{
          fontSize: 28,
          fontFamily: 'outfit-bold',
          textAlign: 'center'
        }}>WorldRelay</Text>

        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20,
          textAlign: 'center',
          color: Colors.GRAY,
          marginTop: 20
        }}>"Bridging worlds, delivering dreams – connecting buyers and travelers for affordable global shipping"</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('auth/sign-in')}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 17
            }}
          >
            Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },

  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: '25%'
  }
})