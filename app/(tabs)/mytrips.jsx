import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { auth, db } from '@/configs/FirebaseConfig'
import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import UserTripsList from '../../components/MyTrips/UserTripsList';

export default function mytrips() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    user && getTrips();
  }, [user])

  const getTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'trips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
      setUserTrips(prev => [...prev, doc.data()]);
    });

    setLoading(false);
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 35
        }}>
          My Trips
        </Text>
      </View>

      {loading && <ActivityIndicator size={'large'} />}

      {userTrips.length == 0 ?
        <StartNewTripCard /> : <UserTripsList />
      }
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