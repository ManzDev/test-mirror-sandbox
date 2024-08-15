import { createTheme } from "thememirror";
import { tags as t } from "@lezer/highlight";

export const blurSoul = createTheme({
  variant: "dark",
  settings: {
    background: "#131417",
    foreground: "#ffffff",
    caret: "#7c3aed",
    selection: "#2e2e2e",
    lineHighlight: "#292929",
    gutterBackground: "#131417",
    gutterForeground: "#707070",
  },
  styles: [
    {
      tag: t.comment,
      color: "#787b8099",
    },
    {
      tag: t.variableName,
      color: "#4da6ff",
    },
    {
      tag: [t.string, t.special(t.brace)],
      color: "#50fbab",
    },
    {
      tag: t.number,
      color: "#5aff57",
    },
    {
      tag: t.bool,
      color: "#ff5c5c",
    },
    {
      tag: t.null,
      color: "#b171fe",
    },
    {
      tag: t.keyword,
      color: "#fd58c1",
    },
    {
      tag: t.operator,
      color: "#cbff6b",
    },
    {
      tag: t.className,
      color: "#70ffa7",
    },
    {
      tag: t.definition(t.typeName),
      color: "#a451db",
    },
    {
      tag: t.typeName,
      color: "#f5ff66",
    },
    {
      tag: t.angleBracket,
      color: "#b66420",
    },
    {
      tag: t.tagName,
      color: "#ff9a47",
    },
    {
      tag: t.attributeName,
      color: "#fb7e18",
    },
  ],
});
