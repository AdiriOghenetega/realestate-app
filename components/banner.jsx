import React from "react";
import { Box, Text, Flex, Button, useColorModeValue,Spacer,useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ title, desc, cta, url, purpose }) => {

  const [mobileView,laptopView] = useMediaQuery(["(max-width: 600px)","(min-width: 601px)"])

  const bg = useColorModeValue("gray.100", "gray.700");
  const btn_bg = useColorModeValue("gray.100", "gray.500");

  return (
    <Flex
      bg={bg}
      w={laptopView ? "650px":"80%"}
      height={laptopView ? "auto":"20em"}
      alignItems={laptopView ? "center":"flex-start"}
      justifyContent={laptopView ? "space-around":"center"}
      p="0.5em 1em"
      marginTop="1em"
      direction={laptopView ? "row":"column"}
     
    >
      <Box w={laptopView ? "60%":"100%"} height="250px" position="relative" overflow="hidden" >
        <Image
          src={url}
          // height="350"
          // width="450"
          fill
          alt="static image"
          placeholder="blur"
          blurDataURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110799000/13c5ddeb3710480ab040480678519575"
          sizes="(max-width:345px) 100px,(max-width:600px) 250px,(max-width:1023px) 700px,1000px"
        />
      </Box>
      <Flex w={laptopView ? "30%":"100%"} direction="column" alignItems="flex-start" justifyContent="space-between" height={laptopView ? "auto":"10em"} p="2px 0" >
        <Text fontWeight="black" fontSize={laptopView ? "large":"sm"}>{title}</Text>
        <Text fontSize={laptopView ? "sm":"14px"}>{desc}</Text>
        <Text fontSize={laptopView ? "sm":"14px"}>Explore Apartments,Villa,Homes and more...</Text>
        <Link href={`/properties/search?purpose=${purpose}`} passHref>
        <Button bg={btn_bg} size={laptopView ? "sm":"12px"} border="1px solid gray">
          <Text fontSize={laptopView ? "sm":"13px"} p="1">
          {cta}
          </Text>
        </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Banner;
