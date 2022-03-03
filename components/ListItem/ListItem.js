import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Context } from "../Context/Context";
import { useContext } from "react";
import { Swipeable } from "react-native-gesture-handler";
const styles = {
  listitem: {
    width: "auto",
    margin: 20,
    marginTop: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: "3%",
    border: "1px solid #F7F7F7",
    borderRadius: 10,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "#1a1a1a",
    height: 60,
  },
  checkbox: {
    height: 25,
    width: 25,
    borderRadius: "50%!important",
  },
  viewDelete: {
    margin: 20,
    marginTop: 0,
    backgroundColor: "#EC4939",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: "50%",
    border: "none",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "#1a1a1a",
    width: 60,
    height: 60,
  },
  viewDeleteButton: {
    backgroundColor: "transparent",
  },
  delete: {
    color: "#fefefe",
  },
};
const ListItem = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  const { setList, list } = useContext(Context);

  const removeTask = () => {
    const li = list;
    const newList = li.filter((i) => i.id !== item.id);
    setList(newList);
  };
  const RightActions = () => {
    return (
      <TouchableOpacity style={styles.viewDelete} onPress={removeTask}>
        <Text style={styles.delete} icon="camera">
          <Ionicons name="trash" size={20} color="#fefefe" />
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderRightActions={RightActions}>
      <TouchableOpacity
        style={{
          ...styles.listitem,
          backgroundColor: checked ? "#E4FFCE" : "#fefefe",
        }}
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <Text>{item.title}</Text>
        {checked ? (
          <Ionicons name="checkmark" size={20} color="green" />
        ) : (
          <Ionicons name="hourglass" size={20} color="gray" />
        )}
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ListItem;
