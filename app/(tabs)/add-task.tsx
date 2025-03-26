import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { RelativePathString, useRouter } from "expo-router";

const typeOptions = [
  {
    label: "Pengiriman",
    value: "delivery",
  },
  {
    label: "Kanvassing",
    value: "canvassing",
  },
];

export default function AddTask() {
  const router = useRouter();

  // Render item untuk FlatList
  const renderItem = ({ item }: { item: { label: string; value: string } }) => (
    <TouchableOpacity
      style={styles.typeItem}
      onPress={() => {
        router.push(`/${item.value}` as RelativePathString);
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={typeOptions}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  typeItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "600",
  },
  listContainer: {
    padding: 15,
  },
});
