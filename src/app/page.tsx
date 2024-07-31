"use client";

import { Drawer, useDrawer } from "@/components/ui/drawer";

export default function Home() {
  const {
    isOpen: isMenuOpen,
    openDrawer: openMenu,
    closeDrawer: closeMenu,
  } = useDrawer();
  return (
    <>
      <button onClick={openMenu}>ho</button>
      <Drawer
        open={isMenuOpen}
        onClose={closeMenu}
        openFrom="left"
        heading="Menu"
      >
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
        <div>Text</div>
      </Drawer>
    </>
  );
}
