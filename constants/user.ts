import { EXPERIENCES } from "@/constants/experiences";
import { LINK } from "@/constants/links";
import { getBaseUrl } from "@/constants/url";

const [currentExperience] = EXPERIENCES;

export const USER = {
  address: {
    country: "India",
    locality: "Pune",
  },
  avatar: "https://github.com/rautaditya2606.png",
  company: currentExperience.experienceOrg.name,
  email: LINK.EMAIL,
  firstName: "Aditya",
  jobTitle: currentExperience.experienceTitle,
  lastName: "Raut",
  username: "rautaditya2606",
  website: getBaseUrl(),
} as const;

export const NAME = `${USER.firstName} ${USER.lastName}`;
