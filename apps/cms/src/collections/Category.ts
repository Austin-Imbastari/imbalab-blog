import { CollectionConfig } from "payload/types";
import formatDate from "./customHooks";

const Category: CollectionConfig = {
  admin: {
    useAsTitle: "title",
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
