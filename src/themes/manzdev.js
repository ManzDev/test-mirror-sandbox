import { createTheme } from "thememirror";
import { tags as t } from "@lezer/highlight";

export const manzdev = createTheme({
  variant: "dark",
  settings: {
    background: "#000000",
    foreground: "#ffffff",
    caret: "#e4c111",
    selection: "#240335",
    lineHighlight: "#101010",
    gutterBackground: "#101010",
    gutterForeground: "#404040",
  },
  styles: [
    {
      tag: t.comment,
      color: "#5c5c5c",
    },
    {
      tag: t.variableName,
      color: "#1cbab0",
    },
    {
      tag: [t.string, t.special(t.brace)],
      color: "#ecd565",
    },
    {
      tag: t.number,
      color: "#b349da",
    },
    {
      tag: t.bool,
      color: "#9c43e5",
    },
    {
      tag: t.null,
      color: "#67a6e4",
    },
    {
      tag: t.keyword,
      color: "#47a4eb",
    },
    {
      tag: t.operator,
      color: "#c91d62",
    },
    {
      tag: t.className,
      color: "#df53cd",
    },
    {
      tag: t.definition(t.typeName),
      color: "#5c6166",
    },
    {
      tag: t.typeName,
      color: "#5c6166",
    },
    {
      tag: t.angleBracket,
      color: "#c2c1c2",
    },
    {
      tag: t.tagName,
      color: "#e60a74",
    },
    {
      tag: t.attributeName,
      color: "#10e013",
    },
  ],
});
