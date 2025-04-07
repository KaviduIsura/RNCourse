import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({pressed})=>pressed && styles.pressedItem }
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem:{
    backgroundColor: "#210644",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
