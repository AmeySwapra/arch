import { Box, Container, Text, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Banner = ({ imageUrl, text, title }) => {
  return (
    <Box
      position="relative"
      bgImage={`url(${imageUrl})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      height="250px"
      px={{base: 4, md: 8, lg: 24}}
      py={6}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bg: "black",
        opacity: 0.3,
      }}
    >
      <Container maxW="container.xl" position="relative" zIndex={1} py={10}>
        <Text color="white" fontSize={{base:'2xl', md: '5xl'}} textAlign="left" mb={4}>{text}</Text>
        <Breadcrumb separator=">" color="white" justifyContent="center">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Heading as="h1" fontSize="2xl" color="white">{title}</Heading>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </Box>
  );
};

export default Banner;