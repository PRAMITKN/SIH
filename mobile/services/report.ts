import api from "./api";

export async function submitReport({ title, description, lat, lng, imageUri }: any) {
  // If your backend accepts multipart/form-data:
  const fd: any = new FormData();
  fd.append("title", title);
  fd.append("description", description);
  if (lat) fd.append("lat", String(lat));
  if (lng) fd.append("lng", String(lng));
  if (imageUri) {
    // expo image uri form data
    fd.append("image", {
      uri: imageUri,
      name: "photo.jpg",
      type: "image/jpeg"
    } as any);
  }
  const r = await api.post("/reports", fd, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return r.data;
}

export async function fetchReports(params?: any) {
  const r = await api.get("/reports", { params });
  return r.data;
}
