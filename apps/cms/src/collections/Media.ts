import type { CollectionConfig } from "payload/types";

import path from "path";
import { adminsOrPublished } from "../access/adminsOrPublished";
import { admins } from "../access/admins";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "alt",
  },
  access: {
    create: admins,
    delete: admins,
    read: () => true,
    update: admins,
  },
  upload: {
    mimeTypes: ["image/*", "video/*"],
    staticDir: path.resolve(__dirname, "../../media/"),
  },
  fields: [
    {
      name: "alt",
      required: true,
      type: "text",
    },
    {
      name: "caption",
      type: "text",
    },
  ],
};
