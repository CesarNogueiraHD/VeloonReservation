import Link from "next/link";
import type { ReactElement } from "react";
import type { UrlObject } from "url";

interface ItemMenuProps {
  title: string;
  url: UrlObject | string;
  icon: ReactElement;
}
export default function ItemMenu(props: ItemMenuProps) {
  return (
    <li className="h-10 flex items-center pl-3 hover:bg-[#8106ab]">
      {props.icon}
      <Link href={props.url} className="ml-3 text-lg">
        {props.title}
      </Link>
    </li>
  );
}
