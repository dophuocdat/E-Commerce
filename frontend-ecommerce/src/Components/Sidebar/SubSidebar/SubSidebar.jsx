import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SubSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="w-full bg-slate-600">
      <div className="flex items-center ">
        <Button colorScheme="" onClick={onOpen}>
          <div className="text-white text-lg flex  items-center gap-2 ">
            <GiHamburgerMenu />
            <span>All</span>
          </div>
        </Button>
        <div className="flex items-center font-serif gap-5 text-sm text-white">
          <span className="hover:border w-fit h-full">Today's Deals</span>
          <span className="hover:border w-fit h-full">Buy Again</span>
          <span className="hover:border w-fit h-full">Customer Service</span>
          <span className="hover:border w-fit h-full">Registry</span>
          <span className="hover:border w-fit h-full">Gift Cards</span>
          <span className="hover:border w-fit h-full">Sell</span>
        </div>
      </div>

      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bgColor={"darkgray"}>
            Hello, Do Phuoc Dat
          </DrawerHeader>
          <DrawerBody>
            <div>
              <div className="divide-y-2  divide-y-reverse flex flex-col gap-4">
                <h1 className="font-semibold text-xl pb-3">
                  Digital Content & Devices
                </h1>
                <div className="flex flex-col gap-4 pb-3">
                  <p>Amazon Music</p>
                  <p>Kindle E-readers & Books</p>
                  <p>Amazon Appstore</p>
                </div>
              </div>
              <div className="divide-y-2  divide-y-reverse flex flex-col gap-4">
                <h1 className="font-semibold text-xl pb-3">
                  Shop By Department
                </h1>
                <div className="flex flex-col gap-4 pb-3">
                  <p>Electronics</p>
                  <p>Computers</p>
                  <p>Smart Home</p>
                  <p>Arts & Crafts</p>
                  <p>See All</p>
                </div>
              </div>
              <div className="divide-y-2  divide-y-reverse flex flex-col gap-4">
                <h1 className="font-semibold text-xl pb-3">
                  Programs && Features
                </h1>
                <div className="flex flex-col gap-4 pb-3">
                  <p>Gift Cards</p>
                  <p>Shop By Interest</p>
                  <p>Amazon Live</p>
                  <p>International Shopping</p>
                  <p>See All</p>
                </div>
              </div>
              <div className=" flex flex-col gap-4">
                <h1 className="font-semibold text-xl pb-3">Help & Settings</h1>
                <div className="flex flex-col gap-4 pb-3">
                  <p>Your Account</p>
                  <p>English</p>
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default SubSidebar;
