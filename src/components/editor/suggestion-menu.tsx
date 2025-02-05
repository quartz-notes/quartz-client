import { filterSuggestionItems } from "@blocknote/core";
import {
  DefaultReactSuggestionItem,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
} from "@blocknote/react";
import { NoteEditor } from "./api/schema";
import generateBlocksButton from "./generate-blocks-button";

const getCustomSlashMenuItems = (
  editor: NoteEditor
): DefaultReactSuggestionItem[] => [
  generateBlocksButton(editor),
  ...getDefaultReactSlashMenuItems(editor),
];

function SuggestionMenu({ editor }: { editor: NoteEditor }) {
  return (
    <SuggestionMenuController
      triggerCharacter={"/"}
      getItems={async (query) =>
        filterSuggestionItems(getCustomSlashMenuItems(editor), query)
      }
    />
  );
}

export default SuggestionMenu;
