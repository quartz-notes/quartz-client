"use client";

import useNoteStore from "@/app/stores/notes.store";
import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/shared/ui/sidebar";
import { Plus } from "lucide-react";
import NavNote from "./nav-note";
import useSpaceStore from "@/app/stores/spaces.store";

export function NavNotes() {
  const notes = useNoteStore((state) => state.notes);
  const createNote = useNoteStore((state) => state.createNote);
  const currentSpace = useSpaceStore((state) => state.currentSpace);

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Заметки</SidebarGroupLabel>
      <SidebarGroupAction onClick={createNote} title="Добавить заметку">
        <Plus /> <span className="sr-only">Добавить заметку</span>
      </SidebarGroupAction>
      <SidebarMenu>
        {notes
          .filter((note) => note.spaceId === currentSpace)
          .map((note) => (
            <NavNote key={note.id} note={note} />
          ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
