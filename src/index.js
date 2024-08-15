import "@/components/CodeEditor.js";

const htmlEditor = document.querySelector("code-editor[language=html]");
const cssEditor = document.querySelector("code-editor[language=css]");
const jsEditor = document.querySelector("code-editor[language=javascript]");

const js = /* js */`
function test() {
  console.log("Hello World");
  return 42;
}
`;

const css = /* css */`
.container {
  width: 100%;
  height: 50px;
  background-color: red;
  border: 2px solid black;
  border-radius: 4px;

  & .item {
    color: red
  }
}
`;

const html = /* html */`
<h1>Hello amigos!</h1>
`;

htmlEditor.setAttribute("code", html);
cssEditor.setAttribute("code", css);
jsEditor.setAttribute("code", js);
