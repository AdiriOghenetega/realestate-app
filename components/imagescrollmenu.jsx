import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Box, Flex, Icon,useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
 
  return (
    <Flex
      onClick={() => scrollNext()}
      alignItems="center"
      justifyContent="flex-end"
      p="1"
    >
      <Icon as={BsArrowRightCircle} fontSize="2xl" />
    </Flex>
  );
};
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex
      onClick={() => scrollPrev()}
      alignItems="center"
      justifyContent="flex-start"
      p="1"
    >
      <Icon as={BsArrowLeftCircle} fontSize="2xl" />
    </Flex>
  );
};

const ImageScrollMenu = ({ data }) => {
  const [mobileView, laptopView] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px)",
  ]);
  return (
    <ScrollMenu LeftArrow={laptopView ? LeftArrow:null} RightArrow={laptopView ? RightArrow:null}>
      {data.map((item) => {
        return (
          <Box key={item.id} w={laptopView ? "910px":"370px"} height="300px" overflow="hidden" p="1" position="relative">
            <Image
              src={item.url}
              // width={1000}
              // height={500}
              fill
              object-fit="cover"
              alt="property-photos"
              placeholder="blur"
              blurDataURL={item.url}
              sizes="(max-width:500px) 100px,(max-width:1023px) 700px,1000px"
            />
          </Box>
        );
      })}
    </ScrollMenu>
  );
};

export default ImageScrollMenu;
