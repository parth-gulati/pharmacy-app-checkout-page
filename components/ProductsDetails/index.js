import { View } from "react-native";
import CustomCard from "../CustomCard";
import { Button, Icon, Text } from "react-native-elements";

export default function ProductsDetails() {
  return (
    <CustomCard>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }}>Products*</Text>
          <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.4)" }}>
            Products: 2 | Qty: 67
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 10,
          }}
        >
          <View style={{ flex: 0.95}}>
            <Button
              type="outline"
              titleStyle={{ color: "#c41e60" }}
              iconPosition="right"
              raised
              title={"Search to Add    "}
              icon={
                <Icon name="angle-right" type="font-awesome" color="#c41e60" />
              }
              containerStyle={{ flex: 1 }}
              iconContainerStyle={{ paddingLeft: 20 }}
            />
          </View>
          <View style={{flex: 0.1}}></View>
          <View style={{ flex: 0.95 }}>
            <Button
              type="outline"
              titleStyle={{ color: "#c41e60" }}
              iconPosition="right"
              raised
              title={"Search to Add    "}
              icon={
                <Icon name="angle-right" type="font-awesome" color="#c41e60" />
              }
              containerStyle={{ flex: 1 }}
              iconContainerStyle={{ paddingLeft: 20 }}
            />
          </View>
        </View>
      </View>
    </CustomCard>
  );
}
