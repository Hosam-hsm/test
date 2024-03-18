import { CodegenConfig } from "@graphql-codegen/cli";

const codegenLoader = require("./codegen-loader");

const config: CodegenConfig = {
  schema: [
    {
      "test-app": {
        loader: codegenLoader,
      },
    },
  ],
  documents: ["src/**/*.ts"],
  generates: {
    "src/services/graphql/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
