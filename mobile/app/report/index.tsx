import React, { useState } from "react";
import { View, Text, Image, Alert, useWindowDimensions, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import Header from "../../components/layout/Header";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { submitReport } from "../../services/report";

export default function ReportForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loc, setLoc] = useState<{ lat: number; lng: number } | null>(null);
  const { width } = useWindowDimensions();

  // Pick image from gallery
  async function pickImage() {
    try {
      const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!perm.granted) {
        return Alert.alert("Permission required", "Allow access to photos.");
      }

      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.6,
        base64: false,
      });

      if (!res.canceled && res.assets.length > 0) {
        setImage(res.assets[0].uri);
      }
    } catch (error) {
      console.error("ImagePicker error:", error);
      Alert.alert("Error", "Could not pick image.");
    }
  }

  // Capture current location
  async function captureLocation() {
    try {
      const perm = await Location.requestForegroundPermissionsAsync();
      if (!perm.granted) {
        return Alert.alert("Permission required", "Allow location access.");
      }

      const position = await Location.getCurrentPositionAsync({});
      setLoc({ lat: position.coords.latitude, lng: position.coords.longitude });
      Alert.alert("Location Captured", `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
    } catch (error) {
      console.error("Location error:", error);
      Alert.alert("Error", "Could not capture location.");
    }
  }

  // Submit the report
  async function handleSubmit() {
    if (!title || !desc) {
      return Alert.alert("Validation", "Please add title and description.");
    }

    try {
      await submitReport({
        title,
        description: desc,
        lat: loc?.lat,
        lng: loc?.lng,
        imageUri: image,
      });

      Alert.alert("Success", "Report submitted successfully!");

      // Reset form
      setTitle("");
      setDesc("");
      setImage(null);
      setLoc(null);
    } catch (error) {
      console.error("Submit error:", error);
      Alert.alert("Error", "Could not submit report.");
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, padding: Math.min(20, width * 0.06), backgroundColor: "#fff" }}>
      <Header title="New Report" />
      
      <Input placeholder="Short title" value={title} onChangeText={setTitle} />
      <Input placeholder="Description" value={desc} onChangeText={setDesc} multiline numberOfLines={4} />
      
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 200, borderRadius: 10, marginBottom: 8 }}
        />
      )}

      <Button title="Pick Photo" onPress={pickImage} />
      <View style={{ height: 10 }} />
      <Button title={loc ? "Location Captured ✅" : "Capture Location"} onPress={captureLocation} />
      <View style={{ height: 10 }} />
      <Button title="Submit Report" onPress={handleSubmit} />
    </ScrollView>
  );
}
