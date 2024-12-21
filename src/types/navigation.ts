export type NavItem = {
  title: string;
  href: string;
  description?: string;
};

export type MainNavItem = {
  title: string;
  href: string;
  items: NavItem[];
};
