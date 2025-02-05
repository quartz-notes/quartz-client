import { defaultBlockSpecs, BlockNoteSchema } from "@blocknote/core";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { audio, image, video, file, ...remainingBlockSpecs } = defaultBlockSpecs;

export const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...remainingBlockSpecs,
  },
});

export type NoteEditor = typeof schema.BlockNoteEditor;
export type NoteBlock = typeof schema.Block;
export type NotePartialBlock = typeof schema.PartialBlock;
