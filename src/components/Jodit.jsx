import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

export default function Jodit({ placeholder }) {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    height: '95vh',
    readonly: false,
    enableDragAndDropFileToEditor: true,
    language: 'en',
    askBeforePasteHTML: false,
    askBeforePasteFromWord: false,
    defaultActionOnPaste: 'insert_clear_html',
    uploader: {
      url: `https://media.falconconsulting.fr/fileUploader`,
      format: 'json',
      pathVariableName: 'path',
      filesVariableName: function (t) {
        return 'file';
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
    buttons: [
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'image',
      'table',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      '|',
      'print',
    ],
    buttonsMD: [
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'image',
      'table',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      '|',
      'print',
    ],
    buttonsSM: [
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'image',
      'table',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      '|',
      'print',
    ],
    buttonsXS: [
      'bold',
      'strikethrough',
      'underline',
      'italic',
      '|',
      'ul',
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      '|',
      'image',
      'table',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      '|',
      'print',
    ],
  };

  return (
    <div className="jodit_container">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
    </div>
  );
}
