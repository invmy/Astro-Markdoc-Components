import { fields } from "@keystatic/core";
import { inline } from "@keystatic/core/content-components";
import { createElement } from "react";

export const ruby = inline({
  label: "Ruby Annotation",
  schema: {
    text: fields.text({ label: "Character/Text", defaultValue: "字" }),
    rt: fields.text({ label: "Reading (Pinyin/Furigana)", defaultValue: "zi" }),
  },
  ContentView: (props) => {
    const { text, rt } = props.value;
    return createElement(
      "ruby",
      {
        style: {
          background: !text && !rt ? "#eee" : "transparent",
          padding: "0 2px",
        },
      },
      [
        text || (rt ? "" : "[Ruby]"),
        createElement("rp", { key: "rp-start" }, "("),
        createElement("rt", { key: "rt" }, rt),
        createElement("rp", { key: "rp-end" }, ")"),
      ]
    );
  },
});
