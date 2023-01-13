import React from "react";
import Banner from "../components/banner";
import { Flex,useMediaQuery } from "@chakra-ui/react";
import Property from "../components/property";
import { fetchProperties, baseUrl } from "../utils/fetch";

const index = ({ forRent, forSale }) => {
  const [mobileView, laptopView] = useMediaQuery([
    "(max-width: 600px)",
    "(min-width: 601px)",
  ]);
  return (
    <>
    <Flex direction="column" position="relative" >
      <Flex alignItems="center" justifyContent="center">
        <Banner
          title="RENT A HOME"
          desc="Rental Houses for Everyone"
          cta="Explore Renting"
          url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110798997/d9446cee36ba4f839c8fedd0e0b52208"
          purpose= "for-rent"
        />
      </Flex>
      <Flex flexWrap="wrap" position="relative" alignItems="center" justifyContent="center"  p={laptopView ? "4em":"1em 0.5em"} >
        {forRent.map((property) => {
          return <Property key={property.id} property={property} />;
        })}
      </Flex>
      <Flex alignItems="center" justifyContent="center">
        <Banner
          title="BUY A HOME"
          desc="Find,Buy & Own Your Dream Home"
          cta="Explore Buying"
          url="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110799000/13c5ddeb3710480ab040480678519575"
          purpose="for-sale"
        />
      </Flex>
      <Flex flexWrap="wrap" position="relative" alignItems="center" justifyContent="center"  p={laptopView ? "4em":"1em 0.5em"}>
        {forSale.map((property) => {
          return <Property key={property.id} property={property} />;
        })}
      </Flex>
    </Flex>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const propertiesToRent = await fetchProperties(
    `${baseUrl}?locationExternalIDs=5002,6020&hitsPerPage=6&purpose=for-rent`
  );
  const propertiesToSale = await fetchProperties(
    `${baseUrl}?locationExternalIDs=5002,6020&hitsPerPage=6&purpose=for-sale`
  );

  return {
    props: {
      forRent: propertiesToRent.hits,
      forSale: propertiesToSale.hits,
    },
  };
}
