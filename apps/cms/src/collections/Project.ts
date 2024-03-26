import type { Field } from "payload/types";
import type { CollectionConfig } from "payload/types";

import { formatSlug } from "../utils";

const hero: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "media",
      relationTo: "media",
      type: "upload",
    },
    {
      name: "shortDescription",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
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
      label: "GitHub repository link",
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
};

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    defaultColumns: ["title", "slug"],
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "categories",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      relationTo: "categories",
      type: "relationship",
      required: true,
    },
    {
      name: "publishedDate",
      admin: {
        position: "sidebar",
      },
      type: "date",
    },
    {
      name: "slug",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
      hooks: {
        beforeChange: [formatSlug("title")],
      },
      index: true,
      label: "Slug",
      type: "text",
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [hero],
          label: "Hero",
        },
        {
          fields: [
            {
              name: "content",
              type: "richText",
              required: true,
            },
          ],
          label: "Content",
        },
      ],
    },
  ],
};

export default Projects;
