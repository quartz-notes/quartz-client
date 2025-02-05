import User from "@/shared/api/models/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create<User>()(
  persist(
    () => ({
      id: "",
      name: "Тестовый пользователь",
      email: "tim@apple.com",
      avatar: "/logo.svg",
      flags: {},
    }),
    { name: "store:user" }
  )
);

export default useUserStore;
