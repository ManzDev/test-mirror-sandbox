import { initCodeMirror } from "@/modules/codeMirror.js";

const DEFAULT_LANGUAGE = "javascript";
const DEFAULT_THEME = "manzdev";
const DEFAULT_TEXT = "";

class CodeEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.editor = null;
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        border: 3px solid #000;
        margin: 5px;
      }

      .container {
        color: #fff;
        font-size: 20px;
      }
    `;
  }

  static get observedAttributes() {
    return ["code"];
  }

  get content() {
    return this.editor?.state.doc.text.join("\n");
  }

  attributeChangedCallback(name, old, now) {
    if (name === "code" && now !== "") {
      this.editor = initCodeMirror(this.container, { lang: this.language, theme: this.theme, code: now });
    }
  }

  connectedCallback() {
    this.language = this.getAttribute("language") ?? DEFAULT_LANGUAGE;
    this.theme = this.getAttribute("theme") ?? DEFAULT_THEME;
    this.code = this.getAttribute("code") ?? DEFAULT_TEXT;
    this.render();
    this.container = this.shadowRoot.querySelector(".container");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CodeEditor.styles}</style>
    <div class="container">
    </div>`;
  }
}

customElements.define("code-editor", CodeEditor);
