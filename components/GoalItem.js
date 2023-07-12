import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete, id }) => {
  //   const deleteHandler = () => {};
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#cccccc" }}
        onPress={onDelete.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderColor: "#E6523E",
    backgroundColor: "#FA7853",
    borderWidth: 2,
    marginVertical: 6,
    borderRadius: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
    fontWeight: "900",
  },
});

export default GoalItem;
