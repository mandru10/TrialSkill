import { useState } from "react";
import { ILinkItem } from "./components/LinkItem/types";

// Example of custom hook, for the component, in this case "Header", the naming convention is use`componentName`
export const useHeader = () => {
  // For naming convention, it would be better to give a better variable / constant name
  // in this case `header` represents when the sidebar is showing or not, I think [isSidebarOpen, setIsSidebarOpen] would suit better
  const [header, setHeader] = useState(false);

  const linkItems: ILinkItem[] = [
    {
      linkTo: "/",
      title: "Home",
    },
    {
      linkTo: "/about",
      title: "About",
    },
    {
      linkTo: "/",
      title: "Packages",
    },
    {
      linkTo: "/about",
      title: "Cooming Soon",
    },
    {
      linkTo: "/about",
      title: "Testimonials",
    },
  ];

  return {
    linkItems,
    header,
    setHeader,
  };
};
