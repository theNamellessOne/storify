"use client";

import {
  BarChart,
  Blocks,
  Library,
  Package2,
  Percent,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardSidebar() {
  const pathName = usePathname();
  const menuItems = [
    {
      icon: <Package2 />,
      text: "Orders",
      href: "/store/dashboard/orders",
      isSelected: pathName === "/store/dashboard/orders",
    },
    {
      icon: <Library />,
      text: "Collections",
      href: "/store/dashboard/collections",
      isSelected: pathName === "/store/dashboard/collections",
    },
    {
      icon: <Tag />,
      text: "Products",
      href: "/store/dashboard/products",
      isSelected: pathName.includes("/store/dashboard/products"),
    },
    {
      icon: <Blocks />,
      text: "Inventory",
      href: "/store/dashboard/inventory",
      isSelected: pathName === "/store/dashboard/inventory",
    },
    {
      icon: <BarChart />,
      text: "Insights",
      href: "/store/dashboard/insights",
      isSelected: pathName === "/store/dashboard/insights",
    },
    {
      icon: <Percent />,
      text: "Discounts",
      href: "/store/dashboard/discounts",
      isSelected: pathName === "/store/dashboard/discounts",
    },
  ];

  return (
    <aside
      className={
        "fixed w-[320px] h-screen text-white bg-neutral-900 shadow-small"
      }
    >
      <div className={"flex items-center p-4 my-4"}>
        <h1 className={"text-3xl"}>|</h1>
        <h1 className={"mx-auto text-4xl"}>storify</h1>
        <h1 className={"text-3xl"}>|</h1>
      </div>
      <div className={"flex gap-0.5 flex-col"}>
        {menuItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex hover:bg-neutral-800 hover:text-yellow-400 transition-all items-center relative p-4 w-full gap-4 ${
                item.isSelected &&
                "!bg-neutral-800 text-yellow-400 after:h-full after:w-1 after:absolute after:right-0 after:bg-yellow-400 after:rounded"
              }`}
            >
              {item.icon}
              <p className={"font-semibold"}>{item.text}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
