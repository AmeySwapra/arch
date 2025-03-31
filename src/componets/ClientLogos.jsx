import { Box, Heading, Divider, Image, Flex } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from "../assets/client/pic1.webp";
import pic2 from "../assets/client/pic2.webp";
import pic3 from "../assets/client/pic3.webp";
import pic4 from "../assets/client/pic4.webp";
import pic5 from "../assets/client/pic5.webp";
import pic6 from "../assets/client/pic6.webp";
import pic7 from "../assets/client/pic7.webp";
import pic8 from "../assets/client/pic8.webp";
import pic9 from "../assets/client/pic9.webp";
import pic10 from "../assets/client/pic10.webp";
import pic11 from "../assets/client/pic11.webp";
import pic12 from "../assets/client/pic12.webp";
import pic13 from "../assets/client/pic13.webp";
import pic14 from "../assets/client/pic14.webp";
import banner from "../assets/banner/pic4.webp";

const ClientCarousel = () => {
  const clients = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      bgImage={`url(${banner})`}
      bgPos="center"
      py={6}
      px={{ base: 4, md: 8, lg: 24 }}
    >
      <Box maxW="1200px" mx="auto">
        <Box mb={8} textAlign="left">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "4xl" }}
            textTransform="uppercase"
            fontWeight="normal"
            color="black"
          >
            Our Clients
          </Heading>
          <Divider borderColor="black" borderWidth="1px" width="100px" mt={2} />
        </Box>

        <Slider {...settings}>
          {clients.map((logo, index) => (
            <Box key={index} p={2} textAlign="center">
              <Image src={logo} maxH="80px" mx="auto" objectFit="contain" />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ClientCarousel;
