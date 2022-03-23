import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function CustomCard(props) {
  return (
    <Shadow
      distance={5}
      startColor={"#00000010"}
      containerViewStyle={{ marginTop: props.marginTop? props.marginTop : 20, width: "100%" }}
      radius={8}
    >
      <View style={[styles.card, styles.shadowProp]}>
          {props.children}
      </View>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    minWidth: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
