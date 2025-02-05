import Server from "@/shared/api/models/server";
import { create } from "zustand";

const useServerStore = create<Server>(() => ({
  state: "idle",
}));

export default useServerStore;
