export interface Resource {
  name: string;
  type: "youtube" | "gdrive" | "website";
  link: string;
  description: string;
  tags: string[];
}

export interface ResourceCategory {
  [key: string]: Resource[];
}

export interface DomainInfo {
  name: string;
  icon: string;
  description: string;
  categories: string[];
  gradient: string;
  path: string;
}
