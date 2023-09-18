import { FC } from "react";
import { ILinkItem } from "./types";
import { Link } from "react-router-dom";


const LinkItem: FC<ILinkItem> = ({ linkTo, title }) => {

  return(
  <li className="p-8 text-3xl font-bold cursor-pointer">
    <Link to={linkTo}>{title}</Link>
  </li>
  )
};

export default LinkItem;