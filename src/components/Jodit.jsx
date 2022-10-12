import React, { useState, useRef, useEffect, useMemo } from "react";
import JoditEditor from "jodit-react";
import htmlDocx from "html-docx-js/dist/html-docx";
import { saveAs } from "file-saver";
import docxIcon from "../assets/docx.png";

// Sample Data
// import { sampleDoc } from '../data/sampleDoc';

export default function Jodits() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    height: "95vh",
    readonly: false,
    enableDragAndDropFileToEditor: true,
    language: "en",
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: "insert_clear_html",
    uploader: {
      url: `https://media.falconconsulting.fr/fileUploader`,
      format: "json",
      pathVariableName: "path",
      filesVariableName: function (t) {
        return "file";
      },
      prepareData: function (data) {
        return data;
      },
      isSuccess: function (resp) {
        if (resp) {
          return true;
        } else {
          return false;
        }
      },
      process: function (resp) {
        return {
          file: resp.files[0].uri || [],
        };
      },
      defaultHandlerSuccess: function (data) {
        if (data.file) {
          this.selection.insertImage(data.file);
        }
      },
    },
    events: {
      afterInit: function (jodit) {
        window.jodit = jodit;
      },
    },
    controls: {
      docx: {
        name: "docx",
        tooltip: "Export to word",
        iconURL: docxIcon,
        exec: function () {
          let converted = htmlDocx.asBlob(content);
          saveAs(converted, "document.docx");
        },
      },
    },
    extraButtons: ["docx"],
  };

  return useMemo(
    () => (
      <div className="jodit_container">
        <JoditEditor
          id="editor"
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onChange={(newContent) => setContent(newContent)}
        />
      </div>
    ),
    []
  );
}
