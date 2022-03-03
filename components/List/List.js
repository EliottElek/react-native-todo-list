import React from "react";
import { Context } from "../Context/Context";
import { useContext } from "react";
import ListItem from "../ListItem/ListItem";
import { ScrollView } from "react-native";
const List = () => {
  const { list } = useContext(Context);
  const styles = {
    listcontainer: {
      height : "auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto",
    },
  };
  return (
    <ScrollView style={styles.listcontainer}>
      {list.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </ScrollView>
  );
};

export default List;
