import React from "react";
import { View } from "react-native";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 12,
        marginVertical: 8,
        elevation: 1,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 6
      }}
    >
      {children}
    </View>
  );
}
