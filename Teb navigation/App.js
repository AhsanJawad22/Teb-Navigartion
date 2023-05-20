import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native/Libraries/NewAppScreen";
import Detail from  "./assets/componet/screens/Detail";
import TodoApp from "./assets/componet/screens/Todo";
import { Button, Image } from "react-native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();



function LogoTitle() {
  return ( 
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/icon.png')}
    />
  );
}

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

export  default function App() {
  return (
    <NavigationContainer>

<Tab.Navigator>
      <Tab.Screen name="Home" component={TodoApp} />
      <Tab.Screen name="Detail" component={Detail} />
    </Tab.Navigator>

    <AntDesign name="delete" size={24} color="black" />

{/* <Stack.Navigator>
<Stack.Screen name="TodoApp" component={TodoApp} 
options={{title: "P2P",
headerStyle: {
  backgroundColor: '#f4511e',
},
// headerTitleStyle:{
//   fontSize: 100,
//   fontWeight:50,
// },
headerRight:()=>(
  <Button title="Lod out"/>
)
}}/>
<Stack.Screen name="Detail" component={Detail} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
/>


</Stack.Navigator> */}
    </NavigationContainer>
  )
}