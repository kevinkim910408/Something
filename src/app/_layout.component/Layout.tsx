"use client";

import NavigationMenu from "../_layout.component/NavigationMenu";
import { ModeToggle } from "./ModeTogle";
import { useDrawer } from "@/components/ui";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between items-center">
      <Header />
      <div className="min-h-content max-w-[100rem] w-11/12">{children}</div>
      <Footer />
    </div>
  );
};

export const Header = () => {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  return (
    <div className="h-14 w-full flex justify-center">
      <div className="max-w-[100rem] w-11/12 flex justify-between py-4">
        <div>logo</div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <button onClick={openMenu}>
            <HamburgerMenuIcon width={40} height={40} />
          </button>
        </div>
      </div>

      <NavigationMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="h-11 w-full flex justify-center">
      <div className="max-w-[100rem] w-11/12 flex justify-between py-4">dd</div>
    </div>
  );
};
