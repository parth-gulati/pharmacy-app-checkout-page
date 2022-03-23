import { StyleSheet, ScrollView, View } from "react-native";
import InvoiceDetails from "./components/InvoiceDetails";
import { Header } from "react-native-elements";
import CustomCard from "./components/CustomCard";
import UploadRXSection from "./components/UploadRXSection";
import { Shadow } from "react-native-shadow-2";
import { useState } from "react";
import BillingDetails from "./components/BillingDetails";

export default function App() {
  const [invoiceType, setInvoiceType] = useState("Invoice");
  return (
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      {/* Header Component */}
      <Shadow distance={5} startColor={"#00000010"} radius={8}>
        <Header
          containerStyle={{ height: 80 }}
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

      {/* Body */}
      <InvoiceDetails />
      <BillingDetails />
      <UploadRXSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
