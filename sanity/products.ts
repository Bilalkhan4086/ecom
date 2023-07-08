import { unsplashAssetSource } from "sanity-plugin-asset-source-unsplash";

export default {
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    {
      name: "typeOfProduct",
      type: "string",
      title: "Type of Product",
      options: {
        list: ["shirts", "pents", "kurta", "pajama"],
      },
    },
    {
      name: "for",
      type: "string",
      title: "For",
      options: {
        list: ["boys", "girls", "uni-sex"],
      },
    },
    {
      name: "numberOfPiecesAvailable",
      type: "number",
      title: "Number of pieces available",
    },
    {
      name: "colorAvailable",
      type: "array",
      title: "Available colours : Hint (use hex format e.g. #ffffff)",
      of: [
        // The "of"-property must be set, and it must be an array
        {
          type: "color",
          title: "Colors",
        },
      ],
    },
    {
      name: "pictures",
      type: "array",
      title: "Images for the product",
      of: [
        {
          type: "image",
          title: "Image",
          options: {
            sources: [unsplashAssetSource],
            hotspot: true,
          },
          fields: [
            {
              type: "string",
              name: "Alt",
              title: "Alt",
            },
          ],
        },
      ],
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "price",
      type: "number",
      title: "Price",
    },

    {
      name: "sizes",
      type: "array",
      title: "Sizes available",
      of: [
        {
          type: "string",
          title: "size",
        },
      ],
      options: {
        list: ["xxs", "xs", "s", "m", "l", "xl", "2xl", "3xl"],
      },
    },
  ],
};
