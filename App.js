import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.grid}>
      <Image
        source={require("./assets/foto-perfil.jpeg")}
        style={styles.foteli}
      />
      <Text>Hola Coder!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  foteli: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
  },
});
