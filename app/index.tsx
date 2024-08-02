import { Text, View } from "react-native";
import Login from '@/components/Login';
import  { auth } from '@/configs/FirebaseConfig'
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        setUser(auth.currentUser);
      } 
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ?
        <Redirect href={'/newoperation'} /> : 
        <Login/>
      }

      <Login/>
    </View>
  );
}
