import { RelativePathString, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const runningTasks = [
  {
    id: "1",
    customer: "The Com",
    type: "pengiriman",
    date: "Senin 30 Oktober 2024",
  },
  {
    id: "2",
    customer: "Rief Bajigur.Net",
    type: "kanvassing",
    date: "Senin 30 Oktober 2024",
  },
  {
    id: "3",
    customer: "Toko Sinar Elektronik",
    type: "pengiriman",
    date: "Senin 30 Oktober 2024",
  },
  {
    id: "4",
    customer: "Laporan Selesai",
    type: "laporan selesai",
    date: "Senin 30 Oktober 2024",
  },
];

const completedTasks = [
  {
    id: "5",
    customer: "Toko Abdi Jaya",
    type: "kanvassing",
    date: "Senin 30 Oktober 2024",
  },
  {
    id: "6",
    customer: "Toko Perangkat Jaringan",
    type: "pengiriman",
    date: "Senin 30 Oktober 2024",
  },
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("running");
  const router = useRouter();

  function handlePress(type: string) {
    const typeMapping: Record<string, string> = {
      pengiriman: "/task-report",
      kanvassing: "/task-report",
      laporan: "/report",
    };

    router.push({
      pathname: typeMapping[type] as RelativePathString,
      params: { type: type },
    });
  }

  // Render item untuk FlatList
  const renderItem = ({
    item,
  }: {
    item: { id: string; customer: string; type: string; date: string };
  }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => handlePress(item.type)}
    >
      <Text style={styles.taskTitle}>{item.customer}</Text>
      <Text style={styles.taskDescription}>
        {(item.type == "pengiriman"
          ? "Pengiriman"
          : item.type == "kanvassing"
          ? "Kanvassing"
          : "Laporan Selesai") +
          " | " +
          item.date}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "running" && styles.activeTab]}
          onPress={() => setActiveTab("running")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "running" && styles.activeTabText,
            ]}
          >
            Berjalan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "completed" && styles.activeTab]}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed" && styles.activeTabText,
            ]}
          >
            Selesai
          </Text>
        </TouchableOpacity>
      </View>

      {/* Task List Content */}
      <View style={styles.content}>
        {activeTab === "running" ? (
          <FlatList
            data={runningTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Tidak ada tugas berjalan</Text>
            }
          />
        ) : (
          <FlatList
            data={completedTasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={
              <Text style={styles.emptyText}>Tidak ada tugas selesai</Text>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#ffffff",
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#007aff",
  },
  tabText: {
    fontSize: 16,
    color: "#7f8c8d",
  },
  activeTabText: {
    color: "#007aff",
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  listContainer: {
    padding: 15,
  },
  taskItem: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  taskDescription: {
    fontSize: 14,
    color: "#7f8c8d",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#7f8c8d",
  },
});
