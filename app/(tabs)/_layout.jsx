import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tabs.Screen name='mytrips'
        options={{
          tabBarLabel: 'My Trips',
          tabBarIcon: ({color}) => <FontAwesome name="plane" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='myorders'
        options={{
          tabBarLabel: 'My Orders',
          tabBarIcon: ({color}) => <Feather name="package" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='newoperation'
        options={{
          tabBarLabel: 'New Operation',
          tabBarIcon: ({color}) => <Entypo name="new-message" size={24} color={color} />
        }}
      />
      <Tabs.Screen name='profile'
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) => <Ionicons name="people-circle-sharp" size={24} color={color} />
          }}
      />
    </Tabs>
  )
}