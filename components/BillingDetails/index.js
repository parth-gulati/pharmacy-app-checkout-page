import { Text } from "react-native-elements";
import { View } from "react-native";
import CustomCard from "../CustomCard";

export default function BillingDetails() {
  return (
    <CustomCard marginBottom={0}>
      <View style={{ paddingHorizontal: 20, marginBottom: 0, paddingBottom: 0 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Billing To*</Text>
          <Text style={{ fontSize: 16, color: "#c41e60" }}>Change</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Kushal Kharbanda
          </Text>
          <Text style={{ fontSize: 24, color: "red" }}>₹ 26,525</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 0,
          }}
        >
          <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.4)" }}>
            Kushal Kharbanda
          </Text>
          <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.4)" }}>
            You'll receive
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            height: 80,
            width: "100%",
            flexDirection: "row",
            marginTop: 15,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderRightWidth: 0,
              flex: 1,
              borderColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgba(0,0,0,0.4)", fontSize: 14 }}>
              Importance
            </Text>
            <Text style={{ color: "black", fontSize: 24, fontWeight: "600" }}>
              10&nbsp;
              <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
                /&nbsp;10
              </Text>
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRightWidth: 0,
              flex: 1,
              borderColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgba(0,0,0,0.4)", fontSize: 14 }}>
              Avg Order Value
            </Text>
            <Text style={{ color: "black", fontSize: 24, fontWeight: "600" }}>
              <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
                ₹&nbsp;
              </Text>
              265
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRightWidth: 0,
              flex: 1,
              borderColor: "rgba(0,0,0,0.4)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "rgba(0,0,0,0.4)", fontSize: 14 }}>
              Avg Revisit in
            </Text>
            <Text style={{ color: "black", fontSize: 24, fontWeight: "600" }}>
              26&nbsp;
              <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
                days
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </CustomCard>
  );
}
