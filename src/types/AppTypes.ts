export interface SectionData {
  label: string;
  link: string;
  content: JSX.Element;
}

export interface ProjectLink {
  text: string;
  url: string;
}

export interface HeroProps {
  // key: string;
  size?:
    | "is-small"
    | "is-medium"
    | "is-large"
    | "is-halfheight"
    | "is-fullheight"; //Defined in Bulma Docs. https://bulma.io/documentation/layout/hero/
  background?: string; //url to background image
  title?: string;
  subtitle?: string;
  navBarOffset?: boolean;
}

export interface ProjectProps {
  sections: SectionData[];
}
