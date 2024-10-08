import { v4 as uuid } from "uuid";

export const serviceList = [
  { id: uuid(), title: "windows", link: "/services/window", prefetch: true },
  { id: uuid(), title: "doors", link: "/services/door", prefetch: true },
  {
    id: uuid(),
    title: "entry doors",
    link: "/services/entry-door",
    prefetch: true,
  },
];
