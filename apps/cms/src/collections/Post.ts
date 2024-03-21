import { CollectionConfig } from "payload/types";

const Post: CollectionConfig = {
  slug: "posts",
  upload: {
    staticURL: "/images",
    staticDir: "images",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      // Define other image sizes as needed
    ],
    mimeTypes: ["image/*"],
  },

  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      required: true,
    },
  ],
};

export default Post;
