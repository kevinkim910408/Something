import { Heading } from "./Text";
import { Dialog, Transition } from "@headlessui/react";
import { Cross1Icon, ChevronLeftIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Fragment, useState } from "react";

/**
 * Drawer component that opens on user click.
 * @param heading - string. Shown at the top of the drawer.
 * @param open - boolean state. if true opens the drawer.
 * @param onClose - function should set the open state.
 * @param openFrom - right, left
 * @param children - react children node.
 */
export function Drawer({
  heading,
  open,
  onClose,
  openFrom = "right",
  children,
  backButton,
}: {
  heading?: string;
  backButton?: boolean;
  open: boolean;
  onClose: (backButton?: boolean) => void;
  openFrom: "right" | "left";
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const offScreen = {
    right: "translate-x-full",
    left: "-translate-x-full",
  };

  const handleClose = () => {
    onClose();
  };

  const handleBack = () => {
    onClose(true);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 left-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-red" />
        </Transition.Child>

        <div className="fixed inset-0 bg-red-black bg-opacity-25">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`fixed inset-y-0 flex max-w-full ${
                openFrom === "right" ? "right-0" : ""
              }`}
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom={offScreen[openFrom]}
                enterTo="translate-x-0"
                leave="transform transition eaWse-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo={offScreen[openFrom]}
              >
                <Dialog.Panel className="w-screen max-w-lg text-left align-middle transition-all transform shadow-xl h-screen-dynamic bg-white dark:bg-black">
                  <header
                    className={`sticky top-0 flex items-center px-6 h-14 sm:px-8 md:px-12 ${
                      heading ? "justify-between" : "justify-end"
                    }`}
                  >
                    {backButton ? (
                      <button
                        type="button"
                        className="p-4 -m-4 transition text-primary hover:text-primary/50"
                        onClick={handleBack}
                        data-test="close-cart"
                      >
                        <ChevronLeftIcon width={20} height={20} />
                      </button>
                    ) : null}
                    {heading !== null ? (
                      <Dialog.Title>
                        <div className="w-full inline-flex items-center">
                          <div>
                            <Heading as="span" size="lead" id="cart-contents">
                              {heading}
                            </Heading>
                          </div>
                        </div>
                      </Dialog.Title>
                    ) : null}
                    <button
                      type="button"
                      className="p-4 -m-4 transition text-primary hover:text-primary/50"
                      onClick={handleClose}
                      data-test="close-cart"
                    >
                      {theme === "dark" ? (
                        <Cross1Icon width={30} height={30} />
                      ) : (
                        <Cross1Icon width={30} height={30} color="black" />
                      )}
                    </button>
                  </header>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

/* Use for associating arialabelledby with the title*/
Drawer.Title = Dialog.Title;

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = useState(openDefault);

  function openDrawer() {
    setIsOpen(true);
  }

  function closeDrawer() {
    setIsOpen(false);
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer,
  };
}
