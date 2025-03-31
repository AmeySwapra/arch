import {
    Box,
    Container,
    SimpleGrid,
    Tabs,
    TabList,
    Tab,
    Image,
    Text,
    useBreakpointValue
  } from "@chakra-ui/react";
  import { useState } from "react";
  

  import pic1 from '../../assets/projects/pic1.webp';
  import pic2 from '../../assets/projects/pic2.webp';
  import pic3 from '../../assets/projects/pic3.webp';
  import pic4 from '../../assets/projects/pic4.webp';
  import pic5 from '../../assets/projects/pic5.webp';
  import pic6 from '../../assets/projects/pic6.webp';
  import pic7 from '../../assets/projects/pic7.webp';
  import pic8 from '../../assets/projects/pic8.webp';
  import pic9 from '../../assets/projects/pic9.webp';
  import pic10 from '../../assets/projects/pic10.webp';
  import pic11 from '../../assets/projects/pic11.webp';
  import pic12 from '../../assets/projects/pic12.webp';
  import pic13 from '../../assets/projects/pic13.webp';
  
  const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("*");
    const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  
    
    const allImages = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13];
  
   
    const getRandomImages = (count) => {
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
  
    const projects = [
      {
        category: "cat-1",
        name: "Diam",
        images: getRandomImages(4)
      },
      {
        category: "cat-2",
        name: "Raj Tools",
        images: getRandomImages(6)
      },
      {
        category: "cat-3",
        name: "Govind Steel office",
        images: getRandomImages(3)
      },
      {
        category: "cat-4",
        name: "Loop office",
        images: getRandomImages(7)
      },
      {
        category: "cat-5",
        name: "Mehek Industries",
        images: getRandomImages(5)
      },
      {
        category: "cat-6",
        name: "Mel Services",
        images: getRandomImages(3)
      },
      {
        category: "cat-7",
        name: "Nandekar Hospital",
        images: getRandomImages(5)
      },
      {
        category: "cat-8",
        name: "Pallavi Industries",
        images: getRandomImages(3)
      },
      {
        category: "cat-9",
        name: "Parth Valve",
        images: getRandomImages(2)
      },
      {
        category: "cat-10",
        name: "Pitkar",
        images: getRandomImages(5)
      },
      {
        category: "cat-11",
        name: "Rotary",
        images: getRandomImages(4)
      },
      {
        category: "cat-12",
        name: "Sany India",
        images: getRandomImages(5)
      },
      {
        category: "cat-13",
        name: "SCAIT",
        images: getRandomImages(5)
      },
      {
        category: "cat-14",
        name: "Valve Works",
        images: getRandomImages(2)
      }
    ];
  
    const filteredProjects = activeFilter === "*" 
      ? projects.flatMap(p => p.images.map(img => ({ ...p, image: img })))
      : projects
          .filter(p => p.category === activeFilter)
          .flatMap(p => p.images.map(img => ({ ...p, image: img })));
  
    return (
      <Box py={10} px={{base: 4, md: 8, lg: 24}} >
        <Container maxW="container.xl">
          {/* Filter Tabs */}
          <Tabs 
            variant="soft-rounded" 
            colorScheme="blue"
            mb={10}
            isLazy
          >
            <TabList 
              flexWrap="wrap"
              justifyContent="center"
              gap={2}
              pb={4}
            >
              <Tab onClick={() => setActiveFilter("*")}>All</Tab>
              {projects.map((project) => (
                <Tab 
                  key={project.category}
                  onClick={() => setActiveFilter(project.category)}
                >
                  {project.name}
                </Tab>
              ))}
            </TabList>
          </Tabs>
  
          {/* Gallery Grid */}
          <SimpleGrid columns={columns} spacing={6}>
            {filteredProjects.map((project, index) => (
              <Box 
                key={`${project.category}-${index}`}
                position="relative"
                borderRadius="md"
                overflow="hidden"
                boxShadow="md"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                  transition: "all 0.2s"
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  w="100%"
                  h="300px"
                  objectFit="cover"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="blackAlpha.600"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={6}
                  opacity={0}
                  _hover={{ opacity: 1, transition: "opacity 0.3s" }}
                >
                  <Text 
                    color="white" 
                    fontWeight="bold" 
                    fontSize="lg"
                    textAlign="center"
                  >
                    {project.name} Project Done by P G Architects
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  };
  
  export default Gallery;