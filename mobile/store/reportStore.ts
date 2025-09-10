import { create } from "zustand";

export interface Report {
  id?: string;
  title?: string;
  description?: string;
  imageUri?: string;
  lat?: number;
  lng?: number;
  [key: string]: any; // optional for extra fields
}

export interface ReportState {
  reports: Report[];
  setReports: (r: Report[]) => void;
  addReport: (r: Report) => void;
}

export const useReportStore = create<ReportState>((set) => ({
  reports: [],
  setReports: (r: Report[]) => set({ reports: r }),
  addReport: (r: Report) => set((state) => ({ reports: [r, ...state.reports] })),
}));
