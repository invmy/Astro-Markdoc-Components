import { fields } from "@keystatic/core";
import { block } from "@keystatic/core/content-components";
import { createElement } from "react";

export const horizontalGallery = block({
  label: "Horizontal Gallery",
  ContentView: ({ value }) =>
    createElement(
      "div",
      {
        style: {
          display: "flex",
          overflowX: "auto",
          gap: "10px",
          paddingBottom: "10px",
        },
      },
      value.images.map((image, index) =>
        createElement("img", {
          key: index,
          src: image.src || "",
          alt: image.alt,
          style: { height: "150px", borderRadius: "8px" },
        })
      )
    ),
  schema: {
    images: fields.array(
      fields.object({
        src: fields.url({
          label: "Image URL",
          validation: { isRequired: true },
        }),
        alt: fields.text({ label: "Image Alt" }),
      }),
      {
        label: "Images",
        itemLabel: (props) => props.fields.alt.value || "Image",
      }
    ),
  },
});
