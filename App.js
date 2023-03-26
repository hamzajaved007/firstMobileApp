import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = (enteredGoaltext) => {
    console.log(enteredGoaltext)
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoaltext, key: Math.random().toString() },])
    console.log("Course Goals: ", courseGoals)
  }

  const deleteGoalHandler = (key) => {
    setCourseGoals((currentCourseGoals) => {
      currentCourseGoals.filter((goal) => {
        goal.key !== key
      })
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text>Here are my goals!!!</Text>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} key={itemData.item.key} onDeleteItem={deleteGoalHandler} />
          )
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  },
});
