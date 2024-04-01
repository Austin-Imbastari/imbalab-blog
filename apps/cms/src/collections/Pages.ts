import type { Field } from "payload/types";
import { CollectionConfig } from "payload/types";
import { deepMerge, formatSlug } from "../utils";
import { Archive } from "../blocks/ArchiveBlock/index";
import { admins } from "../access/admins";
import { adminsOrPublished } from "../access/adminsOrPublished";

const hero: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "content",
      type: "richText",
    },
    {
      name: "media",
      relationTo: "media",
      type: "upload",
    },
  ],
};

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: admins,
    delete: () => false,
    read: adminsOrPublished,
    update: admins,
  },
  admin: {
    useAsTitle: "title",
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      required: true,
      type: "text",
    },
    {
      name: "publishedData",
      admin: {
        position: "sidebar",
      },
      type: "date",
    },
    deepMerge<Field, Partial<Field>>(
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
      {}
    ),
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
              name: "layout",
              blocks: [Archive],
              required: true,
              type: "blocks",
            },
          ],
          label: "Content",
        },
      ],
    },
  ],
};
