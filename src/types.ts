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

export type ListOfLinksProps = {
  linkArray: Link[];
}

export type LinkBoardProps = {
  type: string,
}

/* Non-Prop Types */

export type ProgrammingLinkGroups = {
  daily: Link[],
  tools: Link[],
  docs: Link[],
  inspo: Link[];
}

export type DefaultLinkGroups = {
  daily: Link[],
  social: Link[],
  media: Link[],
  server: Link[];
}

export type LinkBoard = {
  theme: string;
  linkMode: string;
}

export type Link = {
  name: string;
  url: string;
  group: string;
}
