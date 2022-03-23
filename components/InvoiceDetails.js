import { Text, View } from "react-native";
import { CheckBox, Input } from "react-native-elements";
import CustomCard from "./CustomCard";
import { useState } from "react";
import { Linking } from "react-native";
import DatePicker from "./DatePicker";

export default function InvoiceDetails() {
  const [checked, setChecked] = useState("Invoice");
  return (
    <CustomCard>
      <View style={{ flexDirection: "row" }}>
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
            Linking.openURL("http://google.com")
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
      <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 10}}>
          <View style={{flex: 1}}>
          <DatePicker/>
          </View>
          <View style={{flex: 1}}>
          <Input label={'Doctor\'s name'} labelStyle={{color: 'black', fontWeight: 'normal', fontSize: 18}} />
          </View>
      </View>
    </CustomCard>
  );
}
