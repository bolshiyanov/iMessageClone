import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useAuth } from "@/src/context/auth";

export default function ModalScreen() {
  const router = useRouter();
  const { signOut } = useAuth();

  const hasSignOut = () => {
    signOut();
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Any settings of user may be added here</Text>
      <Button onPress={hasSignOut} title="SignOut" />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
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
    fontSize: 14,
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
