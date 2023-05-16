import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { Box, Grid, Image, Heading, Text, Flex } from "@chakra-ui/react";

const Beers = () => {
  const [beers, setBeers] = useState([]);

  // using axios just to see the difference
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        if (response.status === 200) {
          setBeers(response.data);
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching beers", error);
      }
    };

    fetchBeers();
  }, []);

  return (
    <div>
      <Header />
      <Box p="4">
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr 1fr",
          }}
          gap={6}
        >
          {beers.map((beer) => (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <Box borderWidth="2px" borderRadius="lg" overflow="hidden">
                <Box>
                  <Image
                    boxSize="10rem"
                    src={beer.image_url}
                    alt={beer.name}
                    w="100%"
                    objectFit="contain"
                    mt="3"
                  />
                </Box>
                <Flex direction="column" justify="center" align="center" p="4">
                  <Heading size="md" textAlign="center">
                    {beer.name}
                  </Heading>
                  <Text mt={2} fontStyle="italic" textAlign="center">
                    "{beer.tagline}"
                  </Text>
                  <Text
                    mt={2}
                    fontWeight="bold"
                    color="gray.500"
                    textAlign="center"
                    fontSize="sm"
                  >
                    {beer.contributed_by
                      ? beer.contributed_by.replace(/<.*>/, "")
                      : "Unknown"}
                  </Text>
                </Flex>
              </Box>
            </Link>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Beers;
