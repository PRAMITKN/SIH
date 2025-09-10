import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { login } from "../../services/auth";
import { storage } from "../../utils/storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  async function handle() {
    try {
      const res = await login(email, pw);
      // expected { token, user }
      if (res.token) {
        await storage.set("token", res.token);
        Alert.alert("Logged in", "Welcome!");
      } else {
        Alert.alert("Login failed", "Invalid credentials.");
      }
    } catch (e) {
      console.error(e);
      Alert.alert("Login error", "Check credentials or server.");
    }
  }

  return (
    <View style={{ padding: 16, flex: 1, justifyContent: "center", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "800", marginBottom: 20 }}>Sign in</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Password" value={pw} onChangeText={setPw} secureTextEntry />
      <Button title="Login" onPress={handle} />
    </View>
  );
}
