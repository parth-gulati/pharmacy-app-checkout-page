import { Text, View } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import CustomCard from "../CustomCard";
import { useState } from "react";
import { Linking } from "react-native";
import DatePicker from "./DatePicker";

export default function InvoiceDetails() {
  const [checked, setChecked] = useState("Invoice");
  return (
    <CustomCard>
      <View style={{ flexDirection: "row"}}>
        <CheckBox
          title={<Text style={{ fontSize: 16 }}>&nbsp;Invoice</Text>}
          checkedIcon="check-circle"
          style={{ color: "red" }}
          containerStyle={{ backgroundColor: "white", borderColor: "white" }}
          uncheckedIcon="circle-o"
          checked={checked == "Invoice"}
          onPress={() => {
            setChecked("Invoice");
          }}
          checkedColor="#c41e60"
        />
        <CheckBox
          title={<Text style={{ fontSize: 16 }}>&nbsp;Delivery Challan</Text>}
          checkedIcon="check-circle"
          style={{ color: "red" }}
          containerStyle={{ backgroundColor: "white", borderColor: "white" }}
          uncheckedIcon="circle-o"
          checked={checked == "DC"}
          onPress={() => {
            setChecked("DC");
          }}
          checkedColor="#c41e60"
        />
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
        <Text
          style={{ color: "#c41e60" }}
          onPress={() => {
            Linking.openURL("https://www.youtube.com/watch?v=xvFZjo5PgG0")
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          what's the difference?
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", marginTop: 20, marginBottom: 0, paddingHorizontal: 10 }}
      >
        <View style={{ flex: 1 }}>
          <DatePicker />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            inputContainerStyle={{ borderBottomWidth: 0, marginBottom: 0 }}
            inputStyle={{
              borderColor: "rgba(0,0,0,0.2)",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
              paddingVertical: 4,
            }}
            label={"Doctor's name"}
            placeholder="Dr."
            rightIcon={"white"}
            labelStyle={{ color: "black", fontWeight: "normal", fontSize: 18 }}
          />
        </View>
      </View>
    </CustomCard>
  );
}
