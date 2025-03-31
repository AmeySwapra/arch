import { Box, Container, SimpleGrid, VStack, Icon, Text, Link, Image } from "@chakra-ui/react";
import { FaMap, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: FaMap,
      title: "Address",
      content: "403, Chandrarang Silver, Pimple Gurav, Pune - 411061, Maharashtra, India.",
    },
    {
      icon: FaPhone,
      title: "Contact Us",
      content: "+91 73871 67775",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      content: (
        <Link href="enquiry.php">
          <Image src="images/enquiry1.webp" alt="response@pgarchitects.co.in" />
        </Link>
      ),
    },
  ];

  return (
    <Box py={20} >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {contactDetails.map((item, index) => (
            <VStack
              key={index}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="dark-lg"
              align="center"
              textAlign="center"
              spacing={4}
            >
              {/* Icon Section */}
              <Box
                bg="#97866c"
                w="50px"
                h="50px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                color="white"
              >
                <Icon as={item.icon} boxSize={6} />
              </Box>

              {/* Text Section */}
              <Text fontSize="lg" fontWeight="bold">
                {item.title}
              </Text>
              <Text fontSize="md">{item.content}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactInfo;
