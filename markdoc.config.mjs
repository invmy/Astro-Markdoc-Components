import { defineMarkdocConfig, nodes, component } from "@astrojs/markdoc/config";

export default defineMarkdocConfig({
  nodes: {
    document: {
      ...nodes.document,
      render: null,
    },
    heading: {
      ...nodes.heading,
      render: component("./src/components/markdoc/Heading.astro"),
    },
    image: {
      ...nodes.image,
      render: component("./src/components/markdoc/MarkdocImage.astro"),
    },

    link: {
      ...nodes.link,
      render: component("./src/components/markdoc/Link.astro"),
    },
    fence: {
      // Add custom Expressive Code component
      render: component("./src/components/markdoc/Fence.astro"),
      attributes: {
        // ... Default attributes we're using from Markdoc fence component
        content: { type: String, required: true },
        language: { type: String },
        // ... Attributes we're adding to have them available in the code component
        title: { type: String },
        frame: { type: String, matches: ["auto", "none", "code", "terminal"] },
      },
    },
  },
  tags: {
    networkImage: {
      render: component("./src/components/markdoc/MarkdocImage.astro"),
      attributes: {
        src: { type: String, required: true },
        alt: { type: String },
      },
    },
    horizontalGallery: {
      render: component("./src/components/markdoc/HorizontalGallery.astro"),
      attributes: {
        images: { type: Array, required: true },
      },
    },
  },
});
