export type SectionId =
  | "contact"
  | "experiences"
  | "favorites"
  | "home"
  | "projects"
  | "stats"
  | "uses";

export type NavGroupId = "extras" | "work";

export interface NavItem {
  href: string;
  id: SectionId;
  label: string;
}

export interface NavGroup {
  id: NavGroupId;
  label: string;
  items: NavItem[];
}
