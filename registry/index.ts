import type { Registry } from "shadcn/schema";

import { components } from "./components/_registry";

export const registry = {
  homepage: "https://adityaraut.com",
  items: [...components],
  name: "aditya-ui",
} satisfies Registry;
