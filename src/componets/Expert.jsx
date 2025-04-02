import { Box, Container, Flex, Grid, Image, Text, VStack, HStack, Divider } from "@chakra-ui/react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import pic1 from '../assets/expert/pic1.webp'
import pic2 from '../assets/expert/pic2.webp'
import banner from '../assets/banner/pic2.webp'
const Expert = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box py={10} px={{ base: 4, md: 8, lg :24 }}>
      <Container maxW="6xl">
        {/* Section Heading */}
        <Text textAlign="center" fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" mb={6}>
          We are service providers of Industrial Architecture, Architectural Services, Interior Design Services, Master Planning Services, Industrial Structural Designing, and more. Based in Pune, Maharashtra, India.
        </Text>

        {/* Team Members */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
          {/* Member 1 */}
          <Flex
            direction={{ base: "column", md: "row" }}
            bg="#f2edeb"
            p={6}
            borderRadius="md"
            boxShadow="md"
          >
            <Image
              src={pic1}
              alt="Vaibhav Gawali"
              boxSize={{ base: "100%", md: "200px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" pl={{ md: 6 }} mt={{ base: 4, md: 0 }}>
              <Text fontSize="xl" fontWeight="bold">Vaibhav Gawali</Text>
              <Text color="gray.600">Co-Founder</Text>
              <Text>
                Vaibhav has 15+ years of IT experience, bringing technical expertise to corporate and industrial clients.
              </Text>
            </VStack>
          </Flex>

          {/* Member 2 */}
          <Flex
            direction={{ base: "column", md: "row" }}
            bg="#f2edeb"
            p={6}
            borderRadius="md"
            boxShadow="md"
          >
            <Image
              src={pic2}
              alt="Prajakta Gawali"
              boxSize={{ base: "100%", md: "200px" }}
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" pl={{ md: 6 }} mt={{ base: 4, md: 0 }}>
              <Text fontSize="xl" fontWeight="bold">Prajakta Gawali</Text>
              <Text color="gray.600">Founder & Principal Architect</Text>
              <Text>
                An award-winning architect with expertise in residential & industrial projects, with work featured in major design magazines.
              </Text>
            </VStack>
          </Flex>
        </Grid>
      </Container>

      {/* Interesting Facts Section */}
      <Box bgImage={`url(${banner})`} bgSize="cover" py={20}  mt={16} position="relative">
        <Box position="absolute" inset={0} bg="blackAlpha.800" />
        <Container maxW="6xl" position="relative">
          <Grid templateColumns={{ base: "1fr", md: "2fr 3fr" }} gap={8} alignItems="center">
            {/* Left Side Text */}
            <VStack align="start" color="white" spacing={3}>
              <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
                Some <span style={{ color: "red" }}>Interesting Facts</span>
              </Text>
              <Text fontSize="lg">
                We deliver design solutions that inspire our clients in less turnaround time.
              </Text>
            </VStack>

            {/* Right Side Counters */}
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }} gap={8} ref={ref}>
              {[
                { label: "Work Experience", value: 18 },
                { label: "Industrial Projects", value: 10 },
                { label: "Corporate Interiors Projects", value: 15 },
              ].map((fact, index) => (
                <VStack key={index} textAlign="center" color="white" spacing={3}>
                  <Text fontSize="4xl" fontWeight="bold" color="yellow.400">
                    {isInView ? <CountUp end={fact.value} duration={3} /> : 0}+
                  </Text>
                  <Divider borderColor="white" width="50px" />
                  <Text>{fact.label}</Text>
                </VStack>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Expert;
