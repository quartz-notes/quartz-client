import getSpaces from "@/shared/api/ai/spaces.service";
import Space from "@/shared/api/models/space";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SpaceState {
  spaces: Space[];
  currentSpace: string;

  setCurrentSpace: (spaceId: string) => void;
  addSpace: (name: string) => void;
  sync: () => Promise<void>;
}

const mock: Space[] = [
  {
    id: "qwa",
    name: "Основное",
    logo: "star",
  },
];

const useSpaceStore = create<SpaceState>()(
  persist(
    (set) => ({
      spaces: mock,
      currentSpace: "qwa",

      setCurrentSpace: (spaceId: string) =>
        set(() => ({ currentSpace: spaceId })),
      addSpace: (name: string) =>
        set((state) => ({
          spaces: [
            ...state.spaces,
            {
              id: crypto.randomUUID(),
              name,
              logo: "sandwich",
            },
          ],
        })),
      sync: async () => {
        const spaces = await getSpaces();
        set(() => ({ spaces }));
      },
    }),
    { name: "store:spaces" }
  )
);

export default useSpaceStore;
