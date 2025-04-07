import { View, TextInput, Button, StyleSheet, Modal,Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enterdText, setEnterdText] = useState("");
  function goalInputHandler(enterdText) {
    setEnterdText(enterdText);
  }

  function addGoalHandler() {
    props.onAddGoal(enterdText);
    setEnterdText("");

  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/gola.png')}/>
        <TextInput
          style={styles.textContainer}
          onChangeText={goalInputHandler}
          placeholder="Enter Your Goal!"
          value={enterdText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancle} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#a065ec' />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:16,
    backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  textContainer: {
    width: "100%",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:"#e4d0ff",
    color:'#120438',
    borderRadius:6
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
