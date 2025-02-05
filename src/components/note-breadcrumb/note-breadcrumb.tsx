import useSpaceStore from "@/app/stores/spaces.store";
import getById from "@/shared/lib/get-by-id";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/shared/ui/breadcrumb";
import NoteTitle from "./note-title";
import { TextMorph } from "@/shared/ui/text-morph";
import useNoteStore from "@/app/stores/notes.store";

function NoteBreadcrumb() {
  const spaces = useSpaceStore((state) => state.spaces);
  const notes = useNoteStore((state) => state.notes);
  const currentNote = useNoteStore((state) => state.currentNote);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">
            <TextMorph>
              {getById(spaces, getById(notes, currentNote)!.spaceId)!.name}
            </TextMorph>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden md:block" />
        <BreadcrumbItem>
          <BreadcrumbPage>
            <NoteTitle />
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default NoteBreadcrumb;
