import React from "react";
import { ScrollView, View, Text } from "react-native";
import Header from "../components/layout/Header";
import Card from "../components/ui/Card";
import { Link } from "expo-router";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <ScrollView style={{ padding: 16, backgroundColor: "#fff" }}>
      <Header title="Civic Reporter" />
      <Card>
        <Text style={{ fontWeight: "700", marginBottom: 6 }}>File an issue</Text>
        <Link href="/report" style={{ color: "#000", fontWeight: "700" }}>
          Start a Report →
        </Link>
      </Card>

      <Card>
        <Text style={{ fontWeight: "700", marginBottom: 6 }}>My Reports</Text>
        <Link href="/report/history" style={{ color: "#000", fontWeight: "700" }}>
          View History →
        </Link>
      </Card>

      <View style={{ height: 40 }} />
      <Footer />
    </ScrollView>
  );
}
