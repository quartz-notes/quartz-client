import {
  FormattingToolbarController,
  FormattingToolbar,
  BlockTypeSelect,
  FileCaptionButton,
  FileReplaceButton,
  BasicTextStyleButton,
  TextAlignButton,
  ColorStyleButton,
  NestBlockButton,
  UnnestBlockButton,
  CreateLinkButton,
} from "@blocknote/react";
import SummarizeButton from "./summarize-button";

function EditorToolbar() {
  return (
    <FormattingToolbarController
      formattingToolbar={() => (
        <FormattingToolbar>
          <BlockTypeSelect key={"blockTypeSelect"} />

          <SummarizeButton key={"summarizeButton"} />

          <FileCaptionButton key={"fileCaptionButton"} />
          <FileReplaceButton key={"replaceFileButton"} />

          <BasicTextStyleButton
            basicTextStyle={"bold"}
            key={"boldStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"italic"}
            key={"italicStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"underline"}
            key={"underlineStyleButton"}
          />
          <BasicTextStyleButton
            basicTextStyle={"strike"}
            key={"strikeStyleButton"}
          />

          <BasicTextStyleButton
            key={"codeStyleButton"}
            basicTextStyle={"code"}
          />

          <TextAlignButton textAlignment={"left"} key={"textAlignLeftButton"} />
          <TextAlignButton
            textAlignment={"center"}
            key={"textAlignCenterButton"}
          />
          <TextAlignButton
            textAlignment={"right"}
            key={"textAlignRightButton"}
          />

          <ColorStyleButton key={"colorStyleButton"} />

          <NestBlockButton key={"nestBlockButton"} />
          <UnnestBlockButton key={"unnestBlockButton"} />

          <CreateLinkButton key={"createLinkButton"} />
        </FormattingToolbar>
      )}
    />
  );
}

export default EditorToolbar;
