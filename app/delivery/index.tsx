import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import TextField from "@/components/TextField";
import PickerField from "@/components/PickerField";

export default function Index() {
  const router = useRouter();
  const [status, setStatus] = useState("Berhasil");

  const statusOptions = [
    { label: "Berhasil", value: "berhasil" },
    { label: "Gagal", value: "gagal" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.formContainer}>
          {/* Recipient Name */}
          <Text style={styles.customerName}>Cahaya Baru</Text>

          {/* Phone Number */}
          <TextField
            label="Nomor Telepon"
            value="081234567890"
            editable={false}
          />

          {/* Address */}
          <TextField
            label="Alamat"
            value="Jl. K.H. Hasyim Ashari No.15, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119"
            multiline
            editable={false}
          />

          {/* Status */}
          <PickerField
            label="Status"
            selectedValue="berhasil"
            options={statusOptions}
          />

          {/* Notes */}
          <TextField label="Keterangan" />
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => {
            router.push("/delivery/submit-report");
          }}
        >
          <Text style={styles.continueButtonText}>Lanjut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 16,
  },
  footer: {
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  continueButton: {
    backgroundColor: "#4285F4",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
