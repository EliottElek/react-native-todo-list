import React from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Context } from "../Context/Context";
import { useContext } from "react";
//import '../ListItem/ListItem.css'
import uuid from "react-native-uuid";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: " center",
    justifyContent: "space-around",
  },
  input: {
    height: 60,
    width: "70%",
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    paddingLeft: 12,
    fontSize: 18,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    margin: 10,
    border: "none",
    outline: "none",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
  },
  text: {
    fontSize: 20,
  },
};
const Actions = () => {
  const [newTask, setNewTask] = React.useState("");
  const { setList, list } = useContext(Context);

  const handleAddNewTask = () => {
    const task = { id: uuid.v4(), title: newTask };
    setList([...list, task]);
    setNewTask("");
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : ""}
      keyboardVerticalOffset={65} //this value is depends upon your view/component height
    >
      <TextInput
        style={styles.input}
        type="text"
        value={newTask}
        placeholder="Entrez une nouvelle tâche..."
        onChangeText={setNewTask}
      />
      <TouchableOpacity
        onPress={handleAddNewTask}
        style={styles.button}
        disabled={newTask === "" ? true : false}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Actions;
