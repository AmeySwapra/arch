import { Box, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const SocialBar = () => {
  return (
    <Box 
      position="fixed" 
      left={{ base: "30%", md: 4 }} 
      bottom={{ base: 4, md: "auto" }}
      top={{ base: "auto", md: "50%" }} 
      transform={{ base: "translateX(-50%)", md: "translateY(-50%)" }}
      bg="white" 
      p={4} 
      borderRadius="md" 
      boxShadow="md" 
      zIndex={1000}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <UnorderedList 
        listStyleType="none" 
        display="flex" 
        flexDirection={{ base: "row", md: "column" }} 
        gap={4} 
        alignItems="center"
        justifyContent="center"
      >
        <ListItem>
          <Icon as={FaFacebook} boxSize={6} color="blue.600" />
        </ListItem>
        <ListItem>
          <Icon as={FaInstagram} boxSize={6} color="pink.500" />
        </ListItem>
        <ListItem>
          <Icon as={FaLinkedin} boxSize={6} color="blue.700" />
        </ListItem>
        <ListItem>
          <Icon as={FaYoutube} boxSize={6} color="red.600" />
        </ListItem>
      </UnorderedList>
    </Box>
  );
};

export default SocialBar;
