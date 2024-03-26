import type { Block, Field } from "payload/types";

const columnFields: Field[] = [
  {
    name: "content",
    label: "Content",
    type: "richText",
  },
  {
    name: "enableLink",
    type: "checkbox",
  },
];

export const Content: Block = {
  fields: [
    {
      name: "columns",
      fields: columnFields,
      type: "array",
    },
  ],
  slug: "content",
};
