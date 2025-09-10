import React from "react";
import { TextInput, TextInputProps } from "react-native";

export default function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={{
        borderWidth: 1,
        borderColor: "#e6e6e6",
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        color: "#0A0A0A"
      }}
      placeholderTextColor="#8a8a8a"
    />
  );
}
