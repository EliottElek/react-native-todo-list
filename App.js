import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import Container from "./components/Container/Container";
import { ContextProvider } from "./components/Context/Context";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9eaed",
    alignItems: "center",
    justifyContent: "center",
  },
});
const Drawer = createDrawerNavigator();

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
};
export default function App() {
  return (
    <PaperProvider>
      <ContextProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
              activeTintColor: "red",
              itemStyle: { marginVertical: 5 },
            }}
          >
            <Drawer.Screen name="Mes tâches" component={Home} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ContextProvider>
    </PaperProvider>
  );
}
