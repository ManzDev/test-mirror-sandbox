import { javascript as javascriptSyntax } from "@codemirror/lang-javascript";
import { html as htmlSyntax } from "@codemirror/lang-html";
import { css as cssSyntax } from "@codemirror/lang-css";
import beautify from "js-beautify";

// TO DO: Pasar a dynamic import
export default {
  javascript: {
    syntax: javascriptSyntax,
    minify: beautify.js
  },
  html: {
    syntax: htmlSyntax,
    minify: beautify.html
  },
  css: {
    syntax: cssSyntax,
    minify: beautify.css
  }
};
