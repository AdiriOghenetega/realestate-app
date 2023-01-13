import React, { useState } from "react";
import { fetchProperties } from "../../utils/fetch";
import ImageScrollMenu from "../../components/imagescrollmenu";
import {
  Box,
  Flex,
  Text,
  Spacer,
  Icon,
  Avatar,
  useMediaQuery,
} from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill, BsWhatsapp } from "react-icons/bs";
import { FcIphone } from "react-icons/fc";
import millify from "millify";
import parse from "html-react-parser";

const Details = ({ detail }) => {
  const [truncate, setTruncate] = useState(true);
  const [mobileView, laptopView] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px)",
  ]);

  return (
    <Flex direction="column" alignItems={laptopView ? "flex-start" : "center"}>
      <Box w="100%">
        <ImageScrollMenu data={detail.photos} />
      </Box>
      <Flex alignItems="center" w="100%" p="1em 2em">
        <Box color="green">
          {detail?.isVerified && <Icon as={GoVerified} />}
        </Box>
        <Box fontSize="10px" fontWeight="black" marginLeft="2">
          AED {millify(detail?.price)}
        </Box>
        <Spacer />
        <Box>
          <Avatar src={detail?.agency?.logo?.url} size="sm" />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="300px"
        color="blue.300"
        p="0 2em"
      >
        {detail?.rooms} <Icon as={FaBed} size="6px" /> | {detail?.baths}{" "}
        <Icon as={FaBath} size="6px" /> | {millify(detail?.area)} sqft{" "}
        <Icon as={BsGridFill} size="6px" />
      </Flex>
      <Text p="1em 2em">{detail?.title}</Text>
      <Text p="0 2em">
        {truncate
          ? parse(detail?.description.substring(0, 400))
          : parse(detail?.description)}
      </Text>
      <Text
        fontSize="sm"
        color="blue.300"
        p="0 2em"
        onClick={() => setTruncate((prev) => !prev)}
      >
        {truncate ? "More details..." : "See less.."}
      </Text>
      <Box p="1em 2em">
        <Flex alignItems="center" justifyContent="space-between" w="150px">
          <Text fontWeight="800" fontSize="sm" m="0">
            TYPE :
          </Text>
          <Text marginBottom="1">{detail?.type}</Text>
        </Flex>
        <Flex alignItems="center" justifyContent="space-between" w="150px">
          <Text fontWeight="800" fontSize="sm" m="0">
            PURPOSE :
          </Text>
          <Text marginBottom="1">{detail?.purpose}</Text>
        </Flex>
        {detail?.furnishingStatus && (
          <Flex alignItems="center" justifyContent="space-between" w="180px">
            <Text fontWeight="800" fontSize="sm" m="0">
              FURNISHING STATUS :
            </Text>
            <Text marginBottom="1">{detail?.furnishingStatus}</Text>
          </Flex>
        )}
      </Box>
      <Box p="2em">
        {detail?.amenities.length !== 0 ? (
          <Text fontSize="1em" fontWeight="black">
            Amenities
          </Text>
        ) : null}
        <Flex flexWrap="wrap">
          {detail?.amenities?.map((amenity) =>
            amenity.amenities?.map((item) => {
              return (
                <Text
                  m="2"
                  p="2"
                  borderRadius="4"
                  fontSize="sm"
                  color="blue.300"
                  bg="gray.100"
                  key={item.rank}
                >
                  {item.text} | {item.value === "True" ? "Yes" : item.value}
                </Text>
              );
            })
          )}
        </Flex>
      </Box>
      <Box p="0 2em">
        <Text
          fontSize="1em"
          fontWeight="black"
          textAlign={laptopView ? "left" : "center"}
        >
          Contact Agent
        </Text>
        <Flex
          p="1em 0"
          direction="column"
          alignItems={laptopView ? "flex-start" : "center"}
        >
          <Flex
            direction={laptopView ? "row" : "column"}
            alignItems="center"
            justifyContent="space-between"
            w={laptopView ? "300px" : "100%"}
          >
            <Text fontWeight="800" fontSize="12px" m="0">
              CONTACT NAME :
            </Text>
            <Text fontSize="sm">
              {detail?.contactName}
            </Text>
          </Flex>
          <Flex
            direction={laptopView ? "row" : "column"}
            alignItems="center"
            justifyContent="space-between"
            w={laptopView ? "300px" : "100%"}
          >
            <Text fontWeight="800" fontSize="12px" m="0">
              PHONE <Icon as={FcIphone} /> :
            </Text>
            <Text marginBottom="1" fontSize="sm">
              <a href={`tel:${detail?.phoneNumber.mobile}`}>
                {detail?.phoneNumber.mobile}
              </a>
            </Text>
          </Flex>
          <Flex
            direction={laptopView ? "row" : "column"}
            alignItems="center"
            justifyContent="space-between"
            w={laptopView ? "300px" : "100%"}
          >
            <Text fontWeight="800" fontSize="12px" m="0">
              WHATSAPP <Icon as={BsWhatsapp} color="green" /> :
            </Text>
            <Text marginBottom="1" fontSize="sm">
              <a href={`tel:${detail?.phoneNumber.whatsapp}`}>
                {detail?.phoneNumber.whatsapp}
              </a>
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column"></Flex>
      </Box>
    </Flex>
  );
};

export default Details;

export async function getServerSideProps({ query }) {
  const { id } = query;

  const data = await fetchProperties(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`
  );

  return {
    props: {
      detail: data,
    },
  };
}
