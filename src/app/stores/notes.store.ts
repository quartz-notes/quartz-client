import Note from "@/shared/api/models/note";
import { Block } from "@blocknote/core";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useSpaceStore from "./spaces.store";
import getNotes from "@/shared/api/ai/notes.service";

interface NoteState {
  notes: Note[];
  currentNote: number;

  setCurrentNote: (id: number) => void;
  createNote: () => void;
  updateNoteContent: (id: number, content: Block[]) => void;
  updateNoteTitle: (id: number, title: string) => void;
  removeNote: (id: number) => void;

  sync: () => Promise<void>;
}

const mock = [
  {
    id: 0,
    title: "Тестовая заметка",
    content: [],
    spaceId: "qwa",
  },
  {
    id: 1,
    title: "Еще одна",
    content: [],
    spaceId: "qwa",
  },
  {
    id: 2,
    title: "Ноут",
    content: [],
    spaceId: "qwa",
  },
  {
    id: 3,
    title: "XAE-Xii",
    content: [],
    spaceId: "qwa",
  },
];

const useNoteStore = create<NoteState>()(
  persist(
    (set, get) => ({
      notes: mock,
      currentNote: 3,

      setCurrentNote: (id: number) => set(() => ({ currentNote: id })),

      createNote: () => {
        set((state) => {
          const id =
            state.notes.length > 0
              ? state.notes[state.notes.length - 1].id + 1
              : 0;
          return {
            notes: [
              ...state.notes,
              {
                id,
                title: "",
                content: [],
                spaceId: useSpaceStore.getState().currentSpace,
              },
            ],
            currentNote: id,
          };
        });
      },

      updateNoteContent: (id: number, content: Block[]) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, content: content } : note
          ),
        }));
      },

      updateNoteTitle: (id: number, title: string) => {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? { ...note, title: title } : note
          ),
        }));
      },

      removeNote: (id: number) => {
        if (get().notes.length === 1) return;

        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        }));
        set((state) => ({
          currentNote:
            state.currentNote === id ? state.notes[0].id : state.currentNote,
        }));
      },

      sync: async () => {
        const notes = await getNotes();
        set(() => ({ notes }));
      },
    }),
    { name: "store:notes" }
  )
);

export default useNoteStore;
