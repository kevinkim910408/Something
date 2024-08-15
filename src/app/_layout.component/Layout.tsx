"use client";

import NavigationMenu from "../_layout.component/NavigationMenu";
import { useDrawer } from "@/components/ui/drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="min-h-content">{children}</div>
      <Footer />
    </>
  );
};

export const Header = () => {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  return (
    <div className="h-14 p-2">
      <button onClick={openMenu}>
        <HamburgerMenuIcon width={50} height={50} />
      </button>
      <NavigationMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
};

export const Footer = () => {
  return <div className="h-11">Footer</div>;
};
