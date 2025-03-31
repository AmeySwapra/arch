import { Box, Container, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import icon1 from '../assets/icon/icon1.webp';
import icon2 from '../assets/icon/icon2.webp';
import icon3 from '../assets/icon/icon3.webp';
import icon4 from '../assets/icon/icon4.webp';
import icon5 from '../assets/icon/icon5.webp';
import banner from '../assets/banner/pic6.webp';

const ProcessSection = () => {
  const processSteps = [
    {
      id: 1,
      img: icon1,
      title: "Concept",
      description: "Understanding the client's requirements and taste, we develop a design concept."
    },
    {
      id: 2,
      img: icon2,
      title: "Design & Planning",
      description: "Based on the concept, we start designing and exploring permutations and combinations considering the scope."
    },
    {
      id: 3,
      img: icon3,
      title: "Perfection",
      description: "Once the design concept is locked, it's worked upon in detail, keeping in mind the execution."
    },
    {
      id: 4,
      img: icon4,
      title: "Implementation",
      description: "All technical requirements for the project are catered where measurements, materials, quantities, and other items are worked upon."
    },
    {
      id: 5,
      img: icon5,
      title: "Realization & Execution",
      description: "We have our dedicated multiple teams of associated vendors for carrying out the execution part."
    }
  ];

  return (
    <Box
      bgImage={`url(${banner})`}
      bgSize="cover"
      bgPos="top center"
      bgRepeat="no-repeat"
      position="relative"
      py={10}
      px={4}
    >
      <Box bg="blackAlpha.800" position="absolute" top={0} left={0} right={0} bottom={0} zIndex={0} />
      <Container maxW="6xl" position="relative" zIndex={1}>
        {/* Title */}
        <Box textAlign={{ base: "center", md: "left" }} color="white" mb={8}>
          <Heading as="h2" size="xl" textTransform="uppercase">Our Process</Heading>
          <Box width={"80px"} height={"4px"} bg="white" mt={2} mx={{ base: "auto", md: "0" }}></Box>
        </Box>

        

        {/* Process Steps */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} spacing={6} position="relative">
          {processSteps.map((step, index) => (
            <Flex key={step.id} direction="column" align="center" textAlign="center" p={4} position="relative">
              <Box
                borderRadius="full"
                border="2px solid white"
                p={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="blackAlpha.500"
                position="relative"
                zIndex={1}
              >
                <Image src={step.img} alt={step.title} boxSize="60px" />
              </Box>
              <Text fontSize="xl" fontWeight="bold" color="white" mt={4}>{step.title}</Text>
              <Text fontSize="md" color="gray.300" mt={2}>{step.description}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ProcessSection;