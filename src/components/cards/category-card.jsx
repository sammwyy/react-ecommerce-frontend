import { Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const defaultProps = {
  link: "",
  image: "",
  gradient: ["8BC6EC", "9599E2"],
};

export default function CategoryCard(props = defaultProps) {
  props = { ...defaultProps, ...props };
  return (
    <Link
      as={RouterLink}
      to={props.link}
      backgroundImage={
        "linear-gradient(62deg, #" +
        props.gradient[0] +
        " 0%, #" +
        props.gradient[1] +
        " 100%)"
      }
      padding={2}
      borderRadius={10}
      maxHeight={"78px"}
      maxWidth={"78px"}
      m={1}
    >
      <Image src={props.image} width={"100%"} filter={"invert(1)"} />
    </Link>
  );
}
