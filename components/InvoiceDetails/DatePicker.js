import { View } from "react-native";
import { Input } from "react-native-elements";

export default function DatePicker() {
  return (
    <Input
      errorMessage="*Required"
      inputContainerStyle={{ borderBottomWidth: 0, marginBottom: 0 }}
      errorStyle={{ color: "rgba(0,0,0,0.4)" }}
      label={"Invoice Date*"}
      rightIcon={{ type: "ant-design", name: "calendar", color: "#c41e60" }}
      rightIconContainerStyle={{
        borderWidth: 1,
        borderRadius: 4,
        borderLeftWidth: 0,
        paddingLeft: 0,
        borderColor: "rgba(0,0,0,0.2)",
        marginLeft: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        paddingVertical: 4,
      }}
      inputStyle={{
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 4,
        paddingVertical: 4,
        paddingLeft: 10,
        borderRightWidth: 0,
        paddingRight: 0,
        marginRight: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }}
      placeholder="dd-mm-yyyy"
      labelStyle={{ color: "black", fontWeight: "normal", fontSize: 18 }}
      onTouchEnd={(e) => {
        e.preventDefault();
        console.log("BAHAHA");
      }}
    />
  );
}
