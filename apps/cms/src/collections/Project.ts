import type { Field } from "payload/types";
import type { CollectionConfig } from "payload/types";

import { formatSlug } from "../utils";
import { admins } from "../access/admins";
import { adminsOrPublished } from "../access/adminsOrPublished";

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
  access: {
    create: admins,
    delete: admins,
    read: adminsOrPublished,
    update: admins,
  },
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
        {
          fields: [
            {
              name: "relatedProjects",
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                };
              },
              hasMany: true,
              relationTo: "projects",
              type: "relationship",
            },
          ],
          label: "Related Projects",
        },
      ],
    },
  ],
};

export default Projects;
