import AsyncStorage from "@react-native-async-storage/async-storage";

export const storage = {
  async set(key: string, value: any) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  async get(key: string) {
    const r = await AsyncStorage.getItem(key);
    return r ? JSON.parse(r) : null;
  },
  async remove(key: string) {
    await AsyncStorage.removeItem(key);
  }
};
