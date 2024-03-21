import { CollectionConfig } from "payload/types";

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
    // Add other fields as needed for category metadata
  ],
};

export default Category;
