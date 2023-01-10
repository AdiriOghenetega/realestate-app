import React from "react";
import { Box, Text, Flex, Spacer,Icon,Avatar } from "@chakra-ui/react";
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
  return (
    <>
<Link href={`/properties/${externalID}`} passHref>
    <Flex direction="column" position="relative" w="350px" justifyContent="flex-start" flexWrap="wrap" p="5">
      <Box borderRadius="50%">
        <Image
          src={coverPhoto.url}
          width={350}
          height={350}
          alt="property"
          placeholder="blur"
          blurDataURL={coverPhoto.url}
        />
      </Box>
      <Flex alignItems="center">
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
      <Text noOfLines={1}>{title}</Text>
    </Flex>
</Link>
 
    </>
  );
};

export default Property;
