import React, { useState } from "react";
import Property from "../../components/property";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { fetchProperties, baseUrl } from "../../utils/fetch";
import { AiFillFilter } from "react-icons/ai";
import noresult from "../../public/noresult.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchProperties from "../../components/search";

const Search = ({ data }) => {
  const [filter, setFilter] = useState(false);
  const router = useRouter();

  return (
    <Flex direction="column">
      <Flex
        direction="column"
        bg="gray.100"
        marginTop="2"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="170px"
          onClick={() => setFilter((prev) => !prev)}
          cursor="pointer"
          fontSize="sm"
          p="2em"
        >
          <Text>Filter Properties</Text>
          <Icon as={AiFillFilter} color="blue.300" />
        </Flex>
        {filter && <SearchProperties />}
      </Flex>
      <Text p="2em 9em" paddingBottom="0" fontWeight="black" fontSize="xl">
        Properties {router.query.purpose}
      </Text>
      {data.length === 0 ? (
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          p="2em"
        >
          <Image src={noresult} alt="no result" />
          <Text fontWeight="black">No result</Text>
        </Flex>
      ) : (
        <Flex
          flexWrap="wrap"
          position="relative"
          alignItems="center"
          justifyContent="center"
          p="4em"
        >
          {data.map((property) => {
            return <Property property={property} />;
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || ("for-rent" && "for-sale");
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchProperties(
    `${baseUrl}?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      data: data.hits,
    },
  };
}
