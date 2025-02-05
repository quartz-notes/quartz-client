import getById from "@/shared/lib/get-by-id";
import useNoteStore from "../../app/stores/notes.store";

function NoteTitle() {
  const currentNote = useNoteStore((state) => state.currentNote);
  const notes = useNoteStore((state) => state.notes);
  const updateNoteTitle = useNoteStore((state) => state.updateNoteTitle);

  return (
    <input
      placeholder={`Заметка ${currentNote}`}
      value={getById(notes, currentNote)?.title || ""}
      onChange={(e) => updateNoteTitle(currentNote!, e.target.value)}
      className="font-bold bg-transparent outline-none placeholder:italic dark:text-stone-50"
    />
  );
}

export default NoteTitle;
