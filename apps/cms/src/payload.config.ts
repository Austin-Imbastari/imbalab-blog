import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
// import { webpackBundler } from "@payloadcms/bundler-webpack";
import { viteBundler } from "@payloadcms/bundler-vite";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { BlocksFeature, LinkFeature, lexicalEditor, BlockNode } from "@payloadcms/richtext-lexical";

//Blocks
import { CodeBlock } from "./blocks/CodeBlocks";

//Collections
import Users from "./collections/Users";
import Media from "./collections/Media";
import Projects from "./collections/Project";
import Category from "./collections/Category";

const editor = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    LinkFeature({
      fields: [
        {
          name: "rel",
          label: "Rel Attribute",
          type: "select",
          hasMany: true,
          options: ["noopener", "noreferrer", "nofollow"],
          admin: {
            description:
              "The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.",
          },
        },
      ],
    }),
    BlocksFeature({
      blocks: [CodeBlock],
    }),
  ],
});

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor,
  collections: [Users, Media, Projects, Category],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
