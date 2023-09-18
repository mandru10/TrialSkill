import { useState } from "react";
import { ILinkItem } from './types'

export const useHeader = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const linkItems: ILinkItem[] = [
    {
      linkTo: "/",
      title: "Home",
    },
    {
      linkTo: "/About",
      title: "About",
    },
    {
      linkTo: "/Packages",
      title: "Packages",
    },
    {
      linkTo: "/CoomingSoon",
      title: "Cooming Soon",
    },
    {
      linkTo: "/Testimonials",
      title: "Testimonials",
    },
  ];

  return {
    linkItems,
    isSidebarOpen,
    setIsSidebarOpen,
  };
};