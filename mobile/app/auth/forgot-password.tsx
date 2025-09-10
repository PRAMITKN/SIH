import React, { useState } from "react";
import { View, Alert } from "react-native";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function sendReset() {
    // call backend password-reset endpoint
    Alert.alert("Check your email", "Reset link sent if account exists.");
  }

  return (
    <View style={{ padding: 16, flex: 1, justifyContent: "center", backgroundColor: "#fff" }}>
      <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Send reset link" onPress={sendReset} />
    </View>
  );
}
