import {
  Box,
  Button,
  Flex,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import CardDeck from "../components/cards/card-deck";
import ProductCard from "../components/cards/product-card";

function FilterBox({ title, children }) {
  return (
    <Box p={5} borderRadius={10}>
      <Text fontWeight={"semibold"} fontSize={18}>
        {title}
      </Text>
      <Box p={1}>{children}</Box>
    </Box>
  );
}

function LinkButton({ children }) {
  return (
    <Button display={"block"} variant="link">
      {children}
    </Button>
  );
}

function PriceInput({ placeholder }) {
  return (
    <NumberInput size="xs" m={1}>
      <NumberInputField placeholder={placeholder} />
    </NumberInput>
  );
}

export default function Search() {
  return (
    <Box px={"10%"} py={"2%"}>
      <Flex justifyContent={"space-between"}>
        <Box width={"20%"}>
          <FilterBox title="Price">
            <LinkButton>Under 10$</LinkButton>
            <LinkButton>Under 25$</LinkButton>
            <LinkButton>Under 50$</LinkButton>

            <Flex mt={1} alignItems={"center"} width={"70%"}>
              <PriceInput placeholder={"Min"} />{" "}
              <PriceInput placeholder={"Max"} /> <Button size="xs">Go</Button>
            </Flex>
          </FilterBox>

          <FilterBox title="Condition">
            <RadioGroup value={"1"}>
              <Stack direction="column">
                <Radio value="1">Any</Radio>
                <Radio value="2">New</Radio>
                <Radio value="3">Used</Radio>
              </Stack>
            </RadioGroup>
          </FilterBox>

          <FilterBox title="Delivery">
            <RadioGroup value={"1"}>
              <Stack direction="column">
                <Radio value="1">Any</Radio>
                <Radio value="2">Free ship</Radio>
                <Radio value="3">Cheap ship</Radio>
              </Stack>
            </RadioGroup>
          </FilterBox>

          <FilterBox title="Brand">
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
            <LinkButton>Example</LinkButton>
          </FilterBox>
        </Box>

        <Box width="80%" height="84vh">
          <Flex justifyContent={"flex-end"} mb={5}>
            Sort by
            <Select width={"130px"} value={"option1"} size="sm" ml={3}>
              <option value="option1">Featured</option>
              <option value="option1">Price: Low to High</option>
              <option value="option1">Price: High to Low</option>
            </Select>
          </Flex>

          <CardDeck>
            <ProductCard productImage="/item-1.png" />
            <ProductCard productImage="/item-2.jpeg" />
            <ProductCard productImage="/item-3.png" />
            <ProductCard productImage="/item-4.jpg" />
            <ProductCard productImage="/item-5.jpg" />
            <ProductCard productImage="/item-6.jpg" />
            <ProductCard productImage="/item-7.jpg" />
            <ProductCard productImage="/item-8.jpg" />
            <ProductCard productImage="/item-9.jpeg" />
            <ProductCard productImage="/item-10.jpg" />
            <ProductCard productImage="/item-11.jpg" />
            <ProductCard productImage="/item-12.webp" />
            <ProductCard productImage="/item-13.jpg" />
            <ProductCard productImage="/item-14.jpg" />
            <ProductCard productImage="/item-15.jpg" />
            <ProductCard productImage="/item-16.jpg" />
          </CardDeck>
        </Box>
      </Flex>
    </Box>
  );
}
