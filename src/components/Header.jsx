import { Box, Link, Icon, Flex } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <Box bg="#00afdb" p={4}>
      <Flex justify="center" align="center" h="100%">
        <Link href="/">
          <Icon as={FaHome} w={12} h={12} color="white" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
