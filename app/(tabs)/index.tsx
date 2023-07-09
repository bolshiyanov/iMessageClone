import { StyleSheet,Pressable } from "react-native";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        More information about this app may be added here
      </Text>
      <Link href="/chat" asChild>
      <Pressable>
        <Text style={styles.link}>Go to support</Text>
      </Pressable>
    </Link>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  link: {
    fontSize: 18,
    textAlign: "center",
    color: '#2f95dc'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
