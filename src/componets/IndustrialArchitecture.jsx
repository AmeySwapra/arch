import {
    Box,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
    Text,
    Image,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    UnorderedList,
    ListItem,
    Link,
    Button,
    useBreakpointValue,
    Stack,
    Divider
  } from "@chakra-ui/react";
  import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
  import { useState } from "react";

 
  import diamProject from '../assets/projects/pic1.webp'
  import gowardhanProject from '../assets/projects/pic2.webp'
  import valveworksProject from '../assets/projects/pic3.webp'
  import toxProject from '../assets/projects/pic12.webp'
  
  const IndustrialArchitecture = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const isMobile = useBreakpointValue({ base: true, md: false });
    const carouselItems = [
      {
        image: diamProject,
        title: "DIAM Display India Pvt Ltd",
        location: "Chakan Phase 2",
        area: "28000 sq.mt",
        scope: "Planning, Designing, Site Development & Supervision",
        description: "Diam Display India intended to triple the capacity of its current facility, which spans over 6 acres. PG offered solutions for industrial, architectural, and landscape design. The design concept incorporates industry standards, technical specifications, and a fusion of Indian traditional aesthetics."
      },
      {
        image: gowardhanProject,
        title: "Gowardhan, Go Cheese Plant",
        location: "Khed Manchar",
        area: "9000 sq.mt",
        scope: "Planning, Designing, and Supervision",
        description: "P G Architects worked as a Senior Architect for the existing and new dairy plant. The company management wanted to set up a new plant similar to the one that was established abroad. PG conducted an in-depth study to analyse the rules and regulations and came up with a design that suited well to the company's expansion vision."
      },
      {
        image: valveworksProject,
        title: "Valveworks India Pvt Ltd.",
        location: "Chakan Phase 2",
        area: "6450 sq.mt",
        scope: "Planning, Designing, Plan Sanctioning & Supervision",
        description: "The Valveworks India project was P G Architects first major stand-alone industrial project. We provided end-to-end solutions to facility based in Chakan. Valveworks India deals with the development of valves which are used in undersea oil exploration. PG studied all the industrial protocols needed for the installation of the latest technology and designed a facility accordingly. A detailed study of the processes from production to dispatch was undertaken to design a facility that would ensure swift and unhindered operations."
      },
      {
        image: toxProject,
        title: "TOX Pressotechnik",
        location: "Mulshi",
        area: "9000 sq.mt",
        scope: "Planning, Designing, Plan Sanctioning & Supervision",
        description: ""
      }
    ];
  
    const nextSlide = () => {
      setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
    };
  
    return (
      <Box py={{ base: 8, md: 20 }} px={{ base: 4, md: 8, lg:24 }} overflow={'hidden'} position="relative">
        {/* Background shapes */}
        <Box 
          position="absolute" 
          top="0" 
          right="0" 
          w="200px" 
          h="200px" 
          bg="blue.100" 
          opacity="0.3" 
          borderRadius="full"
          transform="translate(50%, -50%)"
          zIndex="0"
        />
        <Box 
          position="absolute" 
          bottom="0" 
          left="0" 
          w="300px" 
          h="300px" 
          bg="blue.100" 
          opacity="0.2" 
          borderRadius="full"
          transform="translate(-50%, 50%)"
          zIndex="0"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="1">
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
            {/* Main Content */}
            <GridItem>
              {/* Image Carousel */}
              <Box position="relative" mb={8}>
                <Image
                  src={carouselItems[activeSlide].image}
                  alt={carouselItems[activeSlide].title}
                  w="100%"
                  h={{ base: "300px", md: "500px" }}
                  objectFit="cover"
                  borderRadius="md"
                />
                
                {/* Carousel Controls */}
                <Flex justify="space-between" position="absolute" top="50%" w="100%" px={4}>
                  <Button 
                    onClick={prevSlide}
                    borderRadius="full"
                    bg="blackAlpha.600"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                  >
                    <ChevronLeftIcon boxSize={6} />
                  </Button>
                  <Button 
                    onClick={nextSlide}
                    borderRadius="full"
                    bg="blackAlpha.600"
                    color="white"
                    _hover={{ bg: "blackAlpha.800" }}
                  >
                    <ChevronRightIcon boxSize={6} />
                  </Button>
                </Flex>
                
              
                
              </Box>
              
              {/* Content */}
              <Box bg="white" p={{ base: 4, md: 8 }} borderRadius="md" boxShadow="dark-lg">
                <Heading as="h2" color={'#97866c'} size="lg" mb={4}>
                  P G Architects modernises the client's facilities to meet their future production demands, employs sustainable design techniques, and adheres to industry regulations
                </Heading>
                
                <Text fontSize="lg" mb={4}>
                  We are Services provider of Industrial Architecture, Architectural Services, Interior Design Services, Master Planning Services, Industrial Structural Designing, Industrial and Commercial Designing, and our set up in Pune, Maharashtra, India.
                </Text>
                
                <Text mb={4}>
                  At P G Architects, we offer comprehensive industrial architectural services designed to meet the complex needs of industrial facilities. Our team specializes in creating efficient, safe, and sustainable environments tailored to each industry's specific operational requirements. Whether it's manufacturing plants, warehouses, or research labs, our designs enhance workflow, optimize space, and support future scalability.
                </Text>
                
                <Text>
                  We understand that industrial architecture requires a balance between functionality and innovation, and we work closely with our clients to deliver customized solutions that integrate cutting-edge technology, safety standards, and sustainability practices.
                </Text>
              </Box>
            </GridItem>
            
            {/* Sidebar */}
            <GridItem>
              {/* Services Widget */}
              <Box bg="white" p={6} borderRadius="md" boxShadow="dark-lg" mb={6}>
                <Heading as="h3" size="md" mb={4} textTransform="uppercase">
                  SERVICES WE PROVIDE
                </Heading>
                
                <Stack spacing={4}>
                  <Link href="/architecture-service" _hover={{ textDecoration: "none" }}>
                    <Flex align="center" gap={4} p={2} _hover={{ bg: "gray.100" }} borderRadius="md">
                      <Image 
                        src={diamProject} 
                        alt="Architectural Services" 
                        w="80px" 
                        h="80px" 
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Text fontWeight="medium">Architectural Services</Text>
                    </Flex>
                  </Link>
                  
                  <Link href="interior-design-services.html" _hover={{ textDecoration: "none" }}>
                    <Flex align="center" gap={4} p={2} _hover={{ bg: "gray.100" }} borderRadius="md">
                      <Image 
                        src={valveworksProject} 
                        alt="Interior Design Services" 
                        w="80px" 
                        h="80px" 
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Text fontWeight="medium">Interior Design Services</Text>
                    </Flex>
                  </Link>
                </Stack>
              </Box>
              
              <Divider borderColor="gray.300" my={6} />
              
              {/* Gallery Widget */}
              <Link href='/projects'>
              <Box bg="white" p={6} borderRadius="md" boxShadow="dark-lg">
                <Heading as="h3" size="md" mb={4} textTransform="uppercase">
                  Our Projects
                </Heading>
                
                <Grid templateColumns="repeat(3, 1fr)" gap={2} mb={2}>
                  <Image src={diamProject} alt="Project" borderRadius="md" />
                  <Image src={diamProject} alt="Project" borderRadius="md" />
                  <Image src={valveworksProject} alt="Project" borderRadius="md" />
                </Grid>
                
                <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                  <Image src={valveworksProject} alt="Project" borderRadius="md" />
                  <Image src={toxProject} alt="Project" borderRadius="md" />
                  <Image src={gowardhanProject} alt="Project" borderRadius="md" />
                </Grid>
              </Box>
              </Link>
            </GridItem>
          </Grid>
          
          {/* Get A Quote Button */}
          <Flex justify="center" my={10}>
            <Button 
              as="a" 
              href="/enquiry"  
              bg="black"
              color='white' 
              size="lg" 
              px={10}
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              Get A Quote
            </Button>
          </Flex>
          
          {/* Application Areas */}
          <Box mb={10}>
            <Heading as="h3" size="xl" mb={2} textAlign="center">
              Application Areas
            </Heading>
            <Divider borderColor="black" w="100px" mx="auto" mb={8} />
            
            <Accordion allowToggle>
              <AccordionItem mb={4} borderWidth="1px" borderRadius="md" overflow="hidden">
                <AccordionButton bg="#f2edeb" _hover={{ bg: "gray.200" }}>
                  <Box flex="1" textAlign="left" fontWeight="bold" textTransform="uppercase">
                    1. Manufacturing Plants
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text mb={4}>
                    At P G Architects, we specialize in designing manufacturing plants that streamline production processes, enhance safety, and promote operational efficiency. Our designs are tailored to optimize material flow, ensuring that logistics run smoothly and that production processes are as seamless as possible. We incorporate the latest industry standards to ensure safety compliance while also creating comfortable environments for both administrative and production staff.
                  </Text>
                  <Text mb={4}>
                    By focusing on both functionality and employee well-being, our architectural solutions support efficient manufacturing operations and foster a positive, productive workplace.
                  </Text>
                  <Text fontWeight="bold" mb={2}>Key Features:</Text>
                  <UnorderedList spacing={2}>
                    <ListItem>
                      <Text as="strong">Optimized Production Layouts:</Text> We design layouts that enhance workflow, minimize downtime, and ensure efficient use of space. Our plant designs are tailored to meet the unique operational requirements of each industry.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Safety and Compliance:</Text> Safety is paramount in our designs. We ensure that all plant layouts comply with relevant safety standards, including fire safety, hazardous material management, and employee health regulations.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Logistics and Material Flow:</Text> Our designs are centered on smooth logistical operations, ensuring that raw materials and finished products move efficiently through the plant. This results in reduced delays and increased productivity.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Comfortable Administrative and Staff Areas:</Text> Beyond the production floor, we design comfortable and functional administrative spaces, including offices, break rooms, and welfare areas, to enhance employee satisfaction and well-being.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              
              
              <AccordionItem mb={4} borderWidth="1px" borderRadius="md" overflow="hidden">
                <AccordionButton bg="#f2edeb" _hover={{ bg: "gray.200" }}>
                  <Box flex="1" textAlign="left" fontWeight="bold" textTransform="uppercase">
                    2. Warehousing and Distribution Centres
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text mb={4}>
                    At P G Architects, we specialize in designing manufacturing plants that streamline production processes, enhance safety, and promote operational efficiency. Our designs are tailored to optimize material flow, ensuring that logistics run smoothly and that production processes are as seamless as possible. We incorporate the latest industry standards to ensure safety compliance while also creating comfortable environments for both administrative and production staff.
                  </Text>
                  <Text mb={4}>
                    By focusing on both functionality and employee well-being, our architectural solutions support efficient manufacturing operations and foster a positive, productive workplace.
                  </Text>
                  <Text fontWeight="bold" mb={2}>Key Features:</Text>
                  <UnorderedList spacing={2}>
                    <ListItem>
                      <Text as="strong">Optimized Production Layouts:</Text> We design layouts that enhance workflow, minimize downtime, and ensure efficient use of space. Our plant designs are tailored to meet the unique operational requirements of each industry.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Safety and Compliance:</Text> Safety is paramount in our designs. We ensure that all plant layouts comply with relevant safety standards, including fire safety, hazardous material management, and employee health regulations.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Logistics and Material Flow:</Text> Our designs are centered on smooth logistical operations, ensuring that raw materials and finished products move efficiently through the plant. This results in reduced delays and increased productivity.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Comfortable Administrative and Staff Areas:</Text> Beyond the production floor, we design comfortable and functional administrative spaces, including offices, break rooms, and welfare areas, to enhance employee satisfaction and well-being.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              
              <AccordionItem mb={4} borderWidth="1px" borderRadius="md" overflow="hidden">
                <AccordionButton bg="#f2edeb" _hover={{ bg: "gray.200" }}>
                  <Box flex="1" textAlign="left" fontWeight="bold" textTransform="uppercase">
                    3. Research & Development (R&D) Laboratories
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Text mb={4}>
                    At P G Architects, we specialize in designing manufacturing plants that streamline production processes, enhance safety, and promote operational efficiency. Our designs are tailored to optimize material flow, ensuring that logistics run smoothly and that production processes are as seamless as possible. We incorporate the latest industry standards to ensure safety compliance while also creating comfortable environments for both administrative and production staff.
                  </Text>
                  <Text mb={4}>
                    By focusing on both functionality and employee well-being, our architectural solutions support efficient manufacturing operations and foster a positive, productive workplace.
                  </Text>
                  <Text fontWeight="bold" mb={2}>Key Features:</Text>
                  <UnorderedList spacing={2}>
                    <ListItem>
                      <Text as="strong">Optimized Production Layouts:</Text> We design layouts that enhance workflow, minimize downtime, and ensure efficient use of space. Our plant designs are tailored to meet the unique operational requirements of each industry.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Safety and Compliance:</Text> Safety is paramount in our designs. We ensure that all plant layouts comply with relevant safety standards, including fire safety, hazardous material management, and employee health regulations.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Logistics and Material Flow:</Text> Our designs are centered on smooth logistical operations, ensuring that raw materials and finished products move efficiently through the plant. This results in reduced delays and increased productivity.
                    </ListItem>
                    <ListItem>
                      <Text as="strong">Comfortable Administrative and Staff Areas:</Text> Beyond the production floor, we design comfortable and functional administrative spaces, including offices, break rooms, and welfare areas, to enhance employee satisfaction and well-being.
                    </ListItem>
                  </UnorderedList>
                </AccordionPanel>
              </AccordionItem>
              
              {/* Continue with other application areas */}
            </Accordion>
          </Box>
          
          {/* Related Projects */}
          <Box>
            <Heading as="h2" size="xl" mb={2}>
              Related projects
            </Heading>
            <Divider borderColor="black" mb={8} />
            
            <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
              {carouselItems.map((project, index) => (
                <Box key={index} bg="#f2edeb" borderRadius="md" overflow="hidden" boxShadow="dark-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    w="100%" 
                    h="250px" 
                    objectFit="cover"
                  />
                  <Box p={6}>
                    <Heading as="h3" size="md" mb={4}>
                      {project.title}
                    </Heading>
                    
                    <UnorderedList spacing={2} mb={4}>
                      <ListItem>
                        <Text as="strong">Location:</Text> {project.location}
                      </ListItem>
                      <ListItem>
                        <Text as="strong">Area:</Text> {project.area}
                      </ListItem>
                      <ListItem>
                        <Text as="strong">Scope of work:</Text> {project.scope}
                      </ListItem>
                    </UnorderedList>
                    
                    {project.description && (
                      <Text mb={4}>{project.description}</Text>
                    )}
                    
                    <Flex justify="center">
                      <Button 
                        as="a" 
                        href="/enquiry" 
                        bg="black"
                        color='white' 
                        variant="outline"
                        size="sm"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        Get A Quote
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default IndustrialArchitecture;