import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import Header from "../../components/layout/Header";
import { fetchReports } from "../../services/report";

export default function History() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchReports();
        // Backend should return { reports: [...] } or an array
        setItems(data.reports ?? data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <ActivityIndicator style={{ marginTop: 30 }} />;

  return (
    <View style={{ padding: 16 }}>
      <Header title="My Reports" />
      <FlatList
        data={items}
        keyExtractor={(i) => String(i.id ?? i._id ?? JSON.stringify(i).slice(0, 8))}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}>
            <Text style={{ fontWeight: "700" }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>{item.status ?? "Pending"}</Text>
            <Text style={{ color: "#666", marginTop: 6 }}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
