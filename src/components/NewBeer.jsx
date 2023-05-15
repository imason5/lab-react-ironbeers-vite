import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import Header from "./Header";

const NewBeer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: Number(event.target.attenuation_level.value),
      contributed_by: event.target.contributed_by.value,
    };

    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        console.log("Beer added successfully!");
      } else {
        console.log("Failed to add beer.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  const borderColor = useColorModeValue("#00afdb", "#00afdb");

  return (
    <>
      <Header />
      <Box as="form" p={4} onSubmit={onSubmit} maxW="600px" mx="auto" mt={8}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel fontWeight="bold">Name</FormLabel>
          <Input name="name" borderColor={borderColor} />
        </FormControl>
        <FormControl id="tagline" isRequired mb={4}>
          <FormLabel fontWeight="bold">Tagline</FormLabel>
          <Input name="tagline" borderColor={borderColor} />
        </FormControl>
        <FormControl id="description" isRequired mb={4}>
          <FormLabel fontWeight="bold">Description</FormLabel>
          <Textarea name="description" borderColor={borderColor} />
        </FormControl>
        <FormControl id="first_brewed" isRequired mb={4}>
          <FormLabel fontWeight="bold">First Brewed</FormLabel>
          <Input name="first_brewed" borderColor={borderColor} />
        </FormControl>
        <FormControl id="brewers_tips" isRequired mb={4}>
          <FormLabel fontWeight="bold">Brewers Tips</FormLabel>
          <Input name="brewers_tips" borderColor={borderColor} />
        </FormControl>
        <FormControl id="attenuation_level" isRequired mb={4}>
          <FormLabel fontWeight="bold">Attenuation Level</FormLabel>
          <Input
            name="attenuation_level"
            type="number"
            borderColor={borderColor}
          />
        </FormControl>
        <FormControl id="contributed_by" isRequired mb={4}>
          <FormLabel fontWeight="bold">Contributed By</FormLabel>
          <Input name="contributed_by" borderColor={borderColor} />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Add Beer
        </Button>
      </Box>
    </>
  );
};

export default NewBeer;
