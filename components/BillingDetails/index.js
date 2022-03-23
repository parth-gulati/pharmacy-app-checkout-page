import { Text } from "react-native-elements";
import { View } from "react-native";
import CustomCard from "../CustomCard";

export default function BillingDetails() {
  return (
    <CustomCard>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Billing To*</Text>
          <Text style={{ fontSize: 16, color: "#c41e60" }}>Change</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold'}}>Kushal Kharbanda</Text>
          <Text style={{ fontSize: 24, color: "red" }}>₹ 26,525</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 0}}>
          <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.2)'}}>Kushal Kharbanda</Text>
          <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.2)" }}>You'll receive</Text>
        </View>
      </View>
    </CustomCard>
  );
}
