import { Box, Flex, Heading } from "@chakra-ui/react";
import BannerCard from "../components/cards/banner-card";
import CategoryCard from "../components/cards/category-card";

export default function Main() {
  return (
    <Box px={"10%"} py={"2%"} textAlign={"center"}>
      <Flex alignItems={"center"}>
        <BannerCard title="Hello" subtitle="World" width="50%" />
        <Box width="50%">
          <BannerCard title="Hello" subtitle="World" height="210px" />
          <BannerCard title="Hello" subtitle="World" height="210px" />
        </Box>
      </Flex>
      <Box my={40}>
        <Heading as="h2" size={"lg"}>
          Categories
        </Heading>
        <Flex justifyContent={"space-evenly"} mt={10}>
          <CategoryCard link="#" image="/category-1.png" />
          <CategoryCard link="#" image="/category-2.png" />
          <CategoryCard link="#" image="/category-3.png" />
          <CategoryCard link="#" image="/category-4.png" />
          <CategoryCard link="#" image="/category-5.png" />
          <CategoryCard link="#" image="/category-6.png" />
          <CategoryCard link="#" image="/category-7.png" />
          <CategoryCard link="#" image="/category-8.png" />
          <CategoryCard link="#" image="/category-9.png" />
        </Flex>
      </Box>
    </Box>
  );
}
