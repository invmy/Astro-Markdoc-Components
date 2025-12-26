import { config, fields, collection } from "@keystatic/core";
import { networkImage } from "./keystatic_components/networkImage";
import { horizontalGallery } from "./keystatic_components/horizontalGallery";
import { ruby } from "./keystatic_components/ruby";

export default config({
  storage: {
    kind: "local",
    // kind: 'github',
    // repo: {
    //    owner: REPO_OWNER,
    //    name: REPO_NAME
    // }
  },
  ui: {
    brand: { name: "Markdoc Components" },
  },
  collections: {
    Posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/*",
      entryLayout: "content",
      format: { contentField: "content" },
      columns: ["title", "date", "description"],
      schema: {
        date: fields.date({ label: "Event date" }),
        title: fields.slug({
          name: { label: "Title" },
          slug: {
            label: "slug",
            description: "For Local Src Path 'Aa-Zz,0-9,-,_,.,'are prohibited",
          },
        }),
        description: fields.text({
          label: "description",
          multiline: true,
        }),
        // tags: fields.array(fields.text({ label: "Tag" }), {
        //   label: "Tag",
        //   itemLabel: (props) => props.value,
        // }),
        //Local image

        image: fields.image({
          label: "Image",
          directory: "src/assets/images",
          publicPath: "@/assets/images/",
        }),

        //image Url

        // image: fields.url({
        //   label: 'URL',
        //   description: 'The website URL'
        // }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images",
              publicPath: "@/assets/images/",
            },
          },
          components: {
            networkImage,
            horizontalGallery,
            ruby,
          },
        }),
      },
    }),
  },
});
