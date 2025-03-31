import { Box, Flex, HStack, IconButton, Button, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo-dark.webp";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="white" px={{base: 4, md: 8, lg : 24}} boxShadow="md" position="sticky" py={4} top={0} zIndex={1000}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                {/* Logo */}
                <Box>
                    <Link to="#">
                        <img src={logo} width="250" alt="Logo" />
                    </Link>
                </Box>
                
                {/* Desktop Menu */}
                <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
                    <Link to="/">Home</Link>
                    
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                            About Us
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/company-profile">Company Profile</MenuItem>
                            <MenuItem as={Link} to="/company-experts">Our Experts</MenuItem>
                            <MenuItem as={Link} to="/company-achivements">Our Achievements</MenuItem>
                        </MenuList>
                    </Menu>
                    
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost">
                            Services
                        </MenuButton>
                        <MenuList>
                            <MenuItem as={Link} to="/architecture-service">Architectural Services</MenuItem>
                            <MenuItem as={Link} to="/interior-design">Interior Design Services</MenuItem>
                        </MenuList>
                    </Menu>
                    
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Button as={Link} to="/enquiry" color="white" bg='black'>Get A Quote</Button>
                </HStack>
                
                {/* Mobile Menu Button */}
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    display={{ base: "flex", md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
            </Flex>

            {/* Mobile Drawer */}
            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <VStack as="nav" spacing={4} mt={12} align="center">
                        <Link to="/">Home</Link>
                        <Link to="/company-profile">Company Profile</Link>
                        <Link to="/company-experts">Our Experts</Link>
                        <Link to="/company-achivements">Our Achievements</Link>
                        <Link to="/architecture-service">Architectural Services</Link>
                        <Link to="/interior-design">Interior Design Services</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact Us</Link>
                        <Button as={Link} to="/enquiry" color="white" bg='black'>Get A Quote</Button>
                    </VStack>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Header;