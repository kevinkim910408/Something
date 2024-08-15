import { Drawer } from "@/components/ui/drawer";
import { navigation } from "@/const";
import Link from "next/link";
import React from "react";

interface NavigationMenuProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

const NavigationMenu = ({ isMenuOpen, closeMenu }: NavigationMenuProps) => {
  return (
    <Drawer
      open={isMenuOpen}
      onClose={closeMenu}
      openFrom="right"
      heading="Menu"
    >
      <div className="px-4 py-2 flex flex-col">
        {navigation.map((navi) => {
          return (
            <Link
              key={navi.name}
              href={navi.to}
              className="py-2"
              onClick={closeMenu}
            >
              - {navi.title}
            </Link>
          );
        })}
      </div>
    </Drawer>
  );
};

export default NavigationMenu;
