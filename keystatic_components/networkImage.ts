import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { createElement } from "react";

export const networkImage = block({
  label: "Image For URL",
  ContentView: ({ value }) =>
    createElement("div", { style: { textAlign: "center" } }, [
      createElement("img", {
        key: "img",
        src: value.src || "",
        style: { width: "50%", display: "inline-block" },
      }),
    ]),
  schema: {
    src: fields.url({
      label: "Image URL",
      validation: { isRequired: true },
    }),
    alt: fields.text({ label: "Image Alt" }),
  },
});
