import { config } from "@workspace/eslint-config/react-internal"

export default [
  ...config,
  {
    files: ["src/ambient-orb.tsx"],
    rules: {
      "react/no-unknown-property": "off",
    },
  },
]
