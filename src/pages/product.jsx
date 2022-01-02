import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/all";

function ProductImage({ image }) {
  return (
    <Button variant="ghost" height="80px" margin={3} display="block">
      <Image src={image} height="100%" />
    </Button>
  );
}

function ProductRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar color={"#ffffaa"} />);
    } else {
      stars.push(<FaStar />);
    }
  }

  return <Flex>{stars}</Flex>;
}

export default function Product() {
  return (
    <Flex
      px={"10%"}
      py={"2%"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Flex alignItems={"center"}>
        <Box>
          <ProductImage image="/item-1.png" />
          <ProductImage image="/item-1.png" />
          <ProductImage image="/item-1.png" />
          <ProductImage image="/item-1.png" />
          <ProductImage image="/item-1.png" />
          <ProductImage image="/item-1.png" />
        </Box>
        <Box mx={14}>
          <Image src="/item-1.png" height="70vh" />
        </Box>
        <Box>
          <Heading as="h2">Name</Heading>
          <Flex alignItems={"center"}>
            <ProductRating rating={4} /> <Text ml={3}>(7 Rating)</Text>
          </Flex>
          <Heading as="h3" fontSize={20}>
            12.34${" "}
            <Text
              as="del"
              ml={2}
              display="inline-block"
              fontSize={15}
              color="gray.500"
            >
              34.56$
            </Text>
          </Heading>
          <Box my={10}>
            <Heading as="h3" fontSize={17} mb={2}>
              Color
            </Heading>
            <Flex>
              <Button
                mx={1}
                background={"green.200"}
                borderRadius={"50%"}
              ></Button>
              <Button
                mx={1}
                background={"cyan"}
                borderRadius={"50%"}
                border={"3px solid black"}
              ></Button>
              <Button
                mx={1}
                background={"pink.200"}
                borderRadius={"50%"}
              ></Button>
              <Button
                mx={1}
                background={"purple.200"}
                borderRadius={"50%"}
              ></Button>
            </Flex>
          </Box>
          <Box my={10}>
            <Heading as="h3" fontSize={17} mb={2}>
              Size
            </Heading>
            <Select width={"130px"} value={"option1"}>
              <option value="option1">XL</option>
              <option value="option1">MD</option>
              <option value="option1">SM</option>
            </Select>
          </Box>
          <Flex mt={5}>
            <Button colorScheme={"purple"} mr={3}>
              Add to cart
            </Button>
            <Button variant={"outline"} colorScheme={"purple"}>
              Similar products
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
