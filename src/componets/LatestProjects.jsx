import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  useBreakpointValue,
  SimpleGrid,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import banner from "../assets/banner/pic4.webp";
import pic8 from "../assets/projects/pic8.webp";
import pic9 from "../assets/projects/pic9.webp";
import pic10 from "../assets/projects/pic10.webp";
import pic11 from "../assets/projects/pic11.webp";
import pic12 from "../assets/projects/pic12.webp";
import pic13 from "../assets/projects/pic13.webp";

const MotionBox = motion(Box);

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Sany India Project",
      image: pic8,
      category: "sany-india-col",
    },
    {
      id: 2,
      title: "Pitkar Project",
      image: pic9,
      category: "pitkar-col",
    },
    {
      id: 3,
      title: "SCAIT Project",
      image: pic10,
      category: "scait-col",
    },
    {
      id: 4,
      title: "Pallavi Industries Project",
      image: pic11,
      category: "pallavi-industries-col",
    },
    {
      id: 5,
      title: "Mehek Industries Project",
      image: pic12,
      category: "mehek-industries-col",
    },
    {
      id: 6,
      title: "Raj Tools Project",
      image: pic13,
      category: "raj-tools-col",
    },
  ];

  const filteredProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const slidesToShow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 3, xl: 4 });
  const visibleProjects = filteredProjects.slice(
    currentSlide,
    currentSlide + slidesToShow
  );

  const nextSlide = () => {
    if (currentSlide + slidesToShow < filteredProjects.length) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const filterButtons = [
    { value: "*", label: "All" },
    { value: "loop-blore-col", label: "Loop Blore" },
    { value: "mehek-industries-col", label: "Mehek" },
    { value: "pallavi-industries-col", label: "Pallavi" },
    { value: "pitkar-col", label: "Pitkar" },
    { value: "raj-tools-col", label: "Raj Tools" },
    { value: "sany-india-col", label: "Sany" },
    { value: "scait-col", label: "SCAIT" },
  ];

  return (
    <Box
      py={{ base: 6, md: 10 }}
      px={{ base: 2, sm: 4, md: 8, lg: 24 }}
      bgImage={`url(${banner})`}
      bgPos="center"
      overflowX={'hidden'}
    >
      {/* Title Section */}
      <Stack spacing={4} mb={{ base: 4, md: 8 }} px={{ base: 2, sm: 0 }}>
        <Heading
          as="h2"
          fontSize={{ base: "24px", sm: "28px", md: "36px" }}
          textTransform="uppercase"
          fontWeight="normal"
          textAlign={{ base: "center", sm: "left" }}
        >
          Latest Project
        </Heading>
        <Divider 
          borderColor="black" 
          borderWidth="1px" 
          width="100px" 
          alignSelf={{ base: "center", sm: "flex-start" }}
        />
      </Stack>

      {/* Filter Buttons */}
      <Flex
        overflowX="auto"
        pb={4}
        mb={6}
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        }}
        px={{ base: 2, sm: 0 }}
      >
        <Stack direction="row" spacing={3}>
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              variant={activeFilter === button.value ? "solid" : "outline"}
              colorScheme="black"
              onClick={() => {
                setActiveFilter(button.value);
                setCurrentSlide(0);
              }}
              minW="max-content"
              size={{ base: "sm", md: "md" }}
              bg={activeFilter === button.value ? "black" : "transparent"}
              color={activeFilter === button.value ? "white" : "black"}
              _hover={{
                bg: activeFilter === button.value ? "black" : "gray.100",
              }}
            >
              {button.label}
            </Button>
          ))}
        </Stack>
      </Flex>

      {/* Projects Carousel */}
      <Box position="relative" px={{ base: 2, sm: 0 }}>
        <SimpleGrid 
          columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }} 
          spacing={{ base: 4, md: 5 }}
        >
          {visibleProjects.map((project) => (
            <MotionBox
              key={project.id}
              position="relative"
              overflow="hidden"
              borderRadius="md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width="100%"
                height={{ base: "250px", sm: "300px" }}
                objectFit="cover"
              />
              <MotionBox
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="rgba(0, 0, 0, 0.7)"
                color="white"
                p={{ base: 4, md: 6 }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="light">
                  <Box
                    as="a"
                    href="projects-detail.html"
                    color="white"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {project.title} Done by P G Architects
                  </Box>
                </Text>
              </MotionBox>
            </MotionBox>
          ))}
        </SimpleGrid>

        {/* Navigation Arrows - Only show if there are multiple slides */}
        {filteredProjects.length > slidesToShow && (
          <Flex
            justify="space-between"
            position="absolute"
            top="50%"
            left={0}
            right={0}
            transform="translateY(-50%)"
            px={2}
          >
            <Button
              onClick={prevSlide}
              isDisabled={currentSlide === 0}
              colorScheme="blackAlpha"
              borderRadius="full"
              p={0}
              size={{ base: "sm", md: "lg" }}
              display={{ base: "none", sm: "flex" }}
            >
              <ChevronLeftIcon boxSize={{ base: 4, md: 6 }} />
            </Button>
            <Button
              onClick={nextSlide}
              isDisabled={
                currentSlide + slidesToShow >= filteredProjects.length
              }
              colorScheme="blackAlpha"
              borderRadius="full"
              p={0}
              size={{ base: "sm", md: "lg" }}
              display={{ base: "none", sm: "flex" }}
            >
              <ChevronRightIcon boxSize={{ base: 4, md: 6 }} />
            </Button>
          </Flex>
        )}

        {/* Mobile navigation dots */}
        {filteredProjects.length > slidesToShow && (
          <Flex justify="center" mt={4} display={{ base: "flex", sm: "none" }}>
            {Array.from({
              length: Math.ceil(filteredProjects.length / slidesToShow),
            }).map((_, index) => (
              <Box
                key={index}
                mx={1}
                w={3}
                h={3}
                borderRadius="full"
                bg={currentSlide === index * slidesToShow ? "black" : "gray.300"}
                onClick={() => setCurrentSlide(index * slidesToShow)}
                cursor="pointer"
              />
            ))}
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default LatestProjects;