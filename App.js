import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>

      {/*Today's Tasks*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/*Individual Tasks */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                  <Task key={index} text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/*Writing Tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}>
          <TextInput style={styles.writeTaskInput} placeholder={'Write a new task'} value={task} onChangeText={text => setTask(text)}/>

          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addBtn}>
              <Text style={styles.addBtnText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  writeTaskInput: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 250,
    backgroundColor: 'white',
    borderColor: '#C8C8C8',
    borderRadius: 60,
    borderWidth: 1,
  },
  addBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    textAlign: 'center',
    borderColor: '#C8C8C8',
    borderWidth: 1,
  },
  addBtnText: {
    fontSize: 36,
  }, 
});
