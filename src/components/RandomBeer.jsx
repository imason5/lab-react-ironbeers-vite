import { useEffect, useState } from "react";
import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import Header from "./Header";

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  // using fetch
  useEffect(() => {
    const fetchBeer = async () => {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      if (response.ok) {
        const data = await response.json();
        setBeer(data);
      } else {
        console.error("Failed to fetch random beer.");
      }
    };

    fetchBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>; // TODO: replace with loading spinner
  }

  return (
    <>
      <Header />
      <Box p={4}>
        <Box maxW="sm" mx="auto" mt={8} textAlign="center">
          <Image
            src={beer.image_url}
            alt={beer.name}
            objectFit="contain"
            boxSize="20rem"
            mx="auto"
          />
          <VStack align="center" mt={4}>
            <Heading as="h2" size="xl">
              {beer.name}
            </Heading>
            <Text fontStyle="italic">"{beer.tagline}"</Text>
            <Text>
              <strong>First brewed:</strong> {beer.first_brewed}
            </Text>
            <Text>
              <strong>Attenuation level:</strong> {beer.attenuation_level}
            </Text>
            <Text>
              <strong>Description:</strong> {beer.description}
            </Text>
            <Text>
              <strong>Contributed by:</strong>{" "}
              {beer.contributed_by.split(" <")[0]}
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default RandomBeer;
