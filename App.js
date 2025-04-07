import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGoalHandler(enterdText) {
    setCourseGoals((currentGoalValues) => [
      ...currentGoalValues,
      { text: enterdText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setCourseGoals((currentGoalValues) => {
      return currentGoalValues.filter((goal) => goal.id != id);
    });
  }
  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.button}>
          <Button
            title="Add New Goal"
            color="#a065ec"
            onPress={startAddGoalHandler}
          />
        </View>

        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancle={endAddGoalHandler}
        />
        <View style={styles.goalCOntainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  button: {
    marginTop: 24,
    marginBottom:16
  },
  goalCOntainer: {
    flex: 5,
  },
});
