import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { RegisterTripContext } from '@/context/RegisterTripContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { auth, db } from '@/configs/FirebaseConfig';
import { doc, setDoc } from 'firebase/firestore';

export default function reviewTrip() {
  const {tripData, setTripData} = useContext(RegisterTripContext);
  const user = auth.currentUser;  
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const submitTrip = async () => {
    if (loading) {
      return;
    }

    setLoading(true);
    const docId = Date.now().toString();
    await setDoc(doc(db, 'trips', docId), {
      userEmail: user.email,
      tripData: JSON.stringify(tripData),
      docId: docId,
    })

    setLoading(false);
    router.push('/(tabs)/mytrips');
  }

  return (
    <View style={{
      padding: 25,
      paddingTop: 75,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity style={{paddingBottom: 20}} onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35
      }}>
        Review Trip
      </Text>
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 20
        }}>
          Before submitting your trip, make sure all the information is correct.
        </Text>

        {/* Destination */}
        <View style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Ionicons name="location-sharp" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>
              Destination
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20,
              flexShrink: 1
            }}>
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>

        {/* Package Receive Date */}
        <View style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Fontisto name="date" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>
              Package arrives at your location
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              From: {tripData?.dates?.range?.startDate.toDateString()}
            </Text>
            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              To: {tripData?.dates?.range?.endDate.toDateString()}
            </Text>
          </View>
        </View>

        {/* Address */}
        <View style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Entypo name="home" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>
              You will receive the package at
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              City: {tripData?.address?.city}
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              State: {tripData?.address?.state}
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              Address: {tripData?.address?.address}
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              Zipcode: {tripData?.address?.zipcode}
            </Text>
          </View>
        </View>

        {/* Package final destination */}
        <View style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          gap: 20
        }}>
          <Feather name="package" size={34} color="black" />
          <View>
            <Text style={{
              fontFamily: 'outfit',
              fontSize: 20,
              color: Colors.GRAY
            }}>
              Package delivery on
            </Text>

            <Text style={{
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>
              {tripData?.dates?.deliveryDate.toDateString()}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: 'center',
              fontFamily: 'outfit',
              fontSize: 17
            }}
            onPress={submitTrip}
          >Submit Trip</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 30
  }
})