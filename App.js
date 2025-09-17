import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, Image, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Data = [
  {
    id: 1,
    task: 'Complete React Native tutorial',
    isDone: false
  },
  {
    id: 2,
    task: 'Buy groceries for the week',
    isDone: true
  },
  {
    id: 3,
    task: 'Call mom for her birthday',
    isDone: false
  },
  {
    id: 4,
    task: 'Finish work presentation',
    isDone: false
  },
  {
    id: 5,
    task: 'Go to the gym',
    isDone: true
  }
];


export default function App() {

  const [initial, setInitial] = useState('')
  const [newData, setNewData] = useState(Data)

  const handleDelete = (id) => {
    setNewData(newData.filter((item) => item.id !== id))
  }
  const handleAddTask = async () => {

    if (initial === '') return

    try {
      const newTask = {
        id: Date.now(),
        task: initial,
        isDone: false
      }
      setNewData([...newData, newTask])
      await AsyncStorage.setItem('newTodo', JSON.stringify(?))
      setInitial('')
      Keyboard.dismiss()

    }

}
  return (
    <View style={styles.container}>
      <View style={styles.headerCon}>
        <TouchableOpacity>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1757517371699-3a2ce58688db?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchCon}>
        <Ionicons name="search" size={32} color="gray" style={styles.searchIcon} />
        <TextInput
          placeholder='Search your task'
          style={styles.input}
        />
      </View>
      <FlatList
        data={[...newData].reverse()}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) =>
          <View >
            <View style={styles.taskCon}>
              <Checkbox
                value={item.isDone}
                color={item.isDone ? 'purple' : undefined}
              />
              <View style={styles.textCon}>
                <Text style={[styles.taskText, item.isDone && styles.completedTask]}>{item.task}</Text>
                <Ionicons name='trash' size={24} color={'red'} onPress={() => handleDelete(item.id)} />
              </View>
            </View>
          </View>
        }
      />
      <KeyboardAvoidingView>
        <View style={styles.addContainer}>
          <TextInput
            placeholder='enter your task'
            value={initial}
            onChangeText={setInitial}
            style={styles.addInput}
            autoCorrect={false}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
            <Ionicons name='add' size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: '10%',
    paddingHorizontal: 10
  },
  headerCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,

  },
  searchCon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8
  },
  completedTask: {
    textDecorationLine: 'line-through'
  },
  taskCon: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    alignItems: 'center'
  },
  taskText: {
    fontSize: 18
  },
  textCon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addInput: {
    flex: 1
  }
});
