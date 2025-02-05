import useNoteStore from "@/app/stores/notes.store";
import Note from "@/shared/api/models/note";
import {
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
} from "@/shared/ui/sidebar";
import { TextMorph } from "@/shared/ui/text-morph";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { useState } from "react";

function NavNote({ note }: { note: Note }) {
  const removeNote = useNoteStore((state) => state.removeNote);
  const currentNote = useNoteStore((state) => state.currentNote);
  const setCurrentNote = useNoteStore((state) => state.setCurrentNote);
  const updateNoteTitle = useNoteStore((state) => state.updateNoteTitle);

  const [newName, setNewName] = useState(note.title);

  return (
    <SidebarMenuItem key={note.id}>
      <SidebarMenuButton
        onClick={() => setCurrentNote(note.id)}
        isActive={note.id === currentNote}
        tooltip={note.title}
      >
        <TextMorph>{note.title || `заметка ${note.id}`}</TextMorph>
      </SidebarMenuButton>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuAction>
              <Ellipsis className="opacity-50 transition-opacity hover:opacity-100" />
            </SidebarMenuAction>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DialogTrigger asChild>
              <DropdownMenuItem>
                <span>Переименовать</span>
              </DropdownMenuItem>
            </DialogTrigger>
            <DropdownMenuItem onClick={() => removeNote(note.id)}>
              <span>Удалить</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{note.title}</DialogTitle>
            <DialogDescription>Переименовать заметку</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                onClick={() => updateNoteTitle(note.id, newName)}
                type="button"
              >
                Сохранить
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </SidebarMenuItem>
  );
}

export default NavNote;
