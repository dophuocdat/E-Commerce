import React from "react";
import Search from "../../Components/Search/Search";
import { BiAddToQueue } from "react-icons/bi";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Input,
} from "@chakra-ui/react";
const AddProduct = () => {
  return (
    <div className="w-screen">
      <div className="w-full flex justify-center items-center py-5 my-2">
        <h1 className="text-[3rem] font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Add Product
        </h1>
      </div>
      <div>
        <div className="flex justify-center">
          <Search />
        </div>
        <hr />
        <div className="flex justify-center items-center py-2">
          <div className="w-2/3 border px-10 text-[3rem] flex items-center gap-2 cursor-pointer">
            <Accordion allowMultiple className="w-full">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <div className="flex items-center text-2xl gap-2">
                        <BiAddToQueue /> Add Product
                      </div>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={2} fontSize={30}>
                  <div className="flex flex-col gap-3 rounded-lg w-full">
                    <Stack spacing={3}>
                      <Input placeholder="extra small size" size="md" />
                      <Input placeholder="small size" size="md" />
                      <Input placeholder="medium size" size="md" />
                      <Input placeholder="large size" size="md" />
                    </Stack>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
