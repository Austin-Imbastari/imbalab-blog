import { CollectionConfig } from "payload/types";
import formatDate from "./customHooks";

const Category: CollectionConfig = {
  slug: "categories",
  fields: [
    {
      name: "name",
      label: "Category Name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "createdAt",
      label: "Created At",
      type: "date",
      hooks: {
        afterRead: [formatDate],
      },
    },
    // Add other fields as needed for category metadata
  ],
};

export default Category;
