import { CollectionConfig } from "payload/types";
import formatDate from "./customHooks";

const Projects: CollectionConfig = {
  slug: "project",
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
      hooks: {
        afterRead: [formatDate],
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      required: true,
    },
    {
      name: "projectLink",
      label: "Project Link",
      type: "array",
      required: true,
      labels: {
        singular: "Link",
        plural: "Links",
      },
      fields: [
        {
          name: "livedemo",
          label: "Live demo link",
          type: "text",
          required: true,
          validate: (value: string) => {
            const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
            if (!urlPattern.test(value)) {
              return "Invalid URL format";
            }
          },
        },
        {
          name: "github",
          label: "github repository link",
          type: "text",
          required: true,
          validate: (value: string) => {
            const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
            if (!urlPattern.test(value)) {
              return "Invalid URL format";
            }
          },
        },
      ],
    },
  ],
};

export default Projects;
