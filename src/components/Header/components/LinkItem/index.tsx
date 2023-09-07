import { FC } from "react";
import { ILinkItem } from "./types";

// I added LinkItem in Header components, because it is not used globally, only here, it helps for better readibility

const LinkItem: FC<ILinkItem> = ({ linkTo, title }) => {
  // TODO - Use link to navigate to another page
  return <li className="p-8 text-3xl font-bold cursor-pointer">{title}</li>;
};

export default LinkItem;
