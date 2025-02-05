import generateBlocks from "@/shared/api/ai/generate.service";
import { StarsIcon } from "lucide-react";
import { NoteEditor, NotePartialBlock } from "./api/schema";

const generateBlocksButton = (editor: NoteEditor) => ({
  title: "Сгенерировать...",
  onItemClick: async () => {
    const currentBlock = editor.getTextCursorPosition().block;

    if (!currentBlock.content) return;
    const generatedBlocks: NotePartialBlock[] = await generateBlocks(
      typeof currentBlock.content === "string"
        ? currentBlock.content
        : // @ts-expect-error blocknote types
          currentBlock.content[0].text
    );
    editor.insertBlocks(generatedBlocks, currentBlock, "after");
  },
  aliases: ["generate", "gen"],
  group: "Нейросеть",
  icon: <StarsIcon size={18} />,
  subtext: "Используется, чтобы превратить строку в блоки",
});

export default generateBlocksButton;
