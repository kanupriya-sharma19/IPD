import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Define the props type using TypeScript

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
  alignItems:'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
});
