import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import moment from "moment";
import DateRangePicker from "rn-select-date-range";
import DateTimePicker from '@react-native-community/datetimepicker';
import { RegisterTripContext } from '@/context/RegisterTripContext';
import { Ionicons } from '@expo/vector-icons';

export default function selectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const {tripData, setTripData} = useContext(RegisterTripContext);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const [range, setRange] = useState({});
  const [date, setDate] = useState(new Date(moment()));

  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };

  const updateTripInfo = () => {
    const startDate = new Date(range.firstDate);
    const endDate = new Date(range.secondDate);

    if (date.getUTCDay() <= endDate.getUTCDay()) { 
      Alert.alert('Your delivery date must be after you receive the package.')
      return;
    }

    setTripData({
        ...tripData,
        dates: {
          range: {
            startDate: new Date(range.firstDate),
            endDate: new Date(range.secondDate)
          },
          deliveryDate: date
        }
    });

    router.push('register-trip/address-information')
  };

  useEffect(() => {
    console.log(tripData);
    console.log(typeof(tripData?.dates?.deliveryDate), typeof(tripData?.dates?.range?.startDate));
  }, [tripData])

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
        fontSize: 30
      }}>Between which days are you available to receive the package?</Text>

      <View style={{
        marginTop: 10,
        height: '54%'
      }}>
        <DateRangePicker
          onSelectDateRange={(range) => {
            setRange(range);
          }}
          blockSingleDateSelection={true}
          responseFormat='YYYY-MM-DD'
          minDate={moment()}
          selectedDateContainerStyle={styles.selectedDateContainerStyle}
          selectedDateStyle={styles.selectedDateStyle}
          confirmBtnTitle=''
        />
      </View>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30
      }}>When will you deliver the package at the destination?</Text>

      <View style={{
        marginTop: 15,
        alignItems: 'center'
      }}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          onChange={onChange}
          minimumDate={new Date(moment())}
        />
      </View>

      <TouchableOpacity style={styles.button1}>
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17
          }}
          onPress={updateTripInfo}
        >Continue</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
  },
  selectedDateContainerStyle: {
    height: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  button1: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 20
  }
});