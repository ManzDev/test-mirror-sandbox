import { EditorView } from "codemirror";
import { Compartment } from "@codemirror/state";
import { customSetup } from "@/editor/index.js";
import LANGUAGES from "@/syntax/index.js";
import THEMES from "@/themes/index.js";

const language = new Compartment();

export const initCodeMirror = (element = document.body, config) => {
  const { lang, theme, code } = config;
  const prettyCode = LANGUAGES[lang].minify(code.trim(), {
    indent_size: 2,
    space_in_empty_paren: true
  });

  return new EditorView({
    doc: prettyCode,
    extensions: [
      customSetup,
      THEMES[theme],
      language.of(LANGUAGES[lang].syntax()),
    ],
    parent: element
  });
};
