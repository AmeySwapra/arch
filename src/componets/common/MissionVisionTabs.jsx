import { 
    Box, Tabs, TabList, TabPanels, Tab, TabPanel, 
    Text, UnorderedList, ListItem, Icon, Flex 
  } from "@chakra-ui/react";
  import { FaAngleDoubleRight } from "react-icons/fa";
  
  const MissionVisionTabs = () => {
    return (
      <Box 
        py={10} 
        px={{ base: 4, md: 8, lg: 24 }} 
        textAlign="center" 
        borderRadius="lg"
        boxShadow="lg"
      >
        {/* Section Title */}
        <Box mb={6}>
          <Text fontSize={{ base: "xl", md: "4xl" }} color="red.600" fontWeight="bold">
            Design with Purpose - How We Work
          </Text>
          <Box width="80px" height="4px" bg="red.600" mx="auto" mt={2} borderRadius="full"></Box>
        </Box>
  
        {/* Tabs Section */}
        <Tabs 
          variant="enclosed-colored" 
          colorScheme="red" 
          align="center" 
          size="lg"
        >
          <TabList 
            display="flex" 
            justifyContent="center" 
            bg="#f2edeb"
            p={2} 
            borderRadius="full" 
            boxShadow="md"
          >
            <Tab 
              _selected={{ bg: "red.500", color: "white", fontWeight: "bold" }} 
              borderRadius="full" 
              bg="#f2edeb"
              px={6}
            >
              Mission
            </Tab>
            <Tab 
              _selected={{ bg: "red.500", color: "white", fontWeight: "bold" }} 
              borderRadius="full" 
              px={6}
            >
              Vision
            </Tab>
          </TabList>
          
          <TabPanels>
            {/* Mission Tab */}
            <TabPanel>
              <Text fontSize={{ base: "md", md: "lg" }} mb={4} fontWeight="medium">
                Our mission is to deliver exceptional design services that exceed our clients' expectations. We are committed to:
              </Text>
              <UnorderedList textAlign="left" spacing={3}>
                {[
                  { title: "Innovation", desc: "Continuously exploring new ideas and design approaches to provide unique and creative solutions." },
                  { title: "Quality", desc: "Maintaining the highest standards of excellence in all our projects, from concept to completion." },
                  { title: "Client Satisfaction", desc: "Building lasting relationships with our clients by understanding their needs and delivering tailored design solutions that reflect their vision and lifestyle." },
                  { title: "Sustainability", desc: "Promoting sustainable design practices that minimize environmental impact and contribute to a healthier, more sustainable future." },
                  { title: "Collaboration", desc: "Fostering a collaborative environment where our team, clients, and partners work together to achieve common goals." },
                ].map((item, index) => (
                  <ListItem 
                    key={index} 
                    p={3} 
                    borderRadius="md" 
                    bg="#f2edeb" 
                    boxShadow="sm"
                    display="flex" 
                    alignItems="center"
                  >
                    <Icon as={FaAngleDoubleRight} color="red.500" mr={3} />
                    <Flex direction="column">
                      <Text as="strong" color="gray.700">{item.title}:</Text> 
                      <Text fontSize="sm" color="gray.600">{item.desc}</Text>
                    </Flex>
                  </ListItem>
                ))}
              </UnorderedList>
            </TabPanel>
  
            {/* Vision Tab */}
            <TabPanel>
              <Flex alignItems="center">
                <Icon as={FaAngleDoubleRight} color="red.500" mr={3} boxSize={6} />
                <Text fontSize={{ base: "md", md: "lg" }} fontWeight="medium">
                  Our vision is to be the leading Interior Design and Architectural firm in the region, recognized for our innovative, cost-effective, and sustainable design solutions. We aim to create spaces that inspire, enhance the quality of life, and reflect the unique identity of our clients.
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    );
  };
  
  export default MissionVisionTabs;
  