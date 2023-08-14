import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const UpdateProductModal = ({ onClose, isOpen, item }) => {

console.log(item);

  return (
    <div className="border w-full bg-red-700">
      <div className="w-full">
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {/* <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="80%"
            backdropBlur="2px"
          /> */}
          <ModalContent h={"4xl"} width={"1000px"}>
            <div className="">
              <div>UPDATE PRODUCT</div>
              <hr />
              <div>
                <div>Product id: </div>
                <span>{}</span>
                <input type="text" />
              </div>
            </div>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default UpdateProductModal;
