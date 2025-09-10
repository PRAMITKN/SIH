import React, { useState } from "react";
import { View, Alert } from "react-native";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function EditProfile() {
  const [name, setName] = useState("Pramit Kumar Naik");
  const [email, setEmail] = useState("pramit@example.com");

  async function save() {
    // call backend endpoint to update profile
    Alert.alert("Saved", "Profile updated");
  }

  return (
    <View style={{ padding: 16 }}>
      <Header title="Edit Profile" />
      <Input value={name} onChangeText={setName} placeholder="Name" />
      <Input value={email} onChangeText={setEmail} placeholder="Email" keyboardType="email-address" />
      <Button title="Save" onPress={save} />
    </View>
  );
}
