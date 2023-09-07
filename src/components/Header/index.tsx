import { HiMenuAlt3 } from "react-icons/hi";
import { SiPlanetscale } from "react-icons/si";
import { useHeader } from "./hooks";
import { ILinkItem } from "./components/LinkItem/types";
import LinkItem from "./components/LinkItem";

// The component would be better to be separated into a folder
const Header = () => {
  const { header, setHeader, linkItems } = useHeader();

  return (
    <div className="absolute flex items-center justify-between w-full p-4">
      <div className="flex items-center justify-start w-full gap-1 p-4">
        <SiPlanetscale className="z-20 text-white" size={25} />
        <h1 className="z-20 text-2xl font-bold text-white cursor-default">
          Travelindo
        </h1>
      </div>
      <HiMenuAlt3
        onClick={() => {
          // if is number we want to increment we can set the state like this setNumber(prevState => prevState + 1); or if is boolean we can use it like following
          setHeader((prevState) => !prevState);
        }}
        className="z-20 text-white cursor-pointer"
        size={25}
      />
      <div
        className={
          header
            ? "ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        {/* Best practice it would be better to have the link items in an array */}
        <ul className="fixed flex flex-col items-center justify-center w-full h-full">
          {linkItems?.map((linkItem: ILinkItem, idx: number) => (
            <LinkItem key={idx} {...linkItem} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
