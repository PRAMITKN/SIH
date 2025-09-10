import { useEffect } from "react";
import { useAuthStore, AuthState } from "../store/authStore"; // Make sure AuthState is exported
import { storage } from "../utils/storage";

export default function useAuthLoad() {
  const setToken = useAuthStore((s: AuthState) => s.setToken); // ✅ typed s

  useEffect(() => {
    (async () => {
      const token = await storage.get("token");
      setToken(token);
    })();
  }, []);
}
