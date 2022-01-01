import React from "react";
import { Grid } from "@chakra-ui/react";

const defaultProps = {
  // Design props
  cardWidth: "180px",
  cardHeight: "230px",
  cardGap: "3em",
};

export default function CardDeck(props = defaultProps) {
  props = { ...defaultProps, ...props };

  return (
    <Grid
      p={7}
      overflowY={"scroll"}
      width={"100%"}
      height={"80vh"}
      gridAutoRows={"auto"}
      gridTemplateRows={
        "repeat(auto-fill, minmax(" + props.cardHeight + ", 1fr))"
      }
      gridTemplateColumns={
        "repeat(auto-fill, minmax(" + props.cardWidth + ", 1fr))"
      }
      gridGap={props.cardGap}
      justifyItems={"center"}
      alignItems={"center"}
    >
      {props.children}
    </Grid>
  );
}
