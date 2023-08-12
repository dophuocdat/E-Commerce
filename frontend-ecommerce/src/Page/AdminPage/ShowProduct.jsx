import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
// import img from "../../images/Screenshot from 2023-07-26 22-18-29.png";

const ShowProduct = ({ items }) => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [image, setImage] = useState("");

  const totalPageCount = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = items.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if ((newPage) => 1 && newPage <= totalPageCount) {
      setCurrentPage(newPage);
    }
  };

  function decodeBase64AndDisplayImage(base64Data) {
    const imageBytes = atob(base64Data); //decode

    //convert byte array to unit8Array
    const unit8Array = new Uint8Array(imageBytes.length);
    for (let i = 0; i < imageBytes.length; i++) {
      unit8Array[i] = imageBytes.charCodeAt(i);
    }

    //create aB Blob from the Unit8Array
    const blob = new Blob([unit8Array], { type: "image/jpg" });

    //Generate the URL for the Blob
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }

  return (
    <div>
      <div>
        <TableContainer>
          <Table size="lg" variant="simple" colorScheme="linkedin">
            <Thead>
              <Tr>
                <Th>Product ID</Th>
                <Th>Product Name</Th>
                <Th>Product Image</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Quality in Stock</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentProducts.map((p, index) => {
                return (
                  <Tr key={index}>
                    <Td>{p.productId}</Td>
                    <Td>{p.name}</Td>
                    <Td width={"1"} height={"1"}>
                      <img
                        src={decodeBase64AndDisplayImage(p.imagePath)}
                        alt=""
                      />
                    </Td>
                    <Td isNumeric>{p.price}</Td>
                    <Td isNumeric>{p.quantityInStock}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Product ID</Th>
                <Th>Product Name</Th>
                <Th isNumeric>Price</Th>
                <Th isNumeric>Quality in Stock</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <div>
          <Button onClick={() => handlePageChange(1)}>First</Button>
          <Button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </Button>
          {Array.from({ length: totalPageCount }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              colorScheme={index + 1 === currentPage ? "blue" : "gray"}
            >
              {index + 1}
            </Button>
          ))}
          <Button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </Button>
          <Button onClick={() => handlePageChange(totalPageCount)}>Last</Button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
