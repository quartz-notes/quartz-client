/* eslint-disable react-hooks/exhaustive-deps */
import { locales, PartialBlock } from "@blocknote/core";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/shadcn";
import "./editor.css";
import "@blocknote/shadcn/style.css";
import { useEffect, useMemo, useState } from "react";
import useNoteStore from "../../app/stores/notes.store";
import * as Button from "@/shared/ui/button";
import * as Badge from "@/shared/ui/badge";
import * as Card from "@/shared/ui/card";
import * as DropdownMenu from "@/shared/ui/dropdown-menu";
import * as Form from "@/shared/ui/form";
import * as Label from "@/shared/ui/label";
import * as Input from "@/shared/ui/input";
import * as Popover from "@/shared/ui/popover";
import * as Select from "@/shared/ui/select";
import * as Tabs from "@/shared/ui/tabs";
import * as Toggle from "@/shared/ui/toggle";
import * as Tooltip from "@/shared/ui/tooltip";
import getById from "@/shared/lib/get-by-id";
import { schema } from "./api/schema";
import SuggestionMenu from "./suggestion-menu";
import EditorToolbar from "./editor-toolbar";
import GeneratingNotification from "./generating-notification";
import useServerStore from "@/app/stores/server.store";

function Editor() {
  const updateNote = useNoteStore((state) => state.updateNoteContent);
  const notes = useNoteStore((state) => state.notes);
  const currentNote = useNoteStore((state) => state.currentNote);

  const [initialContent, setInitialContent] = useState<
    PartialBlock[] | undefined
  >(getById(notes, currentNote)?.content);

  useEffect(() => {
    setInitialContent(notes.find((note) => note.id === currentNote)?.content);
  }, [currentNote]);

  const config = {
    dictionary: locales.ru,
    schema,
  };

  const editor = useMemo(() => {
    if (!initialContent?.length) {
      return BlockNoteEditor.create({
        ...config,
      });
    }
    return BlockNoteEditor.create({
      // @ts-expect-error blocknote types
      initialContent: initialContent,
      ...config,
    });
  }, [initialContent]);

  return (
    <div>
      {useServerStore((state) => state.state) === "generating" && (
        <GeneratingNotification />
      )}
      <BlockNoteView
        editor={editor}
        slashMenu={false}
        formattingToolbar={false}
        shadCNComponents={{
          Button,
          Badge,
          Card,
          DropdownMenu,
          Form,
          Input,
          Label,
          Popover,
          Select,
          Tabs,
          Toggle,
          Tooltip,
        }}
        onChange={() => {
          updateNote(currentNote, editor.document);
        }}
      >
        <SuggestionMenu editor={editor} />
        <EditorToolbar />
      </BlockNoteView>
    </div>
  );
}

export default Editor;
