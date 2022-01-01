import { Badge, Box, Button, Flex, IconButton, Image } from "@chakra-ui/react";
import { FaStar, BsHeart, BsHeartFill, BiBasket } from "react-icons/all";

const defaultProps = {
  // Design props
  borderRadius: "xl",
  color: "white",
  width: "180px",
  height: "230px",
  // Product props
  productBadge: "New",
  productImage: "",
  productTitle: "Product Name",
  productPrice: "$12.34",
  productRating: 5,
  productFaved: false,
};

function ProductRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar color={"#ffffaa"} />);
    } else {
      stars.push(<FaStar />);
    }
  }
  return stars;
}

export default function ProductCard(props = defaultProps) {
  props = { ...defaultProps, ...props };

  return (
    <Flex
      {...props}
      background={"url('" + props.productImage + "')"}
      backgroundColor={"#80D0C7"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      alignItems={"flex-end"}
    >
      <Box
        width={"100%"}
        background={"blackAlpha.500"}
        p={2}
        borderBottomRadius={props.borderRadius}
      >
        <Flex>
          <Box fontSize={14} fontWeight={"semibold"} width={"100%"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              {props.productTitle}
              <Flex>{props.productFaved ? <BsHeartFill /> : <BsHeart />}</Flex>
            </Flex>
            <Flex
              fontSize={16}
              fontWeight={"bold"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Flex alignItems={"center"}>
                {props.productPrice}
                <Flex fontSize={13} ml={2}>
                  <ProductRating rating={props.productRating} />
                </Flex>
              </Flex>
              <Box fontSize={16} fontWeight={"semibold"}>
                <BiBasket />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
