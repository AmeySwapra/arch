import {
  Box,
  Container,
  Text,
  Heading,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "../assets/company/pic1.webp";
import pic2 from "../assets/company/pic2.webp";
import pic3 from "../assets/company/pic3.webp";
import pic4 from "../assets/company/pic4.webp";
import pic5 from "../assets/company/pic5.webp";
import pic6 from "../assets/company/pic6.webp";
import pic7 from "../assets/company/pic7.webp";

const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];

const CompanyProfile = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
  };

  return (
    <Box  py={6} px={{base: 4, md: 8, lg: 24}}>
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", lg: "row" }} align="center" gap={10}>
          {/* Carousel Section */}
          <Box flex={1} maxW={{ base: "100%", md: "50%" }}>
            <Slider {...settings}>
              {images.map((src, index) => (
                <Box key={index} overflow="hidden" borderRadius="md">
                  <Image
                    src={src}
                    alt={`About Us ${index + 1}`}
                    w="100%"
                    h="500px"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </Slider>
          </Box>

          {/* Content Section */}
          <VStack
            flex={1}
            align="start"
            spacing={4}
            maxW={{ base: "100%", md: "50%" }}
          >
            <Text
              fontSize="4xl"
              fontWeight="bold"
              textTransform="uppercase"
              color="red.500"
            >
              About Us
            </Text>
            <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }}>
              Our mission is the best interior design & development.
            </Heading>
            <Text>
              We are a service provider of Industrial Architecture,
              Architectural Services, Interior Design Services, Master Planning
              Services, Industrial Structural Designing, and more. Based in
              Pune, Maharashtra, India.
            </Text>
            <Text>
              Established in 2007, P G Architects specializes in professional
              architectural and interior design services, catering to industries
              such as Commercial Offices, Manufacturing Industries, IT
              Companies, Banking, Automotive, and Retail.
            </Text>
            <Text>
              Our expertise spans Interior Design, Industrial Architecture, and
              Landscape Designing, ensuring each project reflects our clients'
              visions while maintaining aesthetics, efficiency, and
              sustainability.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default CompanyProfile;
