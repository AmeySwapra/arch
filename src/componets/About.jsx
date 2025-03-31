import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  Container,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from "../assets/projects/pic1.webp";
import pic2 from "../assets/projects/pic2.webp";
import pic3 from "../assets/projects/pic3.webp";
import pic4 from "../assets/projects/pic4.webp";
import pic5 from "../assets/projects/pic5.webp";
import pic6 from "../assets/projects/pic6.webp";
import pic7 from "../assets/projects/pic7.webp";
import { Link } from "react-router-dom";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <Box py={{ base: 10, md: 10 }} px={{ base: 4, md: 8, lg: 24 }}>
      <Container maxW="6xl">
        {/* Section Title */}
        <VStack spacing={3} textAlign="center">
          <Heading
            fontSize={{ base: "lg", md: "4xl" }}
            fontWeight="bold"
            color="red.500"
          >
            Architectural (Architecture) Turnkey Projects, Interior Designing
            Services
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            color="gray.600"
            textAlign="justify"
          >
            At P G Architects, we specialize in Residential, Commercial, and
            Industrial Architectural Turnkey Projects, Interior Designing
            Services, Master Planning, Industrial Structural Designing, and
            Landscape Designing Services. Our office is based in Pimple Gurav,
            Pune, Maharashtra, India.
          </Text>
        </VStack>

        {/* Content Section */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          mt={10}
          align="center"
          justify="space-between"
        >
          {/* Left Content */}
          <Box flex="1" textAlign={{ base: "center", lg: "left" }} p={5}>
            <Heading fontSize="2xl" color="red.500" textTransform="uppercase">
              P G Architects
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mt={2} color="gray.700">
              We are creative building - interior designers
            </Text>
            <Text fontSize="md" color="gray.600" mt={4}>
              PG Architects is an Interior Design Firm headquartered in Pune,
              established in 2007. Our team consists of innovative minds eager
              to embrace creative challenges, offering a wide range of design
              ideas for residential, commercial, and industrial spaces
              throughout India.
            </Text>
            <Link to="/company-profile">
              <Button mt={4} color="white" bg="black" size="lg">
                Read More
              </Button>
            </Link>
          </Box>

          {/* Right Side - Image Carousel */}
          <Box flex="1" maxW="500px" mt={{ base: 8, lg: 0 }}>
            <Slider {...settings}>
              {images.map((src, index) => (
                <Box key={index} borderRadius="md" overflow="hidden">
                  <Image
                    src={src}
                    alt={`About us ${index + 1}`}
                    borderRadius="md"
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Flex>

        {/* Experience Section */}
        <Flex
          justify="flex-end"
          mt={10}
          borderRight="10px solid black"
          pr={5}
          direction="column"
          align="flex-end"
        >
          <Text fontSize="6xl" fontWeight="bold" color="#97866c">
            18+ Years
          </Text>
          <Text fontSize="4xl" color="black">
            Experience Working
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
