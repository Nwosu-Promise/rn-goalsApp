import React, {useState} from 'react';
import {View, StyleSheet, Button, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/Goalinput';

const App = props => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode]  = useState(false)
  const goalHandler = () => {
    console.log(enteredGoal);
  };

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {id: Math.random().toString(), value: goalTitle},
    ]);
    setIsAddMode(false)
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () =>{
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },

  // textContainer: {
  //   // flex:1,
  //   // marginTop: 100
  // },
  // text: {
  //   // marginTop: 200,
  // },
});

export default App;
