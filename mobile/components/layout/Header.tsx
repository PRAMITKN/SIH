import React from "react";
import { View, Text } from "react-native";
import colors from "../../constants/Colors";

export default function Header({ title }: { title: string }) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "800", color: colors.text }}>
        {title}
      </Text>
    </View>
  );
}
