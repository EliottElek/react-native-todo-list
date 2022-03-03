import React from "react";
import { Text, View } from "react-native";
import List from "../List/List";
import Actions from "../Actions/Actions";
import getStringDay from "../../fonctions/date";
const styles = {
  container: {
    textAlign: "left",
    display: "grid",
    gridTemplateRows: "15% 70% 15%",
    height: "100%",
    width: "100%",
  },
  date: {
    fontSize: 13,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 40,
    fontWeight: "300",
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 40,
  },
};

const Container = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{getStringDay(new Date())}</Text>
      <Text style={styles.title}>Les tâches d'aujourd'hui</Text>
      <List />
      <Actions />
    </View>
  );
};

export default Container;
