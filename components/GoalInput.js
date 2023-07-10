import { StyleSheet, View, Button, TextInput } from "react-native";
import { useState } from "react";

const GoalInput = ({ goalListHandler }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    goalListHandler(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="your goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="add goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    justifyContent: "space-between",
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
