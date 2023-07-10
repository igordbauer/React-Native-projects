import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDelete, id }) => {
  //   const deleteHandler = () => {};
  return (
    <Pressable onPress={onDelete.bind(this, itemData.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    borderColor: "#E6523E",
    backgroundColor: "#FA7853",
    borderWidth: 2,
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  goalText: {
    color: "white",
    fontWeight: "900",
  },
});

export default GoalItem;
