import React from 'react';
import { StyleSheet, FlatList, View, Text, Button } from 'react-native';
import { TextInput } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();




const TodoApp = ({ navigation}) => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] =  useState ("");
    const [taskDetails, setTaskDetails] = useState ("");

    const addTesk = () => {   
        setTasks([...tasks, { taskName, taskDetails}]);
        setTaskName("");
        setTaskDetails("")
    };

  return (
    <View style={styles.todo}>

      <Text style={styles.title} >TODO APP </Text>
    <View> 
      <Text>Task Name</Text>
      <TextInput type = "text" 
      placeholder = "Enter Your Task Name"
      onChangeText={(text)  => setTaskName(text)}
      />

      <Text>Text Detail</Text>
      <TextInput type = "text"
       placeholder='Enter Your Task'
       onChangeText={(text) => setTaskDetails(text)}
       />


      <Button title="Add Task"
      onPress={() => addTesk({ taskName, taskDetails})}
      />
      <AntDesign name="delete" size={24} color="black" />
         
      <FlatList
      data= {tasks}
      renderItem={({ item}) => (
        <Text onPress={() => navigation.navigate("Detail",{task: item})}>
            {item.taskName}
            </Text>
      )}
      />

    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    textAlign: "center",
    marginLeft:150,
    marginTop:150
  },
  title:{
    marginBottom:70,
    fontWeight: "bold",
  }
});


export default TodoApp;
