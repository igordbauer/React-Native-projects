import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);

  const goalListHandler = (enteredGoalText) => {
    if (enteredGoalText.length !== 0) {
      setListOfGoals((prev) => {
        return [
          ...prev,
          { id: Math.random().toString(), text: enteredGoalText },
        ];
      });
    }
  };

  const deleteGoalHandler = (id) => {
    setListOfGoals((prev) => {
      return prev.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput {...{ goalListHandler }} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem itemData={itemData} onDelete={deleteGoalHandler} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
