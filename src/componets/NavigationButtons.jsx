import { Box, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Company Profile", link: "/company-profile" },
  { label: "Our Experts", link: "/company-experts" },
  { label: "Projects", link: "/projects" },
  { label: "Architectural Services", link: "/architecture-service" },
  { label: "Interior Design Services", link: "/interior-design" },
  { label: "Our Achievements", link: "/company-achivements" },
  { label: "Contact Us", link: "/contact" },
  { label: "Enquiry", link: "/enquiry" },
  { label: "Site Map", link: "/sitemap" },
];

const NavigationButtons = () => {
  return (
    <Box maxW="1200px" mx="auto" py={6} px={{ base: 2, md: 6, lg: 12 }}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={4}
        justifyContent="center"
      >
        {menuItems.map((item, index) => (
          <Button
            as={Link}
            to={item.link}
            key={index}
            w={{ base: "100%", sm: "auto" }}
            h={'50px'}
            color="white"
            bg='black'
            variant="solid"
            textAlign="center"
            _hover={{ bg: "#97866c" }}
          >
            {item.label}
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationButtons;