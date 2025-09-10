import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/layout/Header";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={{ padding: 16 }}>
      <Header title="My Profile" />
      <Text style={{ fontWeight: "700", marginBottom: 8 }}>Pramit Kumar Naik</Text>
      <Text style={{ color: "#666", marginBottom: 12 }}>pramit@example.com</Text>
      <Link href="/profile/edit" style={{ color: "#000", fontWeight: "700" }}>
        Edit Profile →
      </Link>
    </View>
  );
}
