import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: ":dashboard", icon: HomeIcon, current: true },
  { name: "Team", href: ":team", icon: UsersIcon, current: false },
  { name: "Projects", href: ":projects", icon: FolderIcon, current: false },
  { name: "Calendar", href: ":calendar", icon: CalendarIcon, current: false },
  {
    name: "Documents",
    href: "#document",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "#reports", icon: ChartPieIcon, current: false },
];
export const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];

export function classNames(...classes: unknown[]) {
  return classes.filter(Boolean).join(" ");
}
export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
