import {
  Avatar,
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { BiBell, BiBasket, BiSun, BiMoon } from "react-icons/all";

// import styles from "./navbar.module.sass";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex justifyContent={"space-around"}>
        <Flex alignItems={"center"} p={5}>
          <Image width={"48px"} src="/icon-64.png" />
          <Heading ml={5} fontSize={20}>
            Ecommerce
          </Heading>
        </Flex>

        <Flex alignItems={"center"} width={"30%"}>
          <Input placeholder="Search items..." />
        </Flex>

        <Flex alignItems={"center"}>
          <Flex>
            <IconButton
              variant={"ghost"}
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <BiMoon /> : <BiSun />}
            />
            <IconButton variant={"ghost"} icon={<BiBell />} />
            <IconButton variant={"ghost"} icon={<BiBasket />} />
          </Flex>
          <Avatar mx={3} name="Sammwy" size={"sm"} />
          <Text fontSize={16} fontWeight={"semibold"}>
            Sammwy
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
