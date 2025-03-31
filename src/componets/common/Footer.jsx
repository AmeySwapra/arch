import { 
  Box, 
  Container, 
  SimpleGrid, 
  Image, 
  Text, 
  Link as ChakraLink, 
  VStack, 
  HStack, 
  Icon, 
  AspectRatio 
} from "@chakra-ui/react";
import { 
  FaFacebookSquare, 
  FaYoutube, 
  FaInstagram, 
  FaLinkedin, 
  FaLocationArrow, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import footerbg from '../../assets/footer/footer-bg.webp'
import logo from '../../assets/logo/logo-light.webp'
import footer1 from '../../assets/footer/footer-gallery-img1.webp';
import footer2 from '../../assets/footer/footer-gallery-img2.webp';
import footer3 from '../../assets/footer/footer-gallery-img3.webp';
import footer4 from '../../assets/footer/footer-gallery-img4.webp';
import footer5 from '../../assets/footer/footer-gallery-img5.webp';
import footer6 from '../../assets/footer/footer-gallery-img6.webp';
import footer7 from '../../assets/footer/footer-gallery-img7.webp';
import footer8 from '../../assets/footer/footer-gallery-img8.webp';
import footer9 from '../../assets/footer/footer-gallery-img9.webp';

const footerImages = [footer1, footer2, footer3, footer4, footer5, footer6, footer7, footer8, footer9];

const Footer = () => {
  return (
    <Box bgImage={`url(${footerbg})`} bgSize="cover" bgPos="center" pt={10} pb={0}>
      <Container maxW="container.xl" color="white">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* About Company */}
          <VStack align="start" spacing={4}>
            <Image src={logo} alt="P G Architects" width="230px" height="67px" />
            <VStack align="start" spacing={6}>
              <HStack>
                <Icon as={FaLocationArrow} />
                <Text fontSize="lg">
                  403, Chandrarang Silver, Pimple Gurav, Pune - 411061, India
                </Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} />
                <Text fontSize="lg">+91 73871 67775</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <ChakraLink 
                  as={RouterLink} 
                  to="/enquiry" 
                  fontSize="lg" 
                  _hover={{ textDecoration: "underline", color: "white" }}
                >
                  response@pgarchitects.co.in
                </ChakraLink>
              </HStack>
            </VStack>
          </VStack>
          
          {/* Useful Links */}
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Useful Links</Text>
            {[
              { label: "Home", to: "/" },
              { label: "Company Profile", to: "/company-profile" },
              { label: "Our Experts", to: "/company-experts" },
              { label: "Projects", to: "/projects" },
              { label: "Architectural Services", to: "/architecture-service" },
              { label: "Interior Design Services", to: "/interior-design" },
              { label: "Our Achievements", to: "/company-achivements" },
              { label: "Contact Us", to: "/contact" },
              { label: "Sitemap", to: "/sitemap" },
              { label: "Enquiry", to: "/enquiry" }
            ].map((link, index) => (
              <ChakraLink
                key={index}
                as={RouterLink}
                to={link.to}
                _hover={{ textDecoration: "underline", color: "white" }}
                color="white"
                fontSize="lg"
              >
                {link.label}
              </ChakraLink>
            ))}
          </VStack>
          
          {/* Projects Gallery */}
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Projects</Text>
            <SimpleGrid columns={3} spacing={2}>
              {footerImages.map((image, index) => (
                <Image 
                  key={index} 
                  src={image} 
                  alt={`Project ${index + 1}`} 
                  boxSize="80px" 
                  objectFit="cover" 
                />
              ))}
            </SimpleGrid>
          </VStack>
          
          {/* Google Map */}
          <VStack align="start" spacing={2}>
            <Text fontWeight="bold" fontSize="lg">Google Map</Text>
            <AspectRatio ratio={1} w="100%">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7562.885999778154!2d73.817908!3d18.599134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b931f37f838b%3A0x184ce126885fe9bc!2sP%20G%20Architects!5e0!3m2!1sen!2sin!4v1723877097810!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </AspectRatio>
          </VStack>
        </SimpleGrid>
      </Container>
      
      {/* Footer Bottom */}
      <Box py={4} bg="#97866c" color="white" textAlign="center">
        <Text fontSize="md">
          Designed by:{" "}
          <ChakraLink as={RouterLink} to="/" color="blue.300">
            MID
          </ChakraLink>{" "}
          | Hosted by:{" "}
          <ChakraLink as={RouterLink} to="/" color="blue.300">
            PBD
          </ChakraLink>{" "}
          | Promoted by:{" "}
          <ChakraLink as={RouterLink} to="/" color="blue.300">
            GID
          </ChakraLink>
        </Text>
        <HStack justify="center" spacing={4} mt={2}>
          <ChakraLink as={RouterLink} to="/">
            <Icon as={FaFacebookSquare} boxSize={6} />
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/">
            <Icon as={FaYoutube} boxSize={6} />
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/">
            <Icon as={FaInstagram} boxSize={6} />
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/">
            <Icon as={FaLinkedin} boxSize={6} />
          </ChakraLink>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
