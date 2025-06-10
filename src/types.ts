/* Prop Types */

export type NavBarProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export type PortraitProps = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export type LinkProps = {
  name: string;
  url: string;
}


/* Non-Prop Types */

export type ListOfLinks = {
  programmingLinks: Link[];
  defaultLinks: Link[];
}

export type LinkBoard = {
  theme: string;
  linkMode: string;
}

export type Link = {
  name: string;
  url: string;
  group: string;
  mode: string;
}
