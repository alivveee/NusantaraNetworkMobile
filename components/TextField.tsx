import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
} from "react-native";
import React from "react";

interface TextFieldProps {
  label: string;
  value?: string;
  editable?: boolean;
  multiline?: boolean;
  style?: StyleProp<TextStyle>;
}

export default function TextField({
  label,
  value,
  editable = true,
  multiline = false,
  style,
}: TextFieldProps) {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldLabel}>{label}</Text>
      <TextInput
        style={[styles.fieldValue, style]}
        {...(value !== undefined && { value })}
        editable={editable}
        multiline={multiline}
      />
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
  },
  fieldLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  fieldValue: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 4,
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginTop: 8,
  },
});
