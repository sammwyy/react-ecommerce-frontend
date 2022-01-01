import { Box, Flex, Text } from "@chakra-ui/react";

const defaultProps = {
  title: "",
  subtitle: "",
  width: "100%",
  height: "420px",
};

export default function BannerCard(props = defaultProps) {
  props = { ...defaultProps, ...props };

  return (
    <Flex
      background={"red"}
      alignItems={"flex-end"}
      p={7}
      borderRadius={15}
      width={props.width}
      height={props.height}
      backgroundImage={"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"}
      color={"white"}
      m={1}
      display={"inline-flex"}
      textAlign={"left"}
    >
      <Box>
        <Text fontSize={28}>{props.title}</Text>
        <Text fontSize={18}>{props.subtitle}</Text>
      </Box>
    </Flex>
  );
}
