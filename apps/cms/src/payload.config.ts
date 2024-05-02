import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { buildConfig } from "payload/config";
import { BlocksFeature, LinkFeature, lexicalEditor, BlockNode } from "@payloadcms/richtext-lexical";
import seo from "@payloadcms/plugin-seo";

//Blocks
import { CodeBlock } from "./blocks/CodeBlock/CodeBlocks";
import { MediaBlock } from "./blocks/MediaBlock";

//Collections
import Users from "./collections/User/Users";
import Projects from "./collections/Project";
import Category from "./collections/Category";
import { Media } from "./collections/Media";
import { Pages } from "./collections/Pages";

//Globals
import { Navbar } from "./global/Navbar";
import { Footer } from "./global/Footer";

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
      blocks: [CodeBlock, MediaBlock],
    }),
  ],
});

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor,
  collections: [Users, Media, Projects, Category, Pages],
  globals: [Navbar, Footer],

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seo({
      collections: ["projects"],
      uploadsCollection: "media",
    }),
    payloadCloud(),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: ["http://localhost:5173"],
});
