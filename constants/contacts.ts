import { LINK } from "@/constants/links";
import type { Contact } from "@/types/contacts";

export const CONTACTS = [
  {
    icon: "github",
    link: {
      display: "@rautaditya2606",
      url: LINK.GITHUB,
    },
    title: "GitHub",
  },
  {
    icon: "linkedin",
    link: {
      display: "Aditya Raut",
      url: LINK.LINKEDIN,
    },
    title: "LinkedIn",
  },
  {
    icon: "x",
    link: {
      display: "@RautAditya2606",
      url: LINK.TWITTER,
    },
    title: "Twitter / X",
  },
  {
    icon: "discord",
    link: {
      display: "@rautaditya2606",
      url: LINK.DISCORD,
    },
    title: "Discord",
  },
] as const satisfies readonly Contact[];
