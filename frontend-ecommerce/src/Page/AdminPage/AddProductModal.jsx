import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Stack,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import Search from "../../Components/Search/Search";
import { BiAddToQueue } from "react-icons/bi";
import axios from "axios";
const AddProductModal = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantityInStock, setQuantityInStock] = useState(10);
  const [type, setType] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantityInStock", quantityInStock);
    formData.append("type", type);
    formData.append("file", image);

    await axios
      .post("http://localhost:8080/ecommerce/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="flex justify-center">
        <Search />
      </div>
      <hr />
      <div className="flex justify-center items-center py-2">
        <div className="w-2/3  px-10 text-[3rem] flex items-center gap-2 cursor-pointer rounded-b-xl bg-slate-200">
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
                <div className="flex flex-col gap-3 r ounded-lg w-full">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                  ></Input>
                  <Stack spacing={3}>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.600"
                        fontSize="1.4rem"
                        children="✍️"
                      />
                      <Input
                        placeholder="Name Product"
                        border={"1px"}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.600"
                        fontSize="1.4rem"
                        children="⌨"
                      />
                      <Input
                        placeholder="Short Description"
                        border={"1px"}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.600"
                        fontSize="1.4rem"
                        children="$"
                      />
                      <Input
                        placeholder="Enter price"
                        border={"1px"}
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        color="gray.600"
                        fontSize="1.4rem"
                        children="∞"
                      />
                      <Input
                        placeholder="Quantity in Stock"
                        border={"1px"}
                        type="number"
                        onChange={(e) => setQuantityInStock(e.target.value)}
                      />
                    </InputGroup>
                    <Select
                      placeholder="Select Type"
                      border={"1px"}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option value="Children">Children</option>
                      <option value="Self-Help">Self-Help</option>
                      <option value="Nonfiction">Nonfiction</option>
                      <option value="Tragedy">Tragedy</option>
                    </Select>
                  </Stack>
                  <div className="w-full flex items-center justify-center  ">
                    <button
                      className="w-2/6 rounded-lg bg-slate-400 hover:bg-slate-700 hover:text-white"
                      onClick={handleUpload}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
