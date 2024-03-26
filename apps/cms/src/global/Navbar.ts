import type { GlobalConfig } from "payload/types";

import link from "../fields/link";

export const Navbar: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      fields: [
        link({
          appearances: false,
        }),
        {
          name: "media",
          relationTo: "media",
          type: "upload",
        },
      ],
      maxRows: 6,
      type: "array",
    },
  ],
  slug: "header",
};
