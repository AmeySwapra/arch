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
  
    const slidesToShow = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });
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
      { value: "*", label: "All Project" },
      { value: "loop-blore-col", label: "Loop Blore" },
      { value: "mehek-industries-col", label: "Mehek Industries" },
      { value: "pallavi-industries-col", label: "Pallavi Industries" },
      { value: "pitkar-col", label: "Pitkar" },
      { value: "raj-tools-col", label: "Raj Tools" },
      { value: "sany-india-col", label: "Sany India" },
      { value: "scait-col", label: "SCAIT" },
    ];
  
    return (
      <Box
        py={10}
        px={{ base: 4, md: 8, lg: 24 }}
        bgImage={`url(${banner})`}
        bgPos="center"
      >
        {/* Title Section */}
        <Stack spacing={6} mb={8}>
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px" }}
            textTransform="uppercase"
            fontWeight="normal"
          >
            Latest Project
          </Heading>
          <Divider borderColor="black" borderWidth="1px" width="100px" />
        </Stack>
  
        {/* Filter Buttons */}
        <Flex
          overflowX="auto"
          pb={4}
          mb={8}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Stack direction="row" spacing={4}>
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
        <Box position="relative">
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
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
                  height="300px"
                  objectFit="cover"
                />
                <MotionBox
                  position="absolute"
                  bottom={0}
                  left={0}
                  right={0}
                  bg="rgba(0, 0, 0, 0.7)"
                  color="white"
                  p={6}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Text fontSize="lg" fontWeight="light">
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
  
          {/* Navigation Arrows */}
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
                size="lg"
              >
                <ChevronLeftIcon boxSize={6} />
              </Button>
              <Button
                onClick={nextSlide}
                isDisabled={
                  currentSlide + slidesToShow >= filteredProjects.length
                }
                colorScheme="blackAlpha"
                borderRadius="full"
                p={0}
                size="lg"
              >
                <ChevronRightIcon boxSize={6} />
              </Button>
            </Flex>
          )}
        </Box>
      </Box>
    );
  };
  
  export default LatestProjects;