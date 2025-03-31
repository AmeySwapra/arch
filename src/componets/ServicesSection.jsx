import {
    Box,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Text,
    VStack,
    Flex,
  } from "@chakra-ui/react";
  import commercialOffice from "../assets/service/pic1.webp";
  import consultancySolutions from "../assets/service/pic2.webp";
  import industrialProjects from "../assets/service/pic3.webp";
  import banner from "../assets/banner/pic4.webp";
  
  const services = [
    {
      id: 1,
      img: commercialOffice,
      title: "Commercial Office Architectural Projects",
      description:
        "Effective Execution is the key to the success of any project. Hence, PG Architects has dedicated teams with average experience of 15 years and collaborates with its vendors to ensure efficient and hassle-free execution.",
    },
    {
      id: 2,
      img: consultancySolutions,
      title: "Consultancy and Turnkey Solutions",
      description:
        "We bring customized luxury interior design services that reflect every need, preference, and taste of the client. The pursuit of effective use of space, well-being, and functional design has contributed to our success for every project that we undertake.",
    },
    {
      id: 3,
      img: industrialProjects,
      title: "Industrial Architectural Projects",
      description:
        "PG Architects modernizes the client's facilities to meet their future production demands, employs sustainable design techniques, and adheres to industry regulations.",
    },
  ];
  
  const ServicesSection = () => {
    return (
      <Box bgImage={`url(${banner})`} bgPos="center" py={20} px={4}>
        <Container maxW="6xl">
          {/* Title */}
          <Box textAlign={{ base: "center", md: "left" }} color="black" mb={8}>
            <Heading as="h2" size="xl" textTransform="uppercase">
              Our Services
            </Heading>
            <Box
              width={"80px"}
              height={"4px"}
              bg="black"
              mt={2}
              mx={{ base: "auto", md: "0" }}
            ></Box>
          </Box>
  
          {/* Services List */}
          {services.map((service, index) => (
            <Flex
              key={service.id}
              direction={{ base: "column", md: index % 2 === 0 ? "row" : "row-reverse" }}
              align="center"
              mb={10}
              gap={6}
            >
              <Image
                src={service.img}
                alt={service.title}
                flex={1}
                w={'500px'}
                borderRadius="md"
                boxShadow="lg"
              />
              <VStack align="start" flex={1} spacing={4}>
                <Heading as="h3" fontSize={'2xl'}  textTransform="uppercase" color={index % 2 === 0 ? 'black' : '#97866c'}>
                  {service.title}
                </Heading>
                <Text fontSize="lg" color={index % 2 === 0 ? 'black' : '#97866c'}>
                  {service.description}
                </Text>
              </VStack>
            </Flex>
          ))}
        </Container>
      </Box>
    );
  };
  
  export default ServicesSection;