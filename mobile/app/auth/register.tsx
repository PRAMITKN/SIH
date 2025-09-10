import React, { useState } from "react";
import { View, Alert } from "react-native";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { register } from "../../services/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  async function handle() {
    try {
      const res = await register({ email, password: pw });
      Alert.alert("Registered", "You can now log in.");
    } catch (e) {
      console.error(e);
      Alert.alert("Signup failed", "Try again.");
    }
  }

  return (
    <View style={{ padding: 16, flex: 1, justifyContent: "center", backgroundColor: "#fff" }}>
      <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Password" value={pw} onChangeText={setPw} secureTextEntry />
      <Button title="Create account" onPress={handle} />
    </View>
  );
}
