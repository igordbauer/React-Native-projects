import { StyleSheet, View, Button, TextInput, Modal } from "react-native";
import { useState } from "react";

const GoalInput = ({ goalListHandler, open, setCloseModal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    goalListHandler(enteredGoalText);
    setEnteredGoalText("");
    setCloseModal();
  };
  return (
    <Modal visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={setCloseModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  textInput: {
    borderWidth: 1,
    justifyContent: "space-between",
    borderColor: "#cccccc",
    width: "90%",
    padding: 8,
    marginVertical: 10,
  },
});
export default GoalInput;
