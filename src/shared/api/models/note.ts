import { Block } from "@blocknote/core";

export default interface Note {
  id: number;
  title: string;
  content: Block[];
  spaceId: string;
}
