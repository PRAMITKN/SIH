import api from "./api";

export async function login(email: string, password: string) {
  const r = await api.post("/auth/login", { email, password });
  return r.data;
}

export async function register(payload: any) {
  const r = await api.post("/auth/register", payload);
  return r.data;
}
