import React from "react";
import { Box, Text, Flex, Spacer,Icon,Avatar,useMediaQuery } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import Image from "next/image";
import millify from "millify";
import Link from "next/link"


const Property = ({
  property: {
    coverPhoto,
    isVerified,
    price,
    agency,
    rooms,
    baths,
    title,
    area,
    externalID,
  },
}) => {

  const [mobileView, laptopView] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px)",
  ]);

  return (
    <>
<Link href={`/properties/${externalID}`} passHref>
    <Flex direction="column" position="relative" m={laptopView ? "2":"0"} w={laptopView ? "350px":"100%"} justifyContent="flex-start" flexWrap="wrap" p={laptopView ? "10px 10px":"15px 1px"} >
      <Box position="relative" width="100%" height="320px" >
        <Image
          src={coverPhoto.url}
          fill
          alt="property"
          placeholder="blur"
          blurDataURL={coverPhoto.url}
        />
      </Box>
      <Flex alignItems="center" p="3px 0" w="100%" >
        <Box color="green">{isVerified && <Icon as={GoVerified} />}</Box>
        <Box fontSize="10px" fontWeight="black">AED {millify(price)}</Box>
        <Spacer />
        <Box>
          <Avatar
            src={agency.logo.url}
            size="sm"
          />
        </Box>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" w="60%" color="blue.300">
        {rooms} <Icon as={FaBed} size="6px" /> | {baths} <Icon as={FaBath} size="6px" /> | {millify(area)} sqft{" "}
        <Icon as={BsGridFill} size="6px"  />
      </Flex>
      <Text noOfLines={1}>{`${title.substring(0,45)}...`}</Text>
    </Flex>
</Link>
 
    </>
  );
};

export default Property;
