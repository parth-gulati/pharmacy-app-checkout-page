import { View } from "react-native";
import CustomCard from "../CustomCard";
import { Button, Icon, Text, Card } from "react-native-elements";
import SingleProduct from "./SingleProduct";
import { color } from "react-native-elements/dist/helpers";

const medicineDetails = [
  {
    name: "Thyronorm 12.5mcg Tab",
    orangeTabDets: "Rx - H1",
    id: "HH123456789",
    expiry: "12/22",
    mrp: "₹265.54",
    disc: "₹265.54",
    gst: "₹265.54",
    gstpercent: 12,
    discpercent: 20,
    qtty: "3 packs | 4 units",
    qttyDetails: "Pack 1x10",
  },
  {
    name: "Mycorandil 25mg Cream",
    orangeTabDets: "Rx - G",
    id: "HH123456789",
    expiry: "12/22",
    mrp: "₹265.54",
    disc: "₹265.54",
    gst: "₹265.54",
    gstpercent: 12,
    discpercent: 20,
    qtty: "3 packs | 4 units",
    qttyDetails: "Pack 1x10",
  },
];

export default function ProductsDetails() {
  return (
    <CustomCard>
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
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
          <View style={{ flex: 0.95 }}>
            <Button
              buttonStyle={{ borderColor: "rgba(0,0,0,0.01)" }}
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
          <View style={{ flex: 0.1 }}></View>
          <View style={{ flex: 0.95 }}>
            <Button
              buttonStyle={{ borderColor: "rgba(0,0,0,0.01)" }}
              type="outline"
              titleStyle={{ color: "#c41e60" }}
              iconPosition="right"
              raised
              title={"Scan Barcode    "}
              icon={
                <Icon name="angle-right" type="font-awesome" color="#c41e60" />
              }
              containerStyle={{ flex: 1 }}
              iconContainerStyle={{ paddingLeft: 20 }}
            />
          </View>
        </View>
      </View>
      {medicineDetails.map((ele) => (
        <SingleProduct key={ele.name} {...ele} />
      ))}
    </CustomCard>
  );
}
