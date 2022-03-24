import { Button, Icon, Text } from "react-native-elements";
import CustomCard from "../CustomCard";
import { View } from "react-native";

export default function UploadRXSection() {
  return (
    <CustomCard>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 16, flex: 1, paddingTop: 10 }}>
          Invoice has <Text style={{ color: "#ff8830" }}>Prescription</Text>{" "}
          Drugs
        </Text>
        <Button
          titleStyle={{ color: "#c41e60" }}
          type="clear"
          onPress={()=>{console.log('Attach pressed')}}
          iconPosition="right"
          style={{ flex: 1, padding: 0, margin: 0 }}
          title="Upload RX&nbsp;&nbsp;"
          icon={<Icon name="angle-right" type="font-awesome" color="#c41e60" />}
        ></Button>
      </View>
    </CustomCard>
  );
}
