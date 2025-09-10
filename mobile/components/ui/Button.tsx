import React from "react";
import { TouchableOpacity, Text, ViewStyle } from "react-native";
import colors from "../../constants/Colors"; 

export default function Button({
  title,
  onPress,
  style
}: {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        { backgroundColor: colors.primary, padding: 14, borderRadius: 12 },
        style
      ]}
    >
      <Text style={{ color: "#fff", textAlign: "center", fontWeight: "700" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
