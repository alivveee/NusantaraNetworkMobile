import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserAvatar from "react-native-user-avatar";

const User = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <UserAvatar
          size={150}
          name="Jane Doe"
          src="https://dummyimage.com/100x100/000/fff"
        />
        <Text style={{ fontSize: 24, marginTop: 20 }}>Karyawan 1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default User;
