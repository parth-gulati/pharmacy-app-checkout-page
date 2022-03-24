import { View } from "react-native";
import { Icon, Card, Text, Button } from "react-native-elements";

export default function SingleProduct({name,orangeTabDets,id,expiry,mrp,disc,gst,gstpercent,discpercent,qtty,qttyDetails}) {
  return (
    <Card
      containerStyle={{ marginLeft: 0, resizeMode: "cover", width: "100%", marginVertical: 0 }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          titleStyle={{ color: "#c41e60", fontSize: 18 }}
          type="clear"
          iconPosition="right"
          title={`${name}  `}
          icon={<Icon name="angle-right" type="font-awesome" color="#c41e60" />}
        ></Button>
        <Button
          containerStyle={{ paddingTop: 5 }}
          type="clear"
          iconPosition="right"
          icon={
            <Icon
              name="trash"
              type="font-awesome-5"
              color="rgba(0,0,0,0.4)"
              size={16}
            />
          }
        ></Button>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "orange",
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 10,
            marginTop: 5,
          }}
        >
          <Text style={{ color: "white" }}>{orangeTabDets}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 12,
            paddingVertical: 2,
            marginTop: 5,
          }}
        >
          <Icon
            name="box-open"
            type="font-awesome-5"
            color="rgba(0,0,0,0.4)"
            size={16}
            style={{ paddingTop: 2, marginRight: 5 }}
          />
          <Text style={{ color: "rgba(0,0,0,0.4)" }}>QA22</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>{id}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>Exp: {expiry}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>Mrp: {mrp}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 25 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,1)'}}>{qtty}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,1)'}}>{disc}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,1)'}}>{gst}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>{qttyDetails}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>{discpercent}% Disc</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'rgba(0,0,0,0.4)'}}>{gstpercent}% gst</Text>
        </View>
      </View>

    </Card>
  );
}
