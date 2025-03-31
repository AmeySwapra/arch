import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

import backgroundImage from "../assets/banner/pic4.webp";
import adindiaImage from "../assets/achivements/pic1.webp";
import goodHomesImage from "../assets/achivements/pic2.webp";
import truProjectImage from "../assets/achivements/pic3.webp";

const Achievements = () => {
  const achievements = [
    {
      image: adindiaImage,
      title: "Award-Winning Design",
      description: (
        <>
          We are thrilled to announce that{" "}
          <b style={{ color: "#6c542c" }}>P G Architects</b> has been honored with the{" "}
          <b style={{ color: "#6c542c" }}>Best Villa Design</b> award by{" "}
          <b style={{ color: "#6c542c" }}>True Reality.</b> This prestigious accolade recognizes our exceptional work
          in villa design and underscores our commitment to creating luxurious and innovative living spaces.
          <br />
          <br />
          Our winning design was featured in <b style={{ color: "#6c542c" }}>Good Homes</b> magazine, a leading
          publication by the Times of India, highlighting our dedication to excellence and creativity in
          architectural design.
        </>
      ),
    },
    {
      image: goodHomesImage,
      title: `Featured in India’s Top Selling Magazine "Good Homes"`,
      description: (
        <>
          We are proud to announce that P G Architects was featured in the prestigious{" "}
          <b style={{ color: "#6c542c" }}>Good Homes</b> magazine, a leading publication by the Times of India, in
          their June 2022 edition. This recognition highlights our commitment to excellence and innovation in
          architectural and interior design.
          <br />
          <br />
          <b style={{ color: "#6c542c" }}>Good Homes</b> is renowned for showcasing exceptional design and inspiring
          spaces, and being featured in this top-selling magazine is a testament to our dedication to creating
          outstanding environments.
        </>
      ),
    },
    {
      image: truProjectImage,
      title: "Featured in Architectural Digest",
      description: (
        <>
          We are excited to share that <b style={{ color: "#6c542c" }}>P G Architects</b> was featured in the esteemed{" "}
          <b style={{ color: "#6c542c" }}>Architectural Digest</b>, one of the leading magazines in the field of
          architecture and design.
          <br />
          <br />
          Our work was highlighted as a finalist in the TRU Project, showcasing the exceptional design expertise of
          our architect, Prajakta Gawali.
        </>
      ),
    },
  ];

  return (
    <Box py={20} bgImage={`url(${backgroundImage})`} bgPos="center">
      <Container maxW="6xl">
        {/* Section Heading */}
        <Text textAlign="center" fontSize={{ base: "lg", md: "3xl" }} color={'red.500'} fontWeight="bold" mb={10}>
          We are service providers of Industrial Architecture, Architectural Services, Interior Design Services, Master
          Planning Services, Industrial Structural Designing, and more. Based in Pune, Maharashtra, India.
        </Text>

        {/* Achievements as rows */}
        {achievements.map((item, index) => (
          <Flex
            key={index}
            direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
            align="center"
            bg="#f2edeb"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            mb={10}
            gap={index === 1 ? "400px" : "0px"}
          >
            {/* Image Section */}
            <Box flex="1" textAlign="center">
              <Image
                src={item.image}
                alt={item.title}
                borderRadius="22px"
                boxShadow="rgba(60, 64, 67, 0.47) 0px 1px 2px 0px, rgba(60, 64, 67, 0.58) 0px 2px 6px 2px"
                maxW="100%"
                maxH="300px"
              />
            </Box>

            {/* Text Section */}
            <Box flex="1" p={6}>
              <VStack align="start" spacing={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </VStack>
            </Box>
          </Flex>
        ))}
      </Container>
    </Box>
  );
};

export default Achievements;
