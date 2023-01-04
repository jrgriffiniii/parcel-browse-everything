import Uppy from "@uppy/core";
import DragDrop from "@uppy/drag-drop";

import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";

class BrowseEverything {
  document: Document;
  uppy: Uppy;

  constructor(document: Document) {
    this.document = document;
    this.uppy = new Uppy();

    if (this.document != null) {
      const target: HTMLElement = this.document.body;

      this.uppy.use(DragDrop, {
        target,
        width: "100%",
        height: "100%",
        note: null,
        locale: {},
      });
    }
  }
}

export default BrowseEverything;
