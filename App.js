import { ScrollView } from "react-native";
import InvoiceDetails from "./components/InvoiceDetails";
import { Header } from "react-native-elements";
import UploadRXSection from "./components/UploadRXSection";
import { Shadow } from "react-native-shadow-2";
import BillingDetails from "./components/BillingDetails";
import ProductsDetails from "./components/ProductsDetails";
import FinalPricing from "./components/FinalPricing";

export default function App() {
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
        <ProductsDetails />
        <FinalPricing/>
      </ScrollView>
    </>
  );
}
