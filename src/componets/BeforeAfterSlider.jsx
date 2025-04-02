import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";

const BeforeAfterSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const slides = [
    {
      id: 1,
      beforeImage: "images/main-slider/slider1.webp",
      afterImage: "images/main-slider/slide1-b.webp",
      beforeText: "BEFORE",
      afterText: "AFTER",
      description: "Project transformation showcase",
    },
    {
      id: 2,
      beforeImage: "images/main-slider/slider2.webp",
      afterImage: "images/main-slider/slide2-b.webp",
      beforeText: "BEFORE",
      afterText: "AFTER",
      description: "Architectural redesign",
    },
    {
        id: 3,
        beforeImage: "images/main-slider/slider3.webp",
        afterImage: "images/main-slider/slide3-b.webp",
        beforeText: "BEFORE",
        afterText: "AFTER",
        description: "Architectural redesign",
      },
      {
        id: 4,
        beforeImage: "images/main-slider/slider4.webp",
        afterImage: "images/main-slider/slide4-b.webp",
        beforeText: "BEFORE",
        afterText: "AFTER",
        description: "Architectural redesign",
      },
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const position =
      ((e.clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="500px"
      overflowX={'hidden'}
      marginTop="-14px"
      marginBottom="0"
      bg="gray.800"
      ref={containerRef}
      onMouseLeave={() => setSliderPosition(50)}
    >
      {/* Slider Container */}
      <Flex position="absolute" width="100%" height="100%" overflow="hidden">
        {/* Before Image */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backgroundImage={`url(${slides[activeSlide].beforeImage})`}
          backgroundSize="cover"
          backgroundPosition="center center"
          zIndex="1"
        />

        {/* After Image */}
        <Box
          position="absolute"
          width={`${sliderPosition}%`}
          height="100%"
          overflow="hidden"
          zIndex="2"
        >
          <Box
            width="100vw"
            height="100%"
            backgroundImage={`url(${slides[activeSlide].afterImage})`}
            backgroundSize="cover"
            backgroundPosition="center center"
          />
        </Box>

        {/* Slider Control */}
        <Box
          position="absolute"
          left={`${sliderPosition}%`}
          top="0"
          height="100%"
          width="2px"
          bg="whiteAlpha.500"
          zIndex="5"
          transform="translateX(-1px)"
          cursor="ew-resize"
          onMouseDown={handleMouseDown}
        >
          <Flex
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            width="45px"
            height="45px"
            borderRadius="full"
            bg="transparent"
            color="white"
            fontSize="35px"
            alignItems="center"
            justifyContent="center"
            cursor="move"
          >
            <Text mr="10px" color={'black'}>←</Text>
            <Text ml="10px" color={'black'}>→</Text>
          </Flex>
        </Box>

        {/* Text Content - Before */}
        <Flex
          position="absolute"
          width="50%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          zIndex="3"
          px="5"
        ></Flex>

        {/* Text Content - After */}
        <Flex
          position="absolute"
          width="50%"
          height="100%"
          left="50%"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          zIndex="4"
          px="5"
        ></Flex>
      </Flex>

      {/* Navigation Arrows */}
      <Flex
        position="absolute"
        bottom="40px"
        left="50%"
        transform="translateX(-50%)"
        zIndex="10"
      >
        <Button
          variant="ghost"
          color="white"
          onClick={() =>
            setActiveSlide((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
        >
          ←
        </Button>
        <Button
          variant="ghost"
          color="white"
          onClick={() =>
            setActiveSlide((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
        >
          →
        </Button>
      </Flex>
    </Box>
  );
};

export default BeforeAfterSlider;
