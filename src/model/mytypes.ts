export interface Skill {
  id: string;
  image: string;
  text: string;
  description: string;
}

export type Language = {
  id: string;
  text: string;
  image: string;
  level: string;
};

export interface Certification {
  id: string;
  image: string;
  text: string;
  description: string;
  link: string;
}

export interface Project {
  id: string;
  image: string;
  text: string;
  description: string;
  link: string;
}

export interface Contact {
  id: string;
  type:
    | "tel"
    | "email"
    | "messenger"
    | "address"
    | "location"
    | "whatsapp"
    | "telegram"
    | "social";
  image: string;
  text: string;
  link: string;
}
