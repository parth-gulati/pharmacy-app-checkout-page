import { ScrollView, View } from "react-native";
import InvoiceDetails from "./components/InvoiceDetails";
import { Header, Button } from "react-native-elements";
import UploadRXSection from "./components/UploadRXSection";
import { Shadow } from "react-native-shadow-2";
import BillingDetails from "./components/BillingDetails";
import ProductsDetails from "./components/ProductsDetails";
import FinalPricing from "./components/FinalPricing";
import { useEffect, useState } from "react";
import { StyleSheet, BackHandler } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    if (clicked === true) {
      if (hasPermission) {
        setShowScanner(true);
      }
      setClicked(false);
    }
  }, [clicked]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (showScanner) {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <>
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
            <Button
              buttonStyle={{ marginTop: 30, backgroundColor: "red" }}
              title={"Go Back"}
              onPress={() => {
                setScanned(false);
                setShowScanner(false);
                setScanned(false);
              }}
            />
          </>
        )}
      </View>
    );
  }
  return (
    <>
      {/* Header Component */}
      <Shadow distance={5} startColor={"#00000010"} radius={8}>
        <Header
          containerStyle={{ height: 80, marginTop: 20 }}
          backgroundColor="white"
          placement="left"
          leftComponent={{ icon: "west", color: "#c41e60", style: { flex: 1 } }}
          centerComponent={{
            text: "Add Sale",
            style: { flex: 1, color: "black", fontSize: 20 },
          }}
          rightComponent={{
            text: "Settings",
            style: { flex: 1, color: "#c41e60", fontSize: 20 },
          }}
        />
      </Shadow>

      <ScrollView showsVerticalScrollIndicator={true}>
        {/* Body */}
        <InvoiceDetails />
        <BillingDetails />
        <UploadRXSection />
        <ProductsDetails
          setClicked={setClicked}
          setHasPermission={setHasPermission}
          hasPermission={hasPermission}
        />
        <FinalPricing />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
