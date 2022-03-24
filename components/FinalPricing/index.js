import { useState } from "react";
import { View } from "react-native";
import { Input, Text } from "react-native-elements";
import CustomCard from "../CustomCard";

export default function FinalPricing() {
  const [price, setPrice] = useState("10.00%");
  const [discount, setDiscount] = useState("₹ 1938.00");

  return (
    <CustomCard>
      <View style={{ marginLeft: 20, marginBottom: 20}}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Subtotal</Text>
          <Text style={{ opacity: 0.4, fontSize: 16, marginRight: 10}}>₹1938.00</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            maxWidth: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, paddingTop: 15 }}>Bill Discount</Text>
          </View>
          <View style={{ flexDirection: "row", flex: 1.7, marginRight: 0}}>
            <View style={{ flex: 1 }}>
              <Input
                inputStyle={{ textAlign: "right", fontSize: 16 }}
                value={price}
                style={{ paddingBottom: 0 }}
                onChange={(text) => setPrice(text)}
              />
            </View>
            <View style={{ flex: 0.2 }}>
              <Text style={{ paddingTop: 15, fontWeight: "bold", textAlign: 'center', color: '#c41e60' }}>OR</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Input
                inputStyle={{ textAlign: "right", fontSize: 16 }}
                value={discount}
                style={{ paddingBottom: 0, textAlign: "right", marginRight: 0}}
                onChange={(ele) => setDiscount(ele)}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 0,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>Central GST + State GST</Text>
          <Text style={{ fontSize: 16, opacity: 0.4,  marginRight: 10 }}>₹ 1938.00</Text>
        </View>
      </View>
    </CustomCard>
  );
}
