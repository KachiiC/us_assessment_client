export interface INavChildLink {
  label: string;
  key: string;
}

export interface INavLinks {
  label: string;
  key: string;
  icon: JSX.Element;
  children?: INavChildLink[];
}
