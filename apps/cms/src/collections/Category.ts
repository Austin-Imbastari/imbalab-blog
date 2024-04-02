import { CollectionConfig } from "payload/types";
import formatDate from "./customHooks";
import { admins } from "../access/admins";
const Category: CollectionConfig = {
  admin: {
    useAsTitle: "title",
  },
  access: {
    create: admins,
    delete: admins,
    read: () => true,
    update: admins,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "createdAt",
      label: "Created At",
      type: "date",
      hooks: {
        afterRead: [formatDate],
      },
    },
  ],
  slug: "categories",
};

export default Category;
